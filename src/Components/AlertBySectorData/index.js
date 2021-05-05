import React, { useState, useEffect } from 'react';
import { BiStopwatch } from 'react-icons/bi';
import moment from 'moment-timezone';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import colors from '../../Constants/colors';
import { getDemands, updateCheckboxAlert } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import {
  AlertData, WatchIcon, AlertAbout, AlertDemandName, AlertName, AlertDescription, AlertDate,
  AlertRightSide,
} from './Style';

const AlertBySectorData = ({ alert, changeState, setChangeState }) => {
  const [demand, setDemand] = useState('');
  const [checkbox, setCheckbox] = useState(alert.checkbox);
  const { startModal } = useProfileUser();

  const getDemandFromApi = async () => {
    await getDemands(`demand/${alert.demandID}`, startModal)
      .then((response) => setDemand(response?.data));
  };

  useEffect(() => {
    getDemandFromApi();
  }, []);

  const updateCheck = async () => {
    setCheckbox(!checkbox);
    await updateCheckboxAlert(
      alert._id,
      alert.name,
      alert.description,
      alert.date,
      alert.alertClient,
      checkbox,
      alert.demandID,
      alert.sectorID,
      startModal,
      changeState,
      setChangeState,
    );
  };

  return (
    <AlertData>
      <WatchIcon>
        <BiStopwatch />
      </WatchIcon>
      <AlertAbout>
        <AlertDemandName>
          {demand.name}
        </AlertDemandName>
        <AlertName>
          {alert.name}
        </AlertName>
        <AlertDescription>
          {alert.description}
        </AlertDescription>
      </AlertAbout>
      <AlertRightSide>
        <FormControlLabel
          control={
                (
                  <Checkbox
                    checked={alert.checkbox}
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    style={{ color: `${colors.navHeaders}` }}
                    onClick={updateCheck}
                  />
                )
              }
          style={{
            justifyContent: 'center',
            margin: '0px',
          }}
        />
        <AlertDate>
          { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
        </AlertDate>
      </AlertRightSide>
    </AlertData>
  );
};

export default AlertBySectorData;
