// src/components/UserList.jsx

import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener el componente Navbar
import UserListViews from '../views/UserListViews'; // Ajusta la ruta según sea necesario

const UserList = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="contentleft">
          <button className="buttonmain">Listas:</button>
          <div className="content">
            <UserListViews />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserList;
