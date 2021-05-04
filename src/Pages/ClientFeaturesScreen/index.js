import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ModalComp from '../../Components/ModalComp';
import {
  getFeatures, createFeature, updateFeature, deleteFeature,
} from '../../Services/Axios/clientServices';
import {
  P, TableTitle, TableHeader, Bar,
} from '../ListCategories/Style';
import DataList from '../../Components/DataList';
import GenericListScreen from '../../Components/GenericListScreen';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const ClientFeaturesScreen = () => {
  const { token, user, startModal } = useProfileUser();
  const [filterFeatures, setFilterFeatures] = useState([]);
  const [features, setFeatures] = useState([]);
  const [word, setWord] = useState();
  const [statusModal, setStatusModal] = useState(false);

  const toggleModal = () => setStatusModal(!statusModal);

  const listFeatures = async () => {
    await getFeatures('features', startModal)
      .then((response) => setFeatures(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting features.${error}`);
      });
  };

  useEffect(() => {
    if (token && user) {
      listFeatures();
    }
  }, [token, user]);

  useEffect(() => {
    setFilterFeatures(
      features.filter((feature) => feature.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterFeatures(features);
  }, [features]);

  const renderFeatures = () => {
    if (features?.length === 0 || filterFeatures?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterFeatures?.map((feature) => (
      <DataList
        content={feature}
        getContent={listFeatures}
        backgroundColor={feature.color}
        color={colors.secondary}
        axiosDelete={deleteFeature}
        updateContent={updateFeature}
        type="Categoria"
      />
    ));
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      {user && features ? (
        <GenericListScreen
          ButtonTitle="Nova Caracteristica"
          ButtonFunction={toggleModal}
          PageTitle="Caracteristicas"
          SearchWord={word}
          setWord={setWord}
          ListType={renderFeatures()}
          redirectTo="/caracteristicas"
        >
          <TableHeader>
            <TableTitle width={24}>
              <P>Nome</P>
            </TableTitle>
            <Bar />
            <TableTitle width={50}>
              <P>Descrição</P>
            </TableTitle>
            <Bar />
            <TableTitle width={24}>
              <P>Ult. Atualização</P>
            </TableTitle>
            <TableTitle width={2} />
          </TableHeader>
          { statusModal ? <ModalComp show={statusModal} type="Caracteristica" operation="Nova " idName="" idDescription="" idColor="#000000" getContent={listFeatures} handleClose={toggleModal} createContent={createFeature} /> : null}
        </GenericListScreen>
      ) : <h1>Carregando...</h1> }
    </div>
  );
};

export default ClientFeaturesScreen;
