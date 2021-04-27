import React, { useEffect, useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { Main, Footer } from './Style';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { updateDemand, getDemands } from '../../Services/Axios/demandsServices';
import { getSector } from '../../Services/Axios/sectorServices';
import { getClients } from '../../Services/Axios/clientServices';
import DemandsDescription from '../../Components/DemandsDescription';
import SelectedCategories from '../../Components/SelectedCategories';
import TinyButton from '../../Components/TinyButton';
import ConfirmDemandModal from '../../Components/ConfirmDemandModal';
import { useProfileUser } from '../../Context';

const UpdateDemandsScreen = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clientID, setClientID] = useState('');
  const [userID, setUserID] = useState('');
  const [sectorID, setSectorID] = useState('');
  const [categoriesIDs, setCategoriesIDs] = useState([]);
  const [clientName, setClientName] = useState('');
  const [sectorName, setSectorName] = useState('');
  const { id } = useParams();
  const { startModal } = useProfileUser();

  const getClientFromApi = async (client) => {
    await getClients(`clients/${client}`, startModal)
      .then((response) => {
        const { data } = response;
        setClientName(data?.name);
      });
  };

  const getSectorFromApi = async (sector) => {
    await getSector(`sector/${sector}`, startModal)
      .then((response) => {
        const { data } = response;
        setSectorName(data?.name);
      });
  };

  const getDemandsFromApi = async () => {
    await getDemands(`demand/${id}`, startModal)
      .then((response) => {
        const { data } = response;
        setName(data?.name);
        setDescription(data?.description);
        setProcess(data?.process);
        setSelectedCategories(data?.categoryID);
        setClientID(data?.clientID);
        setSectorID(data?.sectorHistory[0].sectorID);
        getSectorFromApi(data?.sectorHistory[0].sectorID);
        setUserID(data?.userID);
        getClientFromApi(data?.clientID);
      });
  };

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    const IDs = selectedCategories?.map((selectedCategory) => selectedCategory._id);
    setCategoriesIDs(IDs);
  }, [selectedCategories]);

  const removeCategory = (category) => {
    const newSelectedCategories = selectedCategories.filter(
      (remove) => remove._id !== category._id,
    );
    setSelectedCategories(newSelectedCategories);
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
      startModal('A categoria escolhida ja foi selecionada.');
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
      updateDemand(
        name, description, process, categoriesIDs, sectorID, userID, clientID, id, startModal,
      );
      startModal('Demanda editada com sucesso!');
      history.push('/demandas');
    } else {
      startModal('Preencha todos os campos antes de cadastrar uma nova demanda.');
    }
  };

  const cancel = () => {
    setName('');
    setProcess('');
    setDescription('');
    setSelectedCategories([]);
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
        buttomName="Editar"
      />
      <RightBoxComponent
        clientName={clientName}
      >
        <div display="none" />
        <SectorDropdown
          setSector={setSectorID}
          sectorID={sectorID}
          sectorName={sectorName}
        />
        <CategoryDiv
          selectedCategories={selectedCategories}
          pushCategory={pushCategory}
        />
        <SelectedCategories
          selectedCategories={selectedCategories}
          removeCategory={removeCategory}
        />
      </RightBoxComponent>
      <Footer>
        <TinyButton type="secondary" title="Cancelar" click={cancel} />
        <TinyButton type="primary" title="Editar" click={handleShow} />
      </Footer>
      <ConfirmDemandModal
        show={show}
        handleClose={handleClose}
        submit={submit}
        actionName="Você deseja editar essa demanda?"
      />
    </Main>
  );
};

export default UpdateDemandsScreen;
