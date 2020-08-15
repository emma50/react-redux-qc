import React from 'react';
// import { render, screen } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import SigninPage from '../../../components/pages/public/SigninPage';


test('create SigninPage snapshot', () => {
  const component = renderer.create(
    <SigninPage/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
