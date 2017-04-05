import React, { PropTypes } from 'react';

const Stats = ({ totalTodos, totalComplete, totalInProgress, percentComplete }) => (
  <section>
    <p>Total Todos: {totalTodos}</p>
    <p>Total Complete: {totalComplete}</p>
    <p>Total in Progress: {totalInProgress}</p>
    <p>Percent Complete: {percentComplete}</p>
  </section>
);

Stats.propTypes = {
  totalTodos: PropTypes.number.isRequired,
  totalComplete: PropTypes.number.isRequired,
  totalInProgress: PropTypes.number.isRequired,
  percentComplete: PropTypes.number.isRequired,
};

export default Stats;
