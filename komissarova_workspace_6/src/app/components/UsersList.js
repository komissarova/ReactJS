import React, { Component } from 'react'
import UserItem from './UserItem';

export default class UsersList extends Component {
  render() {
    if (!this.props.users.length) {
      return null;
    }

    const users = this.props.users.map(user => {
      return <UserItem key={user.id} {...user} />
    })

    return (
      <div>
        <h1>Пользователи</h1>
        <div>
          {users}
        </div>
      </div>
    )
  }
}
