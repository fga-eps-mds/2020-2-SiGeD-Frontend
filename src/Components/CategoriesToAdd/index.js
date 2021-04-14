import React from 'react';
import {
  Demandbox, Line, Tag,
} from './Style';

const CategoriesToAdd = ({ category, pushCategory }) => (

  <Demandbox>
    <Line />
    <Tag
      style={{ backgroundColor: category.color }}
      onClick={() => pushCategory(category)}
    >
      {category.name}
    </Tag>
  </Demandbox>
);

export default CategoriesToAdd;
