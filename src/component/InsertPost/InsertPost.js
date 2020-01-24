import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as PostActions from "../../store/modules/posts/actions";

import { FormInsertPost } from "./styles";

export default function InsertPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  function handleAddPost(e) {
    e.preventDefault();
    const post = {
      title,
      content,
      category
    };

    dispatch(PostActions.addPost(post));
    setTitle("");
    setContent("");
  }

  return (
    <FormInsertPost>
      <h4>Novo Post</h4>
      <div className="form-post">
        <form action="post" onSubmit={e => handleAddPost(e)}>
          <div className="group-one">
            <select
              name="category"
              id=""
              onChange={e => setCategory(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Escolha Tipo
              </option>
              <option value="Reunião">Reunião</option>
              <option value="Documento">Documento</option>
              <option value="Tutorial">Tutorial</option>
            </select>

            <input
              type="text"
              name="title"
              className="flex-1"
              placeholder="Digite o título aqui"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <textarea
            className="text-write"
            name="content"
            placeholder="Digite o título aqui"
            onChange={e => setContent(e.target.value)}
            value={content}
          />
          <div className="group-two">
            <input id="customFile" type="file" className="custom-file-input" />

            <button type="submit" className="btn-check">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </FormInsertPost>
  );
}
