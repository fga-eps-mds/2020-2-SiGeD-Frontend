import React from 'react';
import {
  Demandbox, Line, Tag,
} from './Style';

const CategoriesToAdd = ({ category }) => (
  <Demandbox>
    <Line />
    <Tag style={{ backgroundColor: category.color }}>
      {category.name}
    </Tag>
  </Demandbox>
);

export default CategoriesToAdd;
