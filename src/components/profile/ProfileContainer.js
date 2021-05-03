import React, { Component } from "react";
import  ProfileView from "./ProfileView";
import { connect } from "react-redux";
import * as loadingActions from "../../actions/loadingActions";
class ProfileContainer extends Component {
  render() {
    return <ProfileView {...this.props} />;
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
    disableLoader: () => dispatch(loadingActions.disableLoader())
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);