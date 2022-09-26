import React from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavBar, Nav, Conteiner } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
//import { Outlet, Link } from 'react-router-dom';
import Dis1 from './Diseniadores/Dis1';
import { useNavigate } from 'react-router-dom';

const NavBarD = (props) => {
  const navigate = useNavigate();
    return (
    <>
          <Card>
            <Card.Header>
              <h1>DISEÑADORES</h1>
            </Card.Header>
            <Card.Body>
              <Nav variant="tabs" >
                <Nav.Item>
                  
                  <Nav.Link href="/Dis1">Sergio</Nav.Link>
                  
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Dis2">Atilio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Dis3">Fabian</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Dis4">Miguel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Dis5">Nicolas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Dis6">Fabricio</Nav.Link>
                </Nav.Item>
              </Nav>
              <section>
                <Outlet></Outlet>
              </section>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => navigate("/Dis1")} variant='primary'>VOLVER</Button>
              </Card.Footer>
          </Card>
          </>
    );
  }
  export default NavBarD;