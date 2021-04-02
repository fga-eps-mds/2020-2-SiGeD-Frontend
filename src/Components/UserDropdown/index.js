import React from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { UserSearchDiv, Label } from './Style';

const UserDropdown = ({ clients, setClientID }) => {
  const options = clients.map((client) => ({
    name: client.name,
    value: client._id,
  }));

  return (
    <UserSearchDiv>
      <Label>
        Cliente:
      </Label>
      <SelectSearch
        options={options}
        search
        filterOptions={fuzzySearch}
        emptyMessage="Nenhum cliente encontrado"
        placeholder="Selecione um cliente"
        onChange={(value) => setClientID(value)}
      />

    </UserSearchDiv>
  );
};

export default UserDropdown;
