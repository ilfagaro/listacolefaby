import UserList from "../components/UserList";

function UserListView(){
    return(
        
        <UserList/>
    )
}// src/views/UserListViews.jsx

import React from 'react';
import StudentForm from '../components/StudentForm'; // Ajusta la ruta según sea necesario
import StudentList from '../components/StudentList'; // Ajusta la ruta según sea necesario

const UserListViews = () => {
  return (
    <div>
      <section className="formlist">
        <StudentForm />
      </section>
      <section className="formresult">
        <h2>List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody id="studentTableBody">
            {/* Los datos ingresados se mostrarán aquí */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserListViews;
