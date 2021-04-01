import React, { useEffect, useState } from 'react';
import Main from './Style';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { createDemand } from '../../Services/Axios/demandsServices';
import { validateProcess } from '../../Utils/validations';
import DemandsDescription from '../../Components/DemandsDescription';
import SelectedCategories from '../../Components/SelectedCategories';
import UserDropdown from '../../Components/UserDropdown';
import { getClients } from '../../Services/Axios/clientServices';

const CreateDemandsScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [valid, setValid] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clients, setClients] = useState([]);

  const getClientsFromApi = async () => {
    await getClients('clients')
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClientsFromApi();
  }, []);

  const pushCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  useEffect(() => {
    if (!name || !description || !validateProcess(process)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name, description, process]);

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  const submit = () => {
    if (valid) {
      createDemand(name, description, process, selectedCategories);
      alert('Demanda criada com sucesso!');
      setProcess('');
      setDescription('');
      setName('');
    }
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
      />
      {/* Começa aki */}
      <RightBoxComponent>
        <UserDropdown
          clients={clients}
        />
        <SectorDropdown />
        <CategoryDiv
          selectedCategories={selectedCategories}
          pushCategory={pushCategory}
        />
        <SelectedCategories
          selectedCategories={selectedCategories}
        />
      </RightBoxComponent>
    </Main>
  );
};

export default CreateDemandsScreen;
