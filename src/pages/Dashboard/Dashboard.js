import React from "react";

import InsertPost from "../../component/InsertPost";
import ListPosts from "../../component/ListPosts";

import { Container, TopPage } from "./styles";

export default function Dashboard() {
  return (
    <>
      <TopPage>
        <h4>Dashboard</h4>
      </TopPage>
      <Container>
        <InsertPost />
        <ListPosts />
      </Container>
    </>
  );
}
