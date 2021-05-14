import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import RegisterInput from '../RegisterInput';
import { Dropdown } from '../UserForms/Style';
import {
  ClientFormsColumnText, Container, Label, styles,
} from './Style';
import colors from '../../Constants/colors';

const ClientForms = ({
  setInputName,
  inputName,
  setInputEmail,
  inputEmail,
  setInputCpf,
  inputCpf,
  setInputPhone,
  inputPhone,
  setInputSecondaryPhone,
  secondaryPhone,
  setInputAddress,
  inputAddress,
  setOfficeOption,
  setLocationOption,
  locationOption,
  featuresList,
  setSelectedFeatures,
  selectedFeatures,
  setSelectedFeaturesID,
  setInputImage,
  baseImage,
  setBaseImage,
}) => {
  const [baseImage, setBaseImage] = useState('');
  
  const controlarCaracteristicas = (item) => {
    const featuresID = [];
    setSelectedFeatures(item);
    item.map((feat) => featuresID.push(feat._id));
    setSelectedFeaturesID(featuresID);
  };

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

  useEffect(() => {
    setInputImage(baseImage);
  }, [baseImage]);

  return (
    <ClientFormsColumnText>
      <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />
      <RegisterInput type="text" title="Endereco" setText={setInputAddress} value={inputAddress} />
      <RegisterInput type="text" title="Telefone principal" setText={setInputPhone} value={inputPhone} />
      <RegisterInput type="text" title="Telefone secundario" setText={setInputSecondaryPhone} value={secondaryPhone} />
      <Form.Group style={styles.formGroup}>
        <Form.Label style={styles.formLabel}>Cargo:</Form.Label>
        <div style={styles.roleDiv}>
          <Dropdown
            as="select"
            onChange={(Option) => setOfficeOption(Option.target.value)}
            style={{ border: '0' }}
          >
            <option>Policial</option>
            <option>Enfermeiro(a)</option>
            <option>Secretário(a)</option>
            <option>Servidor(a)</option>
            <option>Administrador(a)</option>
          </Dropdown>
        </div>
      </Form.Group>
      <RegisterInput type="text" title="Lotação" setText={setLocationOption} value={locationOption} />
      <Container long>
        <Label>
          Caracteristicas:
        </Label>
        <Multiselect
          options={featuresList}
          selectedValues={selectedFeatures}
          onSelect={controlarCaracteristicas}
          onRemove={controlarCaracteristicas}
          displayValue="name"
          placeholder=""
          emptyRecordMsg="Não há nenhuma característica disponível"
          style={{
            searchBox: {
              border: '2px solid black',
              borderRadius: '12px',
              height: 'max-content',
            },
            chips: {
              backgroundColor: colors.navHeaders, // colors.primary,
            },
          }}
          avoidHighlightFirstOption="true"
          showArrow="true"
          closeOnSelect="false"
        />
      </Container>
      <div>
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </div>
    </ClientFormsColumnText>
  );
};

export default ClientForms;
