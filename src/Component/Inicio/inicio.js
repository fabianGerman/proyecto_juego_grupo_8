import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Img from 'react-bootstrap/image';
import portada from '../img/portada01.jpg'

function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <br></br>
      <Img src={portada} style={{width: '30%' }} />
      <br></br>
      <h1>Piedra, Papel o Tijera</h1>
      <br></br>
      <div className="text-center">
        <Button onClick={() => navigate("/Game")} variant='primary'>
          Jugar
        </Button>
        <br></br><br></br>
        <Button onClick={() => navigate("/Desarrolladores")} variant='primary'>
          Desarrolladores
        </Button>
      </div>
    </>

  );
}

export default Inicio;