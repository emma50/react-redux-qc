import React from 'react';
import renderer from 'react-test-renderer';
import MediaCard from '../../../components/main/card/Card';

test('create MediaCard snapshot', () => {
  const component = renderer.create(
    <MediaCard/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
