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

const CreateDemandsScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [valid, setValid] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const userID = '605cfd4dfdcb2a006d7b0cb3';
  const [sectorID, setSectorID] = useState('');
  const [categoriesIDs, setCategoriesIDs] = useState([]);
  const [clientID, setClientID] = useState('');
  const [clientName, setClientName] = useState('');
  const [CategoryID, setCategoryID] = useState(''); // temporário

  const getClientsFromApi = async () => {
    await getClients('clients')
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClientsFromApi();
  }, []);

  useEffect(() => {
    console.log(clientID, 'Ids dos clientes');
  }, [clientID]);

  useEffect(() => {
    const IDs = selectedCategories?.map((selectedCategory) => ({
      id: selectedCategory._id,
    }));
    console.log(IDs, 'Ids das Categorias');

    setCategoriesIDs(IDs);
  }, [selectedCategories]);

  const pushCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
    console.log(selectedCategories, 'categorias selecionadas');
  };

  useEffect(() => {
    if (!name || !description || !validateProcess(process)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name, description, process]);

  useEffect(() => {
    setCategoryID(categoriesIDs[0]?.id);
    console.log(CategoryID, 'id da categoria a ser enviada');
  }, [categoriesIDs]);

  const submit = () => {
    console.log(name, description, process, CategoryID, userID, sectorID, clientID);
    if (valid) {
      createDemand(name, description, process, CategoryID, sectorID, userID, clientID);
      alert('Demanda criada com sucesso!');
      setProcess('');
      setDescription('');
      setName('');
    }
  };

  const cancel = () => {
    setName('');
    setProcess('');
    setDescription('');
    setSelectedCategories([]);
    setClientID('');
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
        submit={submit}
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
        <TinyButton type="primary" title="Cadastrar" click={submit} />
      </Footer>
    </Main>
  );
};

export default CreateDemandsScreen;
