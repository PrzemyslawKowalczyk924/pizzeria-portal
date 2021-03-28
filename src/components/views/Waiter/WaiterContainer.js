import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchFromAPIUpdate } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchTablesUpdate: (tableId, status) =>
    dispatch(fetchFromAPIUpdate(tableId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);