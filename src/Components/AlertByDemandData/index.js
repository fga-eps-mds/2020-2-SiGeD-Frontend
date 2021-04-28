import React from 'react';
import moment from 'moment-timezone';
import { AlertData, AlertName } from './Style';

const AlertByDemandData = ({ alert }) => (
  <AlertData>
    <AlertName>
      {alert.name}
    </AlertName>
    <AlertName>
      { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
    </AlertName>
  </AlertData>
);

export default AlertByDemandData;
