import React from "react";
import { MdModeEdit, MdDelete, MdRemoveRedEye } from "react-icons/md";

import { TablePosts, ModalPost } from "./styles";

export default function ListPosts() {
  return (
    <TablePosts>
      <h4>Últimos Posts</h4>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Reunião</td>
              <td className="title-table">
                Apresentação De croqui sei la de que
              </td>
              <td>
                <button className="btn-see">
                  <MdRemoveRedEye size={20} color="#fff" />
                </button>
                <button className="btn-edit">
                  <MdModeEdit size={20} color="#fff" />
                </button>
                <button className="btn-delete">
                  <MdDelete size={20} color="#fff" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Reunião</td>
              <td className="title-table">Apresentação</td>
              <td>
                <button className="btn-see">
                  <MdRemoveRedEye size={20} color="#fff" />
                </button>
                <button className="btn-edit">
                  <MdModeEdit size={20} color="#fff" />
                </button>
                <button className="btn-delete">
                  <MdDelete size={20} color="#fff" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalPost>
        <div className="content-modal">
          <h3>Apresentação De croqui sei la de que</h3>
          <span>Reunião</span>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              vel incidunt asperiores possimus! Est in accusantium nobis, itaque
              impedit molestias eius ut dolorem cumque veniam. Accusantium animi
              harum tempora consectetur.
            </p>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea
              amet inventore corporis quae sed quisquam laborum dignissimos
              illum nam, quis consequuntur tempora officia sint quo ad, quasi
              fuga nostrum!
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              vel incidunt asperiores possimus! Est in accusantium nobis, itaque
              impedit molestias eius ut dolorem cumque veniam. Accusantium animi
              harum tempora consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              vel incidunt asperiores possimus! Est in accusantium nobis, itaque
              impedit molestias eius ut dolorem cumque veniam. Accusantium animi
              harum tempora consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              vel incidunt asperiores possimus! Est in accusantium nobis, itaque
              impedit molestias eius ut dolorem cumque veniam. Accusantium animi
              harum tempora consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              vel incidunt asperiores possimus! Est in accusantium nobis, itaque
              impedit molestias eius ut dolorem cumque veniam. Accusantium animi
              harum tempora consectetur.
            </p>
          </div>
          <div className="docs">
            <a href="/">Documento Qualquer</a>
          </div>
          <div className="footer-modal">
            <button>Fechar</button>
          </div>
        </div>
      </ModalPost>
    </TablePosts>
  );
}
