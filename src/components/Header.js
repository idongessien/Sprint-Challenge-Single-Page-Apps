import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <Link exact to="/">Home</Link>
        <Link to="/character-list">Characters</Link>
      </div>

      <Switch>
        <Route exact path="/" component={ WelcomePage } />
        <Route exact path="/character-list" component={ CharacterList } />
      </Switch>
    </header>
  );
}
