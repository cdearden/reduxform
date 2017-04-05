import React, { PropTypes } from 'react';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import Service from './service';


const ServiceDisplay = ({ services, handleDelete }) => (
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
      <TableRow>
        <TableHeaderColumn>Start Day</TableHeaderColumn>
        <TableHeaderColumn>Start Time</TableHeaderColumn>
        <TableHeaderColumn>End Day</TableHeaderColumn>
        <TableHeaderColumn>End Time</TableHeaderColumn>
        <TableHeaderColumn />
      </TableRow>
    </TableHeader>
    <TableBody>
      {services.map(service => (
        <Service key={service.id} service={service} handleDelete={handleDelete} />
      ))}
    </TableBody>
  </Table>
);

ServiceDisplay.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ServiceDisplay;
