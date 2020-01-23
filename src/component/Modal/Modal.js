import React from "react";

import { ModalPost } from "./styles";

export default function Modal(props) {
  const { post, modal, closeModal } = props;
  return (
    <ModalPost style={{ display: modal === true ? "block" : "none" }}>
      <div className="content-modal">
        <h3>{post.title}</h3>
        <span>{post.category}</span>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="docs">
          {post.documents &&
            post.documents.map(doc => (
              <a key={doc.document_url} href={doc.document_url}>
                {doc.document_url}
              </a>
            ))}
        </div>
        <div className="footer-modal">
          <button onClick={closeModal}>Fechar</button>
        </div>
      </div>
    </ModalPost>
  );
}
