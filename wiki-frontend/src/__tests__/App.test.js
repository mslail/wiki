import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { shallow, mount } from "../enzyme";
import EditWiki from "../components/edit-wiki/editwiki.component";
import WikiNotFound from "../components/wiki-not-found/wikinotfound.component";
import Wiki from "../components/wiki/wiki.component";

let pathMap = {};
describe("testing routes using an array", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((map, route) => {
      const routeProps = route.props();
      map[routeProps.path] = routeProps.component;
      return map;
    }, {});
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should check `handleWikiChangeDescription()`", () => {
    const wrapper = shallow(<App />);

    var classInstance = wrapper.instance();
    classInstance.handleWikiChangeDescription("wiki", "new description");
  });

  it("should check `handleSubmit()`", () => {
    const wrapper = shallow(<App />);

    var classInstance = wrapper.instance();
    classInstance.handleSubmit("wiki", "new description");
  });
});
