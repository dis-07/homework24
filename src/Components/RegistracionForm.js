import PropTypes from 'prop-types';
import { useState } from "react";

const RegistracionForm = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [confrnPasswordValue, setConfrnPasswordValue] = useState('');
  const [errorMassege, setErrorMassege] = useState('');

  const handleEmailChange = (event) => {
    setValue(event.target.value);
        setErrorMassege('');
  };
  const handlePasswordChange = (event) => {
    if (errorMassege) {
        setErrorMassege('');
    }
    setPassword(event.target.value);
  };
  const handleConfrnPasswordChange = (event) => {
    if (errorMassege) {
        setErrorMassege('');
    }
    setConfrnPasswordValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(value === '') {
        setErrorMassege('Please enter your email');
        return;
    }

    if(password !== confrnPasswordValue || password === '') {
        setErrorMassege('Passwords do not match');
        return;
    }
    console.log({name: value, pass: password, confrn: confrnPasswordValue,});
    setValue('');
    setPassword('');
    setConfrnPasswordValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className="email">
        Email:
        <input
          type="email"
          name="email"
          value={value}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="pass">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label className="confpass">
        Confirn password:
        <input
          type="password"
          name="confirn"
          value={confrnPasswordValue}
          onChange={handleConfrnPasswordChange}
          required
        />
      </label>
      {errorMassege && <p className="error">{errorMassege}</p>}
      <button className="button" type="submit">Submit</button>
    </form>
  );
};

export default RegistracionForm;
