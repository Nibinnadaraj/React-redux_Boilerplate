import React, { Component } from "react";
import  LoginView from "./LoginView";
import { connect } from "react-redux";
import * as loadingActions from "../../actions/loadingActions";
import * as loginActions from "../../actions/loginActions";
class LoginContainer extends Component {
  render() {
    return <LoginView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    enableLoader: () => dispatch(loadingActions.enableLoader()),
    disableLoader: () => dispatch(loadingActions.disableLoader()),
    login : (params) => dispatch(loginActions.loginResponse(params))
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);