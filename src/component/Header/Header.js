import React from "react";
import { Link } from "react-router-dom";

import { Container, MetaInfos, UserInfos } from "./styles";
import logo from "../../assets/img/logo.png";

export default function HeaderComponent() {
  return (
    <Container>
      <Link to="/dashboard" className="logo">
        <img src={logo} alt="Monkey" />
      </Link>
      <MetaInfos>
        <li>
          15 <span>Páginas</span>
        </li>
        <li>
          120 <span>Documentos</span>
        </li>
        <li>
          70 <span>Tutoriais</span>
        </li>
        <li>
          521 <span>Reuniões</span>
        </li>
      </MetaInfos>
      <UserInfos>
        <img src="https://source.unsplash.com/35x35/?avatar" alt="Bill Gates" />
        Bill Gates
        <Link to="/">Sair</Link>
      </UserInfos>
    </Container>
  );
}
