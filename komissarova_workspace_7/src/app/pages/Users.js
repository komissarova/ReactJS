import React, { Component } from 'react';
import UsersList from '../components/UsersList';
import User from './User';

import { connect } from 'react-redux';
import { getUsers } from "../actions/usersActions";

 class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }  
    
  render() {
    return (
      <div>
        {
          (!this.props.children) ?
            (<UsersList />)
            :
            (this.props.children)
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(getUsers());
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.user,
  }
}

export default connect(mapStateToProps)(Users);

