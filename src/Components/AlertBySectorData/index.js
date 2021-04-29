import React from 'react';
import { BiStopwatch } from 'react-icons/bi';
import moment from 'moment-timezone';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import colors from '../../Constants/colors';
import {
  AlertData, WatchIcon, AlertAbout, AlertDemandName, AlertName, AlertDescription, AlertDate,
} from './Style';

const AlertBySectorData = ({ alert }) => (
  <AlertData>
    <WatchIcon>
      <BiStopwatch />
    </WatchIcon>
    <AlertAbout>
      <AlertDemandName>
        Nome da demanda
      </AlertDemandName>
      <AlertName>
        {alert.name}
      </AlertName>
      <AlertDescription>
        {alert.description}
      </AlertDescription>
      <AlertDate>
        { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
      </AlertDate>
    </AlertAbout>
    <FormControlLabel
      control={
            (
              <Checkbox
                value={alert.clientAlert}
                defaultChecked
                inputProps={{ 'aria-label': 'Checkbox A' }}
                style={{ color: `${colors.navHeaders}` }}
              />
            )
          }
      style={{
        width: '100%',
      }}
    />
  </AlertData>
);

export default AlertBySectorData;
