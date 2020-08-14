import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../../../components/main/image/Image';

test('create Image snapshot', () => {
  const component = renderer.create(
    <Image/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
