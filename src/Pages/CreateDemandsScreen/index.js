import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
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
import { useProfileUser } from '../../Context';
import removeCategory from '../../Utils/functions';

const CreateDemandsScreen = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
  const history = useHistory();

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

  const deleteCategory = (searchCategory) => {
    setSelectedCategories(removeCategory(searchCategory, selectedCategories));
  };

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
      startModal('A categoria escolhida ja foi selecionada');
    }
  };

  const validateInputs = () => {
    if (!name || !description || !sectorID || !clientID || categoriesIDs === undefined) {
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (validateInputs()) {
      startModal('Demanda criada com sucesso!');
      const data = await createDemand(
        name,
        description,
        process,
        categoriesIDs,
        sectorID,
        user._id,
        clientID,
        startModal,
      ).then((response) => response.data);
      return history.push(`/visualizar/${data._id}`);
    }
    startModal('Preencha todos os campos antes de cadastrar uma nova demanda.');
    return undefined;
  };

  const cancel = () => {
    history.push('/demandas');
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
        clientID={clientID}
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
          removeCategory={deleteCategory}
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
    </Main>
  );
};

export default CreateDemandsScreen;
