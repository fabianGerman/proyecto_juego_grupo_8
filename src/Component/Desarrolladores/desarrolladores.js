import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Img from 'react-bootstrap/image';
import { useNavigate } from "react-router-dom";
import Esteban from '../Img/Esteban.png';
import Sergio from '../Img/Sergio.png';
import Miguel from '../Img/Miguel.jpg';
import Atilio from '../Img/Atilio.jpg';
import Fabian from '../Img/German.png';
import Nicolas from '../Img/Nicolas.jpg';

function Desarrolladores() {
    const navigate = useNavigate();
    return (
        <>
            <br></br>
            <div>
                <Button onClick={() => navigate("/")} size="sm">
                    Regresar al Inicio
                </Button>
            </div>
            <br></br>
            <Carousel className="text-center">
                <Carousel.Item>
                    <Img src={Atilio} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Altamirano Atilio Salvador</h1>
                        <p>Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={Sergio} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Tapia Sergio Dario</h1>
                        <p>Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={Fabian} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Ontiveros Germán Jonatan Fabian</h1>
                        <p>Líder - Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={Nicolas} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Masquez Nicolás Alejandro</h1>
                        <p>Diseñador Gráfico - Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={Esteban} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Espada Esteban Fabricio</h1>
                        <p>Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={Miguel} style={{ width: '50%' }} />
                    <Carousel.Caption className="text-dark">
                        <h1>Zenteno Miguel Angel</h1>
                        <p>Desarrollador</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Desarrolladores;