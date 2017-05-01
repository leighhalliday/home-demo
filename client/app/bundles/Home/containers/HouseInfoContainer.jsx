import { connect } from 'react-redux';
import HouseInfo from '../components/HouseInfo';
import * as actions from '../actions/homeActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(HouseInfo);
