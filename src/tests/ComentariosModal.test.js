jest.mock('axios', () => ({
    create: () => ({
      get: jest.fn()
      .mockResolvedValue({data:{"page":1,"results":[]}})
    })
  }))

import React from 'react';
import { render } from '@testing-library/react';
import ComentariosModal from '../components/ComentariosModal/comentariosModal';

describe("Test ComentariosModal", ()=>{

  test('Incluye el boton cerrar', async () => {

      const { findAllByText } = render(<ComentariosModal />);
      expect(await findAllByText('Cerrar')).toBeDefined();
  });
})