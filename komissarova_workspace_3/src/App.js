import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';
const styles = require('./styles.js');

class App extends React.Component {
  render() {
    const menuItems = [
      { href: "/", title: "Главная" },
      { href: "/about", title: "О нас" },
      { href: "/service", title: "Услуги" },
      { href: "/contacts", title: "Контакты" }
    ];

    return <div>
      <h1>Первое приложение на React</h1>
      <p>Hello React!</p>
      <Menu items={menuItems} titleMenu="Основное меню сайта" />
      <Login style={styles} formTitle="Введите Ваш логин и пароль" loginButtonTitle="Войти"/>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));