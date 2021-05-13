import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import { UserFormsColumnText, Dropdown, styles } from './Style';
import { getSectors } from '../../Services/Axios/sectorServices';
import DropdownComponent from '../DropdownComponent';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const UserForms = ({
  setInputName,
  inputName,
  setInputEmail,
  inputEmail,
  setInputRole,
  inputRole,
  setInputSector,
  inputSector,
  setInputImage,
  setSectors,
  sectors,
}) => {
  const [filterSector, setFilterSector] = useState([]);
  const { startModal } = useProfileUser();
  const [baseImage, setBaseImage] = useState('');

  const convertBase64 = (file) => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setInputImage(baseImage);
  };

  const getSectorsFromApi = async () => {
    await getSectors(startModal)
      .then((response) => {
        setSectors(response?.data);
        setInputSector(response?.data[0]?.name);
      });
  };

  useEffect(() => {
    setInputImage(baseImage);
  }, [baseImage]);

  useEffect(() => {
    getSectorsFromApi();
  }, []);

  useEffect(() => {
    setFilterSector(sectors);
  }, [sectors]);

  return (
    <UserFormsColumnText>
      <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Cargo:</Form.Label>
        <div style={styles.formGroupDiv}>
          <Dropdown
            as="select"
            value={inputRole}
            style={styles.dropdownStyle}
            onChange={(Option) => setInputRole(Option.target.value)}
          >
            <option>Administrador(a)</option>
            <option>Profissional</option>
            <option>Recepcionista</option>
          </Dropdown>
        </div>
      </Form.Group>
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Setor:</Form.Label>
        <div style={styles.formGroupDiv}>
          <DropdownComponent
            as="select"
            value={inputSector}
            OnChangeFunction={(Option) => setInputSector(Option.target.value)}
            style={styles.dropdownComponentStyle}
            optionStyle={{
              backgroundColor: `${colors.secondary}`,
            }}
            optionList={filterSector?.map((sector) => sector.name)}
          />
        </div>
      </Form.Group>
      <div>
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </div>
    </UserFormsColumnText>
  );
};

export default UserForms;
