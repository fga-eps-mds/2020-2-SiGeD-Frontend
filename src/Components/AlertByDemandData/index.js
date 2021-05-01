import React from 'react';
import moment from 'moment-timezone';
import { AlertData, AlertName, AlertDate } from './Style';

const AlertByDemandData = ({ alert }) => (
  <AlertData>
    <AlertName>
      {alert.name}
    </AlertName>
    <AlertDate>
      { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
    </AlertDate>
  </AlertData>
);

export default AlertByDemandData;
