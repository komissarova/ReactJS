import React, { Component } from 'react';

import { addUser, getUsers } from '../actions/actionCreators';
import UserStore from '../stores/userStore';
import UsersList from '../components/UsersList';
import User from './User';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],     
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  onUserChange() {
    const users = UserStore.users;
    this.setState({ users })
  }

  newUser() {  
    const username = "Имя добавленного пользователя";
    const name = 'Ещё одно имя добавленного пользователя';
    const email = 'Электронная почта: хххххххх@хх';
    const phone = 'Номер телефона: х-ххх-ххх-хх-хх';
    const website = 'Сайт пользователя: ххххххх.ххх';

    addUser(username, name, email, phone, website);
  }
 
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newUser}>Добавить пользователя</button>
        {
          (!this.props.children) ?
            (<UsersList users={this.state.users} />)
            :
            (this.props.children)
        }
      </div>
    )
  }

  componentDidMount() {
    getUsers();
    UserStore.on('change', this.onUserChange);
  }
}

