import React from 'react';
import '@testing-library/jest-dom'
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme'
import CommentList from '../components/ComentariosModal/commentList';

describe("Test CommentList", ()=>{

  test('Funciona la lista de comentarios', () => {
    const component = ReactTestUtils.renderIntoDocument(<CommentList/>);    
    var ul = ReactTestUtils.findRenderedDOMComponentWithTag(
     component, 'ul'
   );
});

test("Muestra que la lista className existe", () => {
  const wrapper = shallow(<CommentList />);
expect(
    wrapper.find(".div-alineacion").length
).toBe(1);
});

})