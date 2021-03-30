import React from 'react';
import {
  Personalbox, TableContent, Name, Content, TableContainer,
} from './Style';

const CategoriesToAdd = ({ category }) => (
  <Content>
    <Personalbox>
      <TableContainer>
        <TableContent width={33}>
          <Name color={category.color}>{category.name}</Name>
        </TableContent>

      </TableContainer>
    </Personalbox>
  </Content>
);

export default CategoriesToAdd;
