import React from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import logo from "../../assets/img/logo.png";

export default function Register() {
  return (
    <Container>
      <img src={logo} alt="Monkey" />
      <Form>
        <h4>Cadastrar</h4>
        <input type="email" placeholder="Informe seu email" />
        <input type="password" placeholder="Informe sua senha" />
        <div>
          <button type="submit">Cadastrar</button>
          <Link to="/">Já tenho conta</Link>
        </div>
      </Form>
    </Container>
  );
}
