import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
<<<<<<< HEAD
import { BsThreeDots } from 'react-icons/bs';
import { format } from 'date-fns';
import {
  PersonalBox, ImageUser, TableContent, P, TableContainer,
} from './style';

const PersonalData = ({ user }) => (
  <PersonalBox>
    <ImageUser>
      <IoPersonCircleOutline size="100%" />
    </ImageUser>
    <TableContainer>
      <TableContent width={20}>
        <P>{user.name}</P>
      </TableContent>

      <TableContent width={20}>
        <P>{user.email}</P>
      </TableContent>

      <TableContent width={25}>
        <P>{user.role}</P>
      </TableContent>

      <TableContent width={15}>
        <P>{user.sector}</P>
      </TableContent>

      <TableContent width={15}>
        <P>{format(new Date(user.updatedAt), 'dd/MM/yyyy')}</P>
      </TableContent>

      <TableContent width={5} margin-bottom={0}>
        <BsThreeDots size="1.5vw" />
      </TableContent>
    </TableContainer>
  </PersonalBox>
);

export default PersonalData;
=======
import styles from './style';
import {BsThreeDots} from "react-icons/bs";


const PersonalData = ({
    user

}) => {
    return(
        <div style={styles.personalbox}>

            <div style={{width: '30%', flexDirection: 'row', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <IoPersonCircleOutline size="3vw"/>
                <p>{user.name}</p>
            </div>

            <div style={{width: '15%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>098765432</p>
            </div>

            <div style={{width: '25%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>{user.email}</p>
            </div>

            <div style={{width: '15%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>{user.enroll}</p>
            </div>

            <div style={{width: '5%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>24/02</p>
            </div>

            <div style={{width: '5%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <BsThreeDots size = '1.5vw'/>
            </div>

            

        
        </div>
    )
}

export default PersonalData;
>>>>>>> [51] Adjustment on PersonalData component format
