// src/pages/AdminStockPage.tsx
import React from 'react';
import { useMenu } from '../context/MenuContext';
import logger from '../services/logging';

const AdminStockPage: React.FC = () => {
  const { menuItems } = useMenu();
  logger.info("AdminStockPage: Mostrando stock (solo para ADMIN).");

  return (
    <div>
      <h3 className="title">Disponibilidad de Productos (Admin)</h3>
      <ul className="ulApp"> 
        {menuItems.map((item) => (
          <li key={item.id} className="liApp">
            <p>{item.name}</p>
            <p>Stock: #{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminStockPage;