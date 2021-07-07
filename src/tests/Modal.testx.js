import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MovieCard from '../components/MovieCard/index'
import Modal from '../components/comentariosModal/comentariosModal';

describe('Testing <MovieCard />', () => {
    const wrapper = shallow( 
        <MovieCard /> 
    );
    const wrapper2 = shallow(<Modal/>);

    test('Simula abrir la ventana modal', () => {

        wrapper.find('#comentarios').at(0).simulate('click');
        const counterText = wrapper2.find('button').text().trim();
        expect( counterText ).toBe('Cerrar');

    })

})