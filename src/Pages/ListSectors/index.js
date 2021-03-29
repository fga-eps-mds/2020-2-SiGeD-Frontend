import React, { useEffect, useState } from 'react';
import ModalComp from '../../Components/ModalComp';
import {
  TableHeader, TableTitle, P, Bar,
} from './Style';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  getSectors, postSectors, updateSectors, deleteSector,
} from '../../Services/Axios/sectorServices';
import DataList from '../../Components/DataList';

const ListSectors = () => {
  const [filterSectors, setFilterSectors] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [word, setWord] = useState();
  const [statusModal, setStatusModal] = useState(false);

  const toggleModal = () => setStatusModal(!statusModal);

  const listSectors = async () => {
    await getSectors()
      .then((response) => setSectors(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting sectors.${error}`);
      });
  };

  useEffect(() => {
    listSectors();
  }, []);

  useEffect(() => {
    setFilterSectors(
      sectors.filter((sector) => sector.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterSectors(sectors);
  }, [sectors]);

  const renderSectors = () => {
    if (sectors?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterSectors?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterSectors?.map((sector) => (
      <DataList
        content={sector}
        getContent={listSectors}
        backgroundColor={undefined}
        color="black"
        axiosDelete={deleteSector}
        updateContent={updateSectors}
        type="Setor"
      />
    ));
  };

  return (
    <GenericListScreen
      ButtonTitle="Novo setor"
      ButtonFunction={toggleModal}
      PageTitle="Setor"
      SearchWord={word}
      setWord={setWord}
      ListType={renderSectors()}
      redirectTo="/setores"
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
      { statusModal ? <ModalComp show={statusModal} type="Setor" operation="Nova " idName="" idDescription="" idColor="#000000" getContent={getSectors} handleClose={toggleModal} createContent={postSectors} /> : null }
    </GenericListScreen>
  );
};

export default ListSectors;
