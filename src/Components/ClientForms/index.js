import { React } from 'react';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import RegisterInput from '../RegisterInput';
import { ClientFormsColumnText, styles } from './Style';
import { Dropdown } from '../UserForms/Style';
import { ClientFormsColumnText, Container, Label } from './Style';
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
}) => {
  const controlarCaracteristicas = (item) => {
    const featuresID = [];
    setSelectedFeatures(item);
    item.map((feat) => featuresID.push(feat._id));
    setSelectedFeaturesID(featuresID);
  };
  return (
    <ClientFormsColumnText>
      <RegisterInput type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput type="text" title="Email" setText={setInputEmail} value={inputEmail} />
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
    </ClientFormsColumnText>
  );
};

export default ClientForms;
