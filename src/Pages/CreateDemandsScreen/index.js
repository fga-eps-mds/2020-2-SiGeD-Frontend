import React, { useEffect, useState } from 'react';
import { Main, Footer } from './Style';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { createDemand } from '../../Services/Axios/demandsServices';
import { validateProcess } from '../../Utils/validations';
import DemandsDescription from '../../Components/DemandsDescription';
import SelectedCategories from '../../Components/SelectedCategories';
import UserDropdown from '../../Components/UserDropdown';
import { getClients } from '../../Services/Axios/clientServices';
import TinyButton from '../../Components/TinyButton';
import ConfirmDemandModal from '../../Components/ConfirmDemandModal';

const CreateDemandsScreen = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const userID = '605cfd4dfdcb2a006d7b0cb3';
  const [sectorID, setSectorID] = useState('');
  const [categoriesIDs, setCategoriesIDs] = useState([]);
  const [clientID, setClientID] = useState('');
  const [clientName, setClientName] = useState('');

  const getClientsFromApi = async () => {
    await getClients('clients')
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClientsFromApi();
  }, []);

  useEffect(() => {
    const IDs = selectedCategories?.map((selectedCategory) => selectedCategory._id);
    setCategoriesIDs(IDs);
  }, [selectedCategories]);

  const pushCategory = (category) => {
    let alreadySelected = false;
    for (let c = 0; c < selectedCategories.length; c += 1) {
      if (category._id === selectedCategories[c]._id) {
        alreadySelected = true;
      }
    }
    if (!alreadySelected) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      alert('A categoria escolhida ja foi selecionada');
    }
  };

  const validateInputs = () => {
    if (!name || !description || !validateProcess(process)
      || !sectorID || !clientID || categoriesIDs === undefined) {
      return false;
    }
    return true;
  };

  const submit = () => {
    console.log(name, description, process, categoriesIDs, sectorID, userID, clientID, 'submit');
    if (validateInputs()) {
      createDemand(name, description, process, categoriesIDs, sectorID, userID, clientID);
      alert('Demanda criada com sucesso!');
      setProcess('');
      setDescription('');
      setName('');
      setSelectedCategories([]);
      setSectorID('');
      setClientID('');
      setCategoriesIDs([]);
    } else {
      alert('Preencha todos os campos antes de cadastrar uma nova demanda');
    }
  };

  const cancel = () => {
    setName('');
    setProcess('');
    setDescription('');
    setSelectedCategories([]);
    setClientID('');
    setSectorID('');
    setCategoriesIDs([]);
  };

  return (
    <Main>
      <DemandsDescription
        name={name}
        setName={setName}
        process={process}
        setProcess={setProcess}
        description={description}
        setDescription={setDescription}
        submit={handleShow}
        cancel={cancel}
      />
      {/* Começa aki */}
      <RightBoxComponent
        clientName={clientName}
      >
        <UserDropdown
          clients={clients}
          setClientID={setClientID}
          setClientName={setClientName}
        />
        <SectorDropdown
          setSector={setSectorID}
          sector={sectorID}
        />
        <CategoryDiv
          selectedCategories={selectedCategories}
          pushCategory={pushCategory}
        />
        <SelectedCategories
          selectedCategories={selectedCategories}
        />
      </RightBoxComponent>
      <Footer>
        <TinyButton type="secondary" title="Cancelar" click={cancel} />
        <TinyButton type="primary" title="Cadastrar" click={handleShow} />
      </Footer>
      <ConfirmDemandModal
        show={show}
        handleClose={handleClose}
        submit={submit}
      />
    </Main>
  );
};

export default CreateDemandsScreen;
