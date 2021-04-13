import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import RightBoxInputs from './Style';
import { Label } from '../UserDropdown/Style';
import customStyles from './dropdownStyle';
import { getSectors } from '../../Services/Axios/sectorServices';

const SectorDropdown = ({ setSector, sectorName }) => {
  const [id, setId] = useState('');
  const [placeholder, setPlaceholder] = useState(sectorName);
  const [listOfSectors, setListOfSectors] = useState([]);

  const listSectors = async () => {
    await getSectors()
      .then((response) => setListOfSectors(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting sectors.${error}`);
      });
  };

  useEffect(() => {
    listSectors();
  }, []);

  useEffect(() => {
    if (sectorName) {
      setPlaceholder(sectorName);
    }
  }, [sectorName]);

  const options = listOfSectors?.map((sector) => ({
    label: sector.name,
    value: sector._id,
  }));

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
