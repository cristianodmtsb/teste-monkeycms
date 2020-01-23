import React, { Component } from "react";
import { MdModeEdit, MdDelete, MdRemoveRedEye } from "react-icons/md";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PostActions from "../../store/modules/posts/actions";

import { TablePosts, ModalPost } from "./styles";

class ListPosts extends Component {
  async componentWillMount() {
    const { listPostRequest } = this.props;
    listPostRequest();
  }

  renderPosts = () => {
    const { posts, deletePost } = this.props;
    return posts.map(post => (
      <tr key={post.id}>
        <th scope="row">{post.id}</th>
        <td>Reunião</td>
        <td className="title-table">{post.title}</td>
        <td>
          <button className="btn-see">
            <MdRemoveRedEye size={20} color="#fff" />
          </button>
          <button className="btn-edit">
            <MdModeEdit size={20} color="#fff" />
          </button>
          <button className="btn-delete" onClick={() => deletePost(post.id)}>
            <MdDelete size={20} color="#fff" />
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    const { posts, deletePost } = this.props;

    console.log("posts from state", posts);

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
            <tbody>{this.renderPosts()}</tbody>
          </table>
        </div>
        <ModalPost>
          <div className="content-modal">
            <h3>Apresentação De croqui sei la de que</h3>
            <span>Reunião</span>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                vel incidunt asperiores possimus! Est in accusantium nobis,
                itaque impedit molestias eius ut dolorem cumque veniam.
                Accusantium animi harum tempora consectetur.
              </p>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea amet inventore corporis quae sed quisquam laborum dignissimos
                illum nam, quis consequuntur tempora officia sint quo ad, quasi
                fuga nostrum!
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                vel incidunt asperiores possimus! Est in accusantium nobis,
                itaque impedit molestias eius ut dolorem cumque veniam.
                Accusantium animi harum tempora consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                vel incidunt asperiores possimus! Est in accusantium nobis,
                itaque impedit molestias eius ut dolorem cumque veniam.
                Accusantium animi harum tempora consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                vel incidunt asperiores possimus! Est in accusantium nobis,
                itaque impedit molestias eius ut dolorem cumque veniam.
                Accusantium animi harum tempora consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                vel incidunt asperiores possimus! Est in accusantium nobis,
                itaque impedit molestias eius ut dolorem cumque veniam.
                Accusantium animi harum tempora consectetur.
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
}

const mapStateToProps = state => {
  const { posts } = state;
  return {
    posts: posts
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
