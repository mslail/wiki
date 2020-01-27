import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.component';
import server from './server';
import ErrorPage from './pages/error/errorpage.component';
import Wikis from './pages/wikis/wikis.component';
import Wiki from './components/wiki/wiki.component';
import EditWiki from './components/edit-wiki/editwiki.component';
import WikiNotFound from './components/wiki-not-found/wikinotfound.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = { wikis: {} };
  }

  async componentDidMount() {
    // BACKEND PATH
    const ARTICLES_GET_URL = server.backend + 'articles/';
    try {
      // Getting Articles
      const res = await axios.get(ARTICLES_GET_URL);
      this.setState({ wikis: res.data });
    } catch (error) {
      throw error;
    }
  }

  handleWikiChangeDescription = (name, description) => {
    this.setState({ wikis: { ...this.state.wikis, [name]: description } });
  };

  handleSubmit = async (name, description) => {
    const ARTICLES_PUT_URL = server.backend + 'articles/' + name;
    try {
      // Doing put for the given name
      await axios.put(ARTICLES_PUT_URL, description);
      this.setState({ wikis: { ...this.state.wikis, [name]: description } });
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { wikis } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Wikis {...props} wikis={wikis} />}
            />
            <Route
              exact
              path="/:name"
              render={({
                match: {
                  params: { name }
                },
                ...otherProps
              }) =>
                name in wikis ? (
                  <Wiki name={name} description={wikis[name]} {...otherProps} />
                ) : (
                  <WikiNotFound name={name} {...otherProps} />
                )
              }
            />
            <Route
              exact
              path="/edit/:name"
              render={({
                match: {
                  params: { name }
                },
                ...otherProps
              }) => (
                <EditWiki
                  name={name}
                  editWikiDescription={this.handleWikiChangeDescription}
                  saveWiki={this.handleSubmit}
                  description={wikis[name]}
                  {...otherProps}
                />
              )}
            />

            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
