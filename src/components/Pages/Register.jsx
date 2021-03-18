import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const registration = (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    name: form.fullname.value,
    password: form.password.value,
  };

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
    .then(() => {
      alert("Usuario creado");
      window.location = "/login";
    })
    .catch(() => alert("Error al crear el usuario"));
};

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Crear cuenta</h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="fullname">
              Nombre completo
              <input
                type="text"
                id="fullname"
                placeholder="Ingrese su nombre"
                required
                name="fullname"
              />
            </label>
          </div>
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
            ¿Ya tienes una cuenta?
            <Link to="./login"> Inicia sesión.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
