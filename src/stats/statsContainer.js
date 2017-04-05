import { connect } from 'react-redux';
import Stats from './stats';



const calculatePercent = (num, total) => parseFloat(((num / total) * 100).toFixed(2));

const getComplete = todos => todos.filter(todo => todo.checked).length;

const getInProgress = todos => todos.filter(todo => !todo.checked).length;

const mapStateToProps = state => ({
  totalTodos: state.todos.length,
  totalComplete: getComplete(state.todos),
  totalInProgress: getInProgress(state.todos),
  percentComplete: calculatePercent(getComplete(state.todos), state.todos.length),
});

const StatsContainer = connect(
  mapStateToProps,
  null,
)(Stats);

export default StatsContainer;
