import React from 'react';
import LoginFormContainer from '../session/login_form_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <LoginFormContainer />
        <footer>
          Copyright &copy; 2020 Exminder
        </footer>
      </div>
    );
  }
}

export default MainPage;