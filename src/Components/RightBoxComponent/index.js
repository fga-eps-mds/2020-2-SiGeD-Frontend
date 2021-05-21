import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import {
  RightBox, ContentBox, NameDiv, Line, Name, CenterName, Img,
} from './Style';
import { getClients } from '../../Services/Axios/clientServices';
import { useProfileUser } from '../../Context';

const RightBoxComponent = ({ children, clientID, clientName }) => {
  const [client, setClient] = useState('');
  const { startModal } = useProfileUser();

  const getClientApi = async () => {
    await getClients(`clients/${clientID}`, startModal)
      .then((response) => setClient(response?.data));
  };

  useEffect(() => {
    if (clientID) {
      getClientApi();
    }
  }, [clientName]);

  const renderImage = () => {
    if (!client?.image) {
      return (
        <IoPersonCircleOutline size="100%" />
      );
    }
    return (
      <Img
        src={client?.image}
        alt="Foto"
      />
    );
  };

  return (
    <RightBox>
      <ContentBox>
        <NameDiv>
          {renderImage()}
          <CenterName>
            <Name>
              {clientName}
            </Name>
          </CenterName>
        </NameDiv>
        <Line />
      </ContentBox>
      <>
        {children[0]}

        {children[1]}

        {children[2]}

        {children[3]}
      </>
    </RightBox>
  );
};

export default RightBoxComponent;
