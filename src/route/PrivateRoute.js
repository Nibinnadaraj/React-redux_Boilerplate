import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route} from 'react-router-dom';
import history from '../lib/history';
const PrivateRoute = ({component, ...props}) => {
    const currentPath = history.location.pathname;
        if(props.isLoggedIn){
            return <Route exact {...props} component={component}/>;
        }else{
            return <Redirect to={currentPath ? `/login?${currentPath}` : `/login`} />
        }
}

function mapStateToProps(state) {
    return {
      isLoading: state.loadingReducer.isLoading,
      isLoggedIn: state.loginReducer.isLoggedIn
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
     
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);