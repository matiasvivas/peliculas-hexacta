import React, { useState, useContext } from 'react';
import './login.css';
import {UserContext} from '../../contexts/UserContext';

const LoginModal = (props) => {

   const { cargarUsuario } = useContext(UserContext)

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const handleInputUsername = (event) => {
      setUsername({
         ...username,
          [event.target.name]: event.target.value
      })
  }

  const handleInputPassword = (event) => {
   setPassword({
      ...password,
       [event.target.name]: event.target.value
   })
}

   const handleClick = () => {
      cargarUsuario(username.uname);

      /*API.get(`usuarios?token=${username + password}`).then(resultado => {

          if (resultado.data.length) {
             console.log(resultado.data);
              //cargarUsuario(resultado.data[0])
              //window.location.href = "/home"
              //Usar router para redireccion a la home
          } else {
             console.log("Error");
          }
      }).catch(error => {
         console.log("error catch");
      })*/

      props.closeModal();
  }

   const divStyle = {
      display: props.displayModal ? 'block' : 'none'
   };
   const closeModal = (e) => {
      e.stopPropagation()
      props.closeModal()
   }

   return (
      <div className="modal" onClick={closeModal} style={divStyle}>
         <div className="modal-contentLogin" onClick={e => e.stopPropagation()} >
            <span className="close" onClick={closeModal}>&times;
            </span>
            <h3 className="modal-title">Inicio de sesión</h3>
            <div className="imgcontainer">
               <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
            </div>
            <div className="container">
               <label><b>Usuario</b></label>
               <input type="text" placeholder="Ingrese su usuario" name="uname" required onChange={handleInputUsername}/>

               <label><b>Contraseña</b></label>
               <input type="password" placeholder="Ingrese su contraseña" name="psw" required onChange={handleInputPassword}/>
               <button onClick={handleClick}>Login</button>
            </div>
         </div>
      </div>
   );
}
export default LoginModal;