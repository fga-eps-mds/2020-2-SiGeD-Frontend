import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Main, Footer } from './Style';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { createDemand } from '../../Services/Axios/demandsServices';
import DemandsDescription from '../../Components/DemandsDescription';
import SelectedCategories from '../../Components/SelectedCategories';
import UserDropdown from '../../Components/UserDropdown';
import { getClients } from '../../Services/Axios/clientServices';
import TinyButton from '../../Components/TinyButton';
import ConfirmDemandModal from '../../Components/ConfirmDemandModal';
import ModalMessage from '../../Components/ModalMessage';
import { useProfileUser } from '../../Context';

const CreateDemandsScreen = () => {
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const [sectorID, setSectorID] = useState('');
  const [categoriesIDs, setCategoriesIDs] = useState([]);
  const [clientID, setClientID] = useState('');
  const [clientName, setClientName] = useState('');
  const { user, startModal } = useProfileUser();

  const getClientsFromApi = async () => {
    await getClients('clients', startModal)
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
    selectedCategories.forEach((passCategory) => {
      if (category._id === passCategory._id) {
        alreadySelected = true;
      }
    });
    if (!alreadySelected) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setMessage('A categoria escolhida ja foi selecionada');
      handleShowMessage();
    }
  };

  const validateInputs = () => {
    if (!name || !description || !sectorID || !clientID || categoriesIDs === undefined) {
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validateInputs()) {
      setMessage('Demanda criada com sucesso!');
      handleShowMessage();
      createDemand(name, description, process, categoriesIDs, sectorID, user._id, clientID);
      setProcess('');
      setDescription('');
      setName('');
      setSelectedCategories([]);
      setSectorID('');
      setClientID('');
      setCategoriesIDs([]);
    } else {
      setMessage('Preencha todos os campos antes de cadastrar uma nova demanda.');
      handleShowMessage();
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

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

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
        buttomName="Cadastrar"
      />
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
        actionName="Você tem certeza que gostaria de criar essa demanda?"
      />
      <ModalMessage
        show={showMessage}
        handleClose={handleCloseMessage}
        message={message}
      />
    </Main>
  );
};

export default CreateDemandsScreen;
