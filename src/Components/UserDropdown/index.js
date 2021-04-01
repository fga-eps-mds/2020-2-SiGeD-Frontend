import React, { useEffect } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { UserSearchDiv, Label } from './Style';

const UserDropdown = ({ clients }) => {
  let options = [];

  useEffect(() => {
    options = clients.map((client, index) => ({
      name: client.name,
      value: index,
    }));
    console.log(options);
  }, []);

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
      />

    </UserSearchDiv>
  );
};

export default UserDropdown;
