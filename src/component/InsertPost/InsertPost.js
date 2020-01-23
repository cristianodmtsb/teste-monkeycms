import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PostActions from "../../store/modules/posts/actions";

import { FormInsertPost } from "./styles";

class InsertPost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleAddPost = e => {
    e.preventDefault();
    const { addPost } = this.props;
    const post = {
      title: this.state.title,
      content: this.state.content
    };
    console.log("teste", post);

    addPost(post);
  };

  render() {
    return (
      <FormInsertPost>
        <h4>Novo Post</h4>
        <div className="form-post">
          <form action="post" onSubmit={e => this.handleAddPost(e)}>
            <div className="group-one">
              <select name="tipo" id="">
                <option disabled defaultValue>
                  Escolha Tipo
                </option>
                <option value="reuniao">Reunião</option>
                <option value="Documento">Documento</option>
                <option value="tutorial">Tutorial</option>
              </select>

              <input
                type="text"
                name="title"
                className="flex-1"
                placeholder="Digite o título aqui"
                onChange={e => this.setState({ title: e.target.value })}
                value={this.state.title}
              />
            </div>
            <textarea
              className="text-write"
              name="content"
              placeholder="Digite o título aqui"
              onChange={e => this.setState({ content: e.target.value })}
              value={this.state.content}
            />
            <div className="group-two">
              <input
                id="customFile"
                type="file"
                className="custom-file-input"
              />

              <button type="submit" className="btn-check">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </FormInsertPost>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(null, mapDispatchToProps)(InsertPost);
