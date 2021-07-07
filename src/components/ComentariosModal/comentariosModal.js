import React from 'react';
import './modal.css';
import CommentList from '../ComentariosModal/commentList';

const Modal = (props) => {

   const divStyle = {
      display: props.displayModal ? 'block' : 'none'
   };
   const closeModal =(e)=> {
      e.stopPropagation()
      props.closeModal()
   }

   return (
      <div className="modal" onClick={closeModal} style={divStyle}>
         <div className="modal-content" onClick={e => e.stopPropagation()} >
            <span className="close" onClick={closeModal}>&times;
            </span>
            <h3 id="componentTest" className="modal-title">Comentarios sobre la pelicula {`${props.titulo}`}</h3>
            <br></br>
            <div>
            <CommentList movieId={props.movieId} />
            </div>
            <button className="form-control boton-cerrar" onClick={closeModal}>Cerrar</button>
         </div>
      </div>
   );
}
export default Modal;