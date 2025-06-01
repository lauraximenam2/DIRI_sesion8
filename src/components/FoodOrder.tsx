
import { useState, ChangeEvent, MouseEventHandler, useEffect } from 'react';
import { MenuItem, Order, OrderItem } from '../entities/entities';  
import './FoodOrder.css'; 
import { useMenu } from '../context/MenuContext'; // Importamos el hook del contexto

import { db } from '../../firebase-config'; // config de Firebase
import { ref, push } from "firebase/database"; // Funciones de Firebase
import logger from '../services/logging'; // logger

interface FoodOrderProps {
  food: MenuItem; // El item de comida seleccionado para pedir
  onReturnToMenu: MouseEventHandler<HTMLButtonElement>;
}

function FoodOrder(props: FoodOrderProps) {

  const { updateStock } = useMenu(); // Obtenemos updateStock desde el contexto

  // Estado para la cantidad que el usuario quiere pedir
  const [orderQuantity, setOrderQuantity] = useState<number>(1); // Empezar pidiendo 1 por defecto

  // Estado para el mensaje de confirmación
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');
  const [isOrderSent, setIsOrderSent] = useState<boolean>(false); 
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); 


  // Calcula el precio total basado en la cantidad
  const totalPrice = (props.food.price * orderQuantity).toFixed(2);

  // cambios en el input de cantidad
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isOrderSent) return;
    const quantity = parseInt(event.target.value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      setOrderQuantity(quantity);
      setConfirmationMessage('');
    } else if (event.target.value === '') {
      setOrderQuantity(0);
      setConfirmationMessage('');
    }
  };

  const handleSubmitOrder = async () => {
    if (orderQuantity <= 0) {
      setConfirmationMessage('Por favor, introduce una cantidad válida.');
      setIsOrderSent(false);
      return;
    }

    if (orderQuantity > props.food.quantity) {
      setConfirmationMessage(`Lo sentimos, solo quedan ${props.food.quantity} disponibles.`);
      setIsOrderSent(false);
      return;
    }

    setIsSubmitting(true); 
    setConfirmationMessage('Enviando pedido...'); // Mensaje de carga
    logger.info(`Intentando enviar pedido: ${props.food.name} x ${orderQuantity}`);

    try {
      // 1. Crear el objeto del pedido
      const orderItem: OrderItem = {
        menuItemId: props.food.id,
        name: props.food.name,
        quantity: orderQuantity,
        unitPrice: props.food.price,
        totalPrice: parseFloat(totalPrice),
      };
      const newOrder: Order = {
        items: [orderItem],
        orderTotal: parseFloat(totalPrice),
        timestamp: new Date().toISOString(), 
      };

      // 2. Guardar en Firebase
      const ordersRef = ref(db, "orders"); // Crea una referencia a la colección 'orders'
      await push(ordersRef, newOrder); // push genera un ID único
      logger.info("Pedido guardado en Firebase con éxito", { order: newOrder });

      // 3. Actualizar stock localmente (contexto)
      updateStock(props.food.id, orderQuantity);

      setConfirmationMessage(`Pedido de ${orderQuantity} x ${props.food.name} enviado. ¡Gracias!`);
      setIsOrderSent(true);

    } catch (error) {
      logger.error("Error al guardar el pedido en Firebase", error);
      setConfirmationMessage('Error al enviar el pedido. Inténtalo de nuevo.');
      setIsOrderSent(false); 
    } finally {
      setIsSubmitting(false); 
    }
  };

  useEffect(() => {
    setConfirmationMessage('');
    setOrderQuantity(1);
    setIsOrderSent(false);
    setIsSubmitting(false); 
  }, [props.food]);


  return (
    <div className="foodOrderContainer">
      <h3>Detalles del Pedido</h3>
      <div className="orderDetails">
        <img
          className="orderFoodImg"
          src={`${import.meta.env.BASE_URL}images/${props.food.image}`}
          alt={props.food.name}
        />
        <div className="orderInfo">
          <h4>{props.food.name}</h4>
          <p className="orderDesc">{props.food.desc}</p>
          <p className="orderBasePrice">Precio unitario: {props.food.price.toFixed(2)}$</p>
          <div className="quantityControl">
            <label htmlFor={`quantity-${props.food.id}`}>Cantidad:</label>
            <input
              type="number"
              id={`quantity-${props.food.id}`}
              name="quantity"
              min="0"
              value={orderQuantity}
              onChange={handleQuantityChange}
              className="quantityInput"
              disabled={isOrderSent}
            />
          </div>
          <p className="orderTotalPrice">Precio Total: {totalPrice}$</p>
        </div>
      </div>

      {confirmationMessage && (
        <p className={`confirmationMessage ${
            isSubmitting ? 'loading' : 
            (isOrderSent && confirmationMessage.includes('enviado') ? 'success' : 'error')
        }`}>
          {confirmationMessage}
        </p>
      )}
      <div className="orderActions">
        <button
          onClick={handleSubmitOrder}
          className="submitOrderButton"
          disabled={orderQuantity <= 0 || isOrderSent || isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : (isOrderSent ? 'Pedido Enviado' : 'Enviar Pedido')}
        </button>

        <button onClick={props.onReturnToMenu} className="returnMenuButton">
          Volver al menú
        </button>
      </div>
    </div>
  );
}

export default FoodOrder;
