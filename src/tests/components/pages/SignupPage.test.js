import React from 'react';
// import { render, screen } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import SignupPage from '../../../components/pages/public/SignupPage';

test('create SignupPage snapshot', async () => {
  const component = renderer.create(
    <SignupPage/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
