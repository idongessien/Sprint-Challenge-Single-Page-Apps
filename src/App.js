import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./index.css";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";

const MainHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(135,206,250, 1);
  height: 6vh;
  width: 100%;
`;

export default function App() {
  return (
        <MainHeader>
            <Header />

            <div>
              <Link className="links" exact="true" to="/">Home</Link>
              <Link className="links" to="/character-list">Characters</Link>
            </div>

            <Switch>
              <Route exact path="/" component={ WelcomePage } />
              <Route exact path="/character-list" component={ CharacterList } />
            </Switch>
        </MainHeader>
        );  
}

