import './App.css';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Projects from './components/Projects/Projects';
// import Skill from './components/Skill/Skill';
import Navbars from './components/Navbars/Navbars';
import Blog from './components/Blog/Blog';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const Header = lazy(() => import('./components/Header/Header.js'))
const Projects = lazy(() => import('./components/Projects/Projects.js'))
const Skill = lazy(() => import('./components/Skill/Skill.js'))

const override = css`
  display: block;
  margin: 100px auto;
`
function App() {
  return (
    <Router>

      <Suspense fallback={<div>
        <HashLoader color={'#08fdd8'} loading={true} css={override} size={50} />
      </div>}>
        <Navbars></Navbars>
        <Header></Header>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
      </Suspense>







      {/* <Router>
        <Switch>

          <Route exact path="/">
            <Header></Header>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="skill">
            <Skill></Skill>
          </Route>

          <Route path="projects">
            <Projects></Projects>
          </Route>

          <Route path="Contact">
            <Contact></Contact>
          </Route>

          <Route path="footer">
            <Skill></Skill>
          </Route>

        </Switch>
      </Router> */}


    </Router>
  );
}

export default App;
