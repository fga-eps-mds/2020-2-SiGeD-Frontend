import React from 'react';
import {
  Demandbox, Line, Tag,
} from './Style';

const CategoriesToAdd = ({ category, pushCategory, height }) => (

  <>
    <Line />
    <Demandbox>
      <Tag
        style={{ backgroundColor: category.color }}
        onClick={() => pushCategory(category)}
        height={height}
      >
        {category.name}
      </Tag>
    </Demandbox>
  </>
);

export default CategoriesToAdd;
