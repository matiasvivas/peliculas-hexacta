import React from 'react';
import { render } from '@testing-library/react';
import LoginModal from '../components/login/LoginModal';

describe("Test ComentariosModal", ()=>{
  test('Incluye el contenido Inicio de sesión', async () => {

      const { findAllByText } = render(<LoginModal />);
      expect(await findAllByText('Inicio de sesión')).toBeDefined();
  });

  test('Incluye el label usuario', async () => {

      const { findAllByText } = render(<LoginModal />);
      expect(await findAllByText('Usuario')).toBeDefined();
  });

  test('Incluye el label usuario', async () => {

    const { findAllByText } = render(<LoginModal />);
    expect(await findAllByText('Usuario')).toBeDefined();
});

test('Incluye el label password', async () => {

    const { findAllByText } = render(<LoginModal />);
    expect(await findAllByText('Contraseña')).toBeDefined();
});

})