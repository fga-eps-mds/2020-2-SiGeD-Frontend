import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import RightBoxInputs from './Style';
import { Label } from '../UserDropdown/Style';
import customStyles from './dropdownStyle';

const SectorDropdown = ({ setSector, sectorID }) => {
  const [id, setId] = useState('');
  const [placeholder, setPlaceholder] = useState('Setor');

  useEffect(() => {
    if (sectorID) {
      setPlaceholder(sectorID);
    }
  }, [sectorID]);
  const options = [
    { value: 'DPSS', label: 'DPSS' },
    { value: 'Clinica', label: 'Clinica' },
    { value: 'Especial', label: 'Especial' },
  ];
  useEffect(() => {
    setSector(id.label);
  }, [id]);

  return (
    <RightBoxInputs>
      <Label>
        Setor:
      </Label>
      <Select
        placeholder={placeholder}
        styles={customStyles}
        options={options}
        onChange={(value) => setId(value)}
      />
    </RightBoxInputs>
  );
};

export default SectorDropdown;
