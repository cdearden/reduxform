import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { RaisedButton } from 'material-ui';
import { WEEK_DAYS } from '../constants';


const Service = ({ service, handleDelete }) => (
  <TableRow>
    <TableRowColumn>{WEEK_DAYS[service.startDay]}</TableRowColumn>
    <TableRowColumn>{service.startTime}</TableRowColumn>
    <TableRowColumn>{WEEK_DAYS[service.endDay]}</TableRowColumn>
    <TableRowColumn>{service.endTime}</TableRowColumn>
    <TableRowColumn><RaisedButton onClick={() => handleDelete(service.id)}>Delete</RaisedButton></TableRowColumn>
  </TableRow>
);

Service.propTypes = {
  service: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Service;
