import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Home from '../pages/Home/Home';
import { shallow } from 'enzyme';
import {getPeliculas} from '../tests/async-await';

jest.mock('axios', () => {
  let _instance;
 
  return {
    create: () => {
      _instance = {
        get: jest.fn()
          .mockResolvedValue({ data: { page: 1,results: [] } })
      };
      return _instance;
    },
    _getInstance: () => _instance
  };
});

describe("Test Home", ()=>{
    test('Incluye el contenido Posters como titulo', async () => {

        const { findAllByText } = render(<Home />);
        expect(await findAllByText('Posters')).toBeDefined();
    });

    test('Incluye el boton de Login', async () => {

        const { findAllByText } = render(<Home />);
        expect(await findAllByText('Login')).toBeDefined();
    });


    test('Simula click en Login', () => {
      const wrapper = shallow(<Home/>);
      wrapper.find('button').at(0).simulate('click');
  });

  test('Simula click en Comentarios', () => {
    const wrapper = shallow(<Home/>);
    wrapper.find('button').at(0).simulate('click');
});

global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
            Promise.resolve({
                results: [
                    { title: { peli: "Peli 1" } },
                    { title: { peli: "Peli 2" } },
                    { title: { peli: "Peli 3" } },
                    { title: { peli: "Peli 4" } },
                    { title: { peli: "Cruella" } },
                 ],
                }),
            })
        );
 
        beforeEach(() => {
        fetch.mockClear();
        });
 
        test("Encontrar titulo de la pelicula 4", async () => {
        const rate = await getPeliculas();
 
        expect(rate).toEqual({ peli: "Cruella" });
        expect(fetch).toHaveBeenCalledTimes(1);
        });

        test('Probar existencia de los titulos de las peliculas', async () => {
          const data = {
            results: [
              { title: { peli: "Peli 1" } },
              { title: { peli: "Peli 2" } },
              { title: { peli: "Peli 3" } },
              { title: { peli: "Peli 4" } },
              { title: { peli: "Cruella" } },
           ],
          };
          axios._getInstance().get.mockResolvedValueOnce(data)
        });

  test('Probar existencia de años 2021 para las peliculas', async () => {
    const data = {
        results: [
                    { year: { peli: "2021" } },
                    { year: { peli: "2021" } },
                    { year: { peli: "2021" } },
                    { year: { peli: "2021" } },
                    { year: { peli: "2021" } },
                ],
    };
    axios._getInstance().get.mockResolvedValueOnce(data)
  });

    test('Probar existencia de generos id similares', async () => {
      const data = {
          results: [
                      { geners_id: { peli: "16" } },
                      { geners_id: { peli: "2351" } },
                      { geners_id: { peli: "35" } },
                      { geners_id: { peli: "2809" } },
                      { geners_id: { peli: "10751" } },
                  ],
      };
   
      axios._getInstance().get.mockResolvedValueOnce(data)
    });

})