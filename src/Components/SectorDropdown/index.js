import React from 'react';
import Select from 'react-select';
import RightBoxInputs from './Style';
import { Label } from '../UserDropdown/Style';

const SectorDropdown = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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
    <RightBoxInputs>
      <Label>
        Setor:
      </Label>
      <Select
        placeholder="Setor"
        styles={customStyles}
        options={options}
      />
    </RightBoxInputs>
  );
};

export default SectorDropdown;
