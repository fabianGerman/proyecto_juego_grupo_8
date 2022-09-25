import logo from './logo.svg';
import './App.css';
import React from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Diseñadores from './Components/Diseñadores';
//import { BrowserRouter as Router, RouteProps, Route } from "react-router-dom";

function App() {
  return (
        <Card>
          <Card.Header>
            <h1>DISEÑADORES</h1>
          </Card.Header>
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                
                <Nav.Link href="/src/Components/Diseñadores.js">Sergio</Nav.Link>
                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#2">Atilio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#3">Fabian</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#4">Miguel</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#5">Chino</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#6">Fabricio</Nav.Link>
              </Nav.Item>
              
            </Nav>
            </Card.Body>
        </Card>
  );
}

export default App;
