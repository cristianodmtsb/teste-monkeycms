import React from "react";
import Dante from "Dante2";

import { FormInsertPost } from "./styles";

export default function InsertPost() {
  return (
    <FormInsertPost>
      <h4>Novo Post</h4>
      <div className="form-post">
        <form action="post">
          <div className="group-one">
            <select name="tipo" id="">
              <option selected disabled>
                Escolha Tipo
              </option>
              <option value="reuniao">Reunião</option>
              <option value="Documento">Documento</option>
              <option value="tutorial">Tutorial</option>
            </select>

            <input
              type="text"
              className="flex-1"
              placeholder="Digite o título aqui"
            />
          </div>
          <div className="text-write">
            <Dante />
          </div>
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
