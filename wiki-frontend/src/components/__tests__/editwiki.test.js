import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "../../enzyme";
import EditWiki from "../edit-wiki/editwiki.component";

describe("testing editwiki", () => {
  const editWikiDescription = jest.fn();
  const saveWiki = jest.fn();
  const historyMock = { push: jest.fn() };
  const event = { preventDefault() {}, target: { value: "testing" } };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <EditWiki />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Test click/change event", () => {
    const wrapper = shallow(
      <EditWiki
        editWikiDescription={editWikiDescription}
        saveWiki={saveWiki}
        history={historyMock}
      />
    );

    wrapper
      .find("input")
      .at(0)
      .simulate("change", event);

    wrapper
      .find(".edit-btn")
      .at(0)
      .simulate("click");
  });
});
