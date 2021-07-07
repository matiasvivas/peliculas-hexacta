import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {

    return (
        <div>
            <h5>Cargando...</h5>
            <Spinner color="primary"/>
        </div>
    );
}

export default Loading;