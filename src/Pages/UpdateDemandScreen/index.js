import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Main, Footer } from './Style';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { updateDemand, getDemands } from '../../Services/Axios/demandsServices';
import { getClients } from '../../Services/Axios/clientServices';
import { validateProcess } from '../../Utils/validations';
import DemandsDescription from '../../Components/DemandsDescription';
import SelectedCategories from '../../Components/SelectedCategories';
import TinyButton from '../../Components/TinyButton';
import ConfirmDemandModal from '../../Components/ConfirmDemandModal';

const UpdateDemandsScreen = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [valid, setValid] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clientID, setClientID] = useState('');
  const [userID, setUserID] = useState('');
  const [sectorID, setSectorID] = useState('');
  const [categoriesIDs, setCategoriesIDs] = useState(['']);
  const [clientName, setClientName] = useState('');
  const [CategoryID, setCategoryID] = useState(''); // temporário
  const { id } = useParams();

  const getClientFromApi = async (idd) => {
    console.log(idd, 'teste');
    getClients(`clients/${idd}`)
      .then((responsee) => {
        const { client } = responsee;
        console.log(client, 'arrumar');
        setClientName(client.name);
      });
  };

  const getDemandsFromApi = async () => {
    await getDemands(`demand/${id}`)
      .then((response) => {
        const { data } = response;
        setName(data.name);
        setDescription(data.description);
        setProcess(data.process);
        setSectorID(data.sectorID);
        setCategoriesIDs(data.categoryID);
        setCategoryID(data.categoryID);
        setClientID(data.clientID);
        setUserID(data.userID);
        getClientFromApi(data.clientID);
        // setClientName(data.userID.name);
      });
  };

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    const IDs = selectedCategories?.map((selectedCategory) => ({
      id: selectedCategory._id,
    }));
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

  useEffect(() => {
    if (!name || !description || !validateProcess(process)
      || !sectorID || !clientID || categoriesIDs.length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name, description, process, sectorID, selectedCategories, clientID]);

  useEffect(() => {
    setCategoryID(categoriesIDs[0]?.id);
  }, [categoriesIDs]);

  const submit = () => {
    if (valid) {
      updateDemand(
        name, description, process, CategoryID, sectorID, userID, clientID, id,
      );
      alert('Demanda criada com sucesso!');
      setProcess('');
      setDescription('');
      setName('');
      setSelectedCategories([]);
      setSectorID('');
      setCategoryID('');
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
    setSectorID('');
    setCategoryID('');
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
        <div display="none" />
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

export default UpdateDemandsScreen;
