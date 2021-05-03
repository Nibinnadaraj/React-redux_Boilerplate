import React, { Component } from "react";
import  HomeView from "./HomeView";
import { connect } from "react-redux";
import * as loadingActions from "../../actions/loadingActions";
class HomeContainer extends Component {
  render() {
    return <HomeView {...this.props} />;
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);