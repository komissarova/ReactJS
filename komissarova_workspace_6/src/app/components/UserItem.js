import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserItem extends Component {
  render() {
    const{ id, username, name, email, phone, website } = this.props;  

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <Link to={`/users/${id}`}>
            {username}
        </Link>
        
        </div>
        <div className="card-body text-secondary">
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
          <div>{website}</div>
        </div>
      </div>
    )
  }
}