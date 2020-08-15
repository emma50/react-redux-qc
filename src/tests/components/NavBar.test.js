import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../../components/navBar/NavBar';

test('create NavBar snapshot', () => {
  const component = renderer.create(
    <NavBar/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})