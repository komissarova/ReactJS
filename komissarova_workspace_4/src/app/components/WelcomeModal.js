import React from 'react';
import '../styles/style.css';

export default class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  render() {
    return (
      <div>
           {this.state.modal && (
          <div className='modal'>
            <div className='modal-style'>
              <h3>Lorem ipsum dolor</h3>
              <p>Sit amet!</p>
              <button onClick={ () => this.setState({ modal: false }) }>Close</button>
            </div>
          </div>
        )} 
       </div>
    );
  }

  componentDidMount() {
    this.setState({
      modal: true,
    })
  }
}