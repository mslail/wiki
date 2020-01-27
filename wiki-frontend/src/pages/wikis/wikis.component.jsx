import React from "react";

import "./wikis.styles.css";
import Wiki from "../../components/wiki/wiki.component";

class Wikis extends React.Component {
  render() {
    const { wikis } = this.props;
    const wikisKeys = Object.keys(wikis);
    return (
      <div className="wikis">
        <h1>Wikis</h1>
        {wikisKeys.map(wiki => (
          <Wiki key={wiki} name={wiki} description={wikis[wiki]} />
        ))}
      </div>
    );
  }
}

export default Wikis;
