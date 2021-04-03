import { Form } from 'react-bootstrap';
import colors from '../../Constants/colors';
import { Dropdown } from '../UserForms/Style';
import RightBoxInputs from './Style';

const SectorDropdown = () => (

  <RightBoxInputs>
    <Form.Group style={{ width: '80%', marginTop: '5%', marginRight: '10%' }}>
      <Form.Label><p style={{ fontSize: '1.5rem' }}>Setor:</p></Form.Label>
      <div style={{
        boxSizing: 'border-box', borderRadius: '10px', border: '1px solid #ffffff', justifyContent: 'flex-start', display: 'flex',
      }}
      >
        <Dropdown
          textcolor="white"
          as="select"
          style={{ color: 'white' }}
        >
          <option style={{ backgroundColor: `${colors.navHeaders}`, width: '100%' }}>Administrador(a)</option>
          <option style={{ backgroundColor: `${colors.navHeaders}`, width: '100%' }}>Profissional</option>
          <option style={{ backgroundColor: `${colors.navHeaders}`, width: '100%' }}>Recepcionista</option>
        </Dropdown>
      </div>
    </Form.Group>
  </RightBoxInputs>
);

export default SectorDropdown;
