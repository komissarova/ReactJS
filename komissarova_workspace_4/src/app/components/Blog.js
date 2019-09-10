import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {

  render() {
    const items = this.props.items.map((item, index) => {
      return <Post key={index}>
        {item.postTitle}
        {item.postBody}
      </Post>;
    })

    return <div>
      <h1>{this.props.blogTitle}</h1>      
      <div>
        {items}
      </div>      
    </div>
  }
}


