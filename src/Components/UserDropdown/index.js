import React from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { UserSearchDiv, Label } from './Style';

const UserDropdown = ({ clients }) => (
  <UserSearchDiv>
    <Label>
      Cliente:
    </Label>
    <SelectSearch
      options={clients}
      search
      filterOptions={fuzzySearch}
      emptyMessage="Nenhum cliente encontrado"
      placeholder="Selecione um cliente"
      style={{ width: '100%' }}
    />
  </UserSearchDiv>
);

export default UserDropdown;
