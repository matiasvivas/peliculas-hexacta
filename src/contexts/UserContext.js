import React, {createContext, useState} from 'react';

const defaultUserData = {
    usuario: {nombre: '', apellido: '', token: ''},
    cargarUsuario: () => {}
};

export const UserContext = createContext(defaultUserData);

const UserContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState();

    const cargarUsuario = (uname) => {
        localStorage.setItem('usuario', uname);
        setUsuario(uname);
    }

    return (
        <UserContext.Provider value={{usuario, cargarUsuario}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;