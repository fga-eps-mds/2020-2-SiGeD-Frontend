import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { UserSearchDiv, Label } from './Style';
import './input.css';
import customStyles from '../SectorDropdown/dropdownStyle';

const UserDropdown = ({ clients, setClientID, setClientName }) => {
  const [id, setId] = useState('');
  const options = clients?.map((client) => ({
    label: client.name,
    value: client._id,
  }));

  useEffect(() => {
    setClientID(id.value);
    setClientName(id.label);
  }, [id]);

  return (
    <UserSearchDiv>
      <Label>
        Cliente:
      </Label>
      <Select
        placeholder="Cliente"
        styles={customStyles}
        options={options}
        onChange={(e) => setId(e)}
      />
    </UserSearchDiv>
  );
};

export default UserDropdown;
