import { Component } from 'react';
import { connect } from 'react-redux';

class FetchUser extends Component {
  state = { loaded: false };

  componentWillReceiveProps() {
    if (!this.state.loaded) this.loaded();
  }

  loaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.user.id };
};

export default connect(mapStateToProps)(FetchUser);
