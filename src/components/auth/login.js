import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  return (
    <div className="login-container">
      <h2>Authorization</h2>
      <p>Enter login and password from your GitHub account</p>
      <button onClick={() => props.authenticate()} className="github">Log in</button>
    </div>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;