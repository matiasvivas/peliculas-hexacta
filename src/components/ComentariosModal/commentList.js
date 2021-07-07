import React, { useEffect, useState } from 'react';
import './modal.css';

const CommentList = (props) => {

        const [list, setList] = useState([]);
        useEffect(() => {
           setList(JSON.parse(localStorage.getItem(`comentary_${props.movieId}`))||[]);
       }, []);
   
        return (
          <ul>{list.map((comentario) =>
           <div className="div-alineacion">
              <p className="contenido-comentario">{comentario}
              <i className="fa fa-user-secret" aria-hidden="true" style={{ position: 'initial' }}></i>
              </p>
              </div>
         )}</ul>
        );
   
}
export default CommentList;