import React, { Component } from "react";
import { MdModeEdit, MdDelete, MdRemoveRedEye } from "react-icons/md";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PostActions from "../../store/modules/posts/actions";

import Modal from "../../component/Modal";
import { TablePosts } from "./styles";

class ListPosts extends Component {
  state = {
    singlePost: {},
    modal: false
  };

  async componentWillMount() {
    const { listPostRequest } = this.props;
    listPostRequest();
  }

  renderPosts = () => {
    const { posts, deletePost } = this.props;

    return posts.map(post => (
      <tr key={post.id}>
        <th scope="row">{post.id}</th>
        <td>{post.category}</td>
        <td className="title-table">{post.title}</td>
        <td>
          <button className="btn-see" onClick={() => this.showModal(post)}>
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

  showModal(post) {
    this.setState({
      singlePost: post,
      modal: true
    });
  }

  closeModal() {
    this.setState({
      singlePost: {},
      modal: false
    });
  }

  render() {
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
        <Modal
          post={this.state.singlePost}
          modal={this.state.modal}
          closeModal={() => this.closeModal()}
        />
      </TablePosts>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
