import React from "react";
import { Link } from "react-router-dom";

import { login } from "../../services/auth";

import { Container, Form } from "./styles";
import logo from "../../assets/img/logo.png";

export default function LoginForm() {
  return (
    <Container>
      <img src={logo} alt="Monkey" />
      <Form onSubmit={() => login(true)}>
        <h4>Efetuar o login</h4>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <div>
          <button type="submit">Entrar</button>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </Form>
    </Container>
  );
}
