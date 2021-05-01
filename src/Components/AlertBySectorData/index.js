import React, { useState, useEffect } from 'react';
import { BiStopwatch } from 'react-icons/bi';
import moment from 'moment-timezone';
// import { Checkbox, FormControlLabel } from '@material-ui/core';
// import colors from '../../Constants/colors';
import { getDemands } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import {
  AlertData, WatchIcon, AlertAbout, AlertDemandName, AlertName, AlertDescription, AlertDate,
  AlertRightSide,
} from './Style';

const AlertBySectorData = ({ alert }) => {
  const [demand, setDemand] = useState('');
  const { startModal } = useProfileUser();

  const getDemandFromApi = async () => {
    await getDemands(`demand/${alert.demandID}`, startModal)
      .then((response) => setDemand(response?.data));
  };

  useEffect(() => {
    getDemandFromApi();
  }, []);

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
        {/* <FormControlLabel
          control={
                (
                  <Checkbox
                    value={alert.alertClient}
                    defaultChecked={alert.alertClient}
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    style={{ color: `${colors.navHeaders}` }}
                  />
                )
              }
          style={{
            justifyContent: 'center',
            margin: '0px',
          }}
        /> */}
        <AlertDate>
          { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
        </AlertDate>
      </AlertRightSide>
    </AlertData>
  );
};

export default AlertBySectorData;
