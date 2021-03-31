import React from 'react';
import {
  Demandbox, Line, Tag,
} from './Style';

const CategoriesToAdd = ({ category }) => (
  <Demandbox>
    <Tag style={{ backgroundColor: category.color }}>
      <p>
        {category.name}
      </p>
    </Tag>
    <Line />
  </Demandbox>
);

export default CategoriesToAdd;
