import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('MyComponent', () => {
  it('should render correctly when rendered', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
