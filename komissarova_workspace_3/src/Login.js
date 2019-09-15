import React from 'react';

class Login extends React.Component {
    render() {
        return <div>
        <h1>{this.props.formTitle}</h1>    
        <input style={this.props.style.inputStyle} type="text" name="username" placeholder="Username" /><br />
        <input style={this.props.style.inputStyle} type="password" name="password" placeholder="Password" /><br />
        <button style={this.props.style.formButtonStyle} type="submit">{this.props.loginButtonTitle}</button>
    </div>
    }
}

export default Login;
