import React, { Fragment, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <Fragment>
      {alerts.length > 0 &&
        alerts.map((alert) => {
          return (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
              <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
          );
        })}
    </Fragment>
  );
};
export default Alerts;
