import React from 'react';
import { render, screen } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import Footer from '../../components/footer/Footer';


test('render Footer', () => {
  render(<Footer/>);
  expect(screen.getByText(/apply now/i)).toBeInTheDocument();
  expect(screen.getByText(/recents/i)).toBeInTheDocument();
  expect(screen.getByText(/favorites/i)).toBeInTheDocument();
  expect(screen.getByText(/nearby/i)).toBeInTheDocument();
})

test('create Footer snapshot', () => {
  const component = renderer.create(
    <Footer/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
