import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Wikis from "../wikis/wikis.component";

describe("testing Wikis", () => {
  const wikis = { wiki: "wiki is a knowledge base website" };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Wikis wikis={wikis} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
