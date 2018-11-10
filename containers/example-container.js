import Example from '../components/example';
import { connect } from 'react-redux';

import {
  setExampleText
} from '../actions/example-actions'

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const text = e.target.children.exampleText.value
    dispatch(setExampleText(text))
  },
});

const mapStateToProps = ({ example }) => ({
  exampleText: example.text,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example)
