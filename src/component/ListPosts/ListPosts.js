import React, { useState, useEffect } from "react";
import { MdModeEdit, MdDelete, MdRemoveRedEye } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import * as PostActions from "../../store/modules/posts/actions";

import Modal from "../../component/Modal";
import { TablePosts } from "./styles";

export default function ListPosts() {
  const [singlePost, setSinglePost] = useState({});
  const [modal, setModal] = useState(false);

  const posts = useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostActions.listPostRequest());
  }, []);

  function showModal(post) {
    setSinglePost(post);
    setModal(true);
  }

  function closeModal() {
    setSinglePost({});
    setModal(false);
  }

  function renderPosts() {
    return posts.map(post => (
      <tr key={post.id}>
        <th scope="row">{post.id}</th>
        <td>{post.category}</td>
        <td className="title-table">{post.title}</td>
        <td>
          <button className="btn-see" onClick={() => showModal(post)}>
            <MdRemoveRedEye size={20} color="#fff" />
          </button>
          <button className="btn-edit">
            <MdModeEdit size={20} color="#fff" />
          </button>
          <button
            className="btn-delete"
            onClick={() => dispatch(PostActions.deletePost(post.id))}
          >
            <MdDelete size={20} color="#fff" />
          </button>
        </td>
      </tr>
    ));
  }

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
          <tbody>{renderPosts()}</tbody>
        </table>
      </div>
      <Modal post={singlePost} modal={modal} closeModal={() => closeModal()} />
    </TablePosts>
  );
}
