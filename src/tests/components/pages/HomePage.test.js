import React from 'react';
// import { render, screen } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import HomePage from '../../../components/pages/public/HomePage';


test('create HomePage snapshot', () => {
  const component = renderer.create(
    <HomePage/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
