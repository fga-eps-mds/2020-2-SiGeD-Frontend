import React from 'react';
import Select from 'react-select';
import { UserSearchDiv, Label } from './Style';
import './input.css';

const UserDropdown = ({ clients, setClientID }) => {
  const options = clients?.map((client) => ({
    label: client.name,
    value: client._id,
  }));

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'black' : 'black',
      padding: '5%',
    }),
    control: () => ({
      color: 'white',
      display: 'flex',
      borderRadius: '10px',
      border: '1px solid #FFFFFF',
      width: '25vw',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = 'white';
      return {
        ...provided, opacity, transition, color,
      };
    },
  };

  return (
    <UserSearchDiv>
      <Label>
        Cliente:
      </Label>
      <Select
        placeholder="Cliente"
        styles={customStyles}
        options={options}
        onChange={(value) => setClientID(value)}
      />
    </UserSearchDiv>
  );
};

export default UserDropdown;
