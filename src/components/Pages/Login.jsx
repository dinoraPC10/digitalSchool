import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const authentication = (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value,
  };

  Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      window.location = "/";
    })
    .catch((error) => {
      alert(`Error al iniciar sesión`);
      console.log(error);
    });
};

const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input
                type="email"
                id="email"
                placeholder="Ingrese su e-mail"
                required
                name="email"
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                name="password"
              />
            </label>
          </div>
          <div className="form_item">
            <input
              type="submit"
              value="Iniciar sesión"
              className="button full"
              required
            />
          </div>
        </form>
        <div className="center">
          <span>
            ¿No tienes cuenta?
            <Link to="./registro"> Regístrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
