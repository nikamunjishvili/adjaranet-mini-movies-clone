import React, { Fragment} from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../Styles/Navbar.css";
import Movies from "./Movies";
import Trends from "./Trends";
import Tv from "./Tv";
import TvShows from "./TvShow";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const Containers = React.createContext();

function NavBar() {
  return (
    <Containers.Provider>
      <Fragment>
        <Navbar  expand="lg">
          <Container id="container">
            <Navbar.Brand href="#home" style={{color:"rgb(85, 84, 84)"}}  > Adjara
            <div className="Logo" style={{ color: "rgb(85, 84, 84)" }}>
                    net
                  </div>
                  .com </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-10 "/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="nav" style={{textAlign:"center"}}>
                <NavLink to="" style={{}}>
              <span style={{color: "rgb(85, 84, 84)"}}>Movies</span>
            </NavLink>
            <NavLink to="/TvShows">
              <span style={{color: "rgb(85, 84, 84)"}}>TvShows</span>
            </NavLink>
            <NavLink to="/Trends">
              <span style={{color: "rgb(85, 84, 84)"}}>Trends</span>
            </NavLink>
            <NavLink to="/Tv">
            <span style={{color: "rgb(85, 84, 84)"}}>Tv</span>
            </NavLink>           
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="/Trends" element={<Trends />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/TvShows" element={<TvShows />} />
        </Routes>
      </Fragment>
    </Containers.Provider>
  );
}

export default NavBar;
