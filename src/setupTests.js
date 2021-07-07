import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json'
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );



import '@testing-library/jest-dom/extend-expect';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};
