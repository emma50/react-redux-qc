import React from 'react';
// import { render, screen } from '@testing-library/react'; 
import renderer from 'react-test-renderer';
import ApplyForLoanPage from '../../../components/pages/public/ApplyForLoanPage';


test('create ApplyForLoanPage snapshot', () => {
  const component = renderer.create(
    <ApplyForLoanPage/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
