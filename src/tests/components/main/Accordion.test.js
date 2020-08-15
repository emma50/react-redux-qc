import React from 'react';
import renderer from 'react-test-renderer';
import SimpleAccordion from '../../../components/main/accordion/Accordion';

test('create Accordion snapshot', () => {
  const component = renderer.create(
    <SimpleAccordion/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
