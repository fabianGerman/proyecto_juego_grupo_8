import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import fondo from '../img/fondogris.png';
import Img from 'react-bootstrap/image';

class Desarrolladores extends React.Component{
    render(){
        return <>
        <Button variant="secondary" size="sm">
          Regresar al Menú
        </Button>
            <Carousel className="text-center">
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />
                    <Carousel.Caption>
                        <h3>Altamirano Atilio Salvador</h3>
                        <p>Página de Desarrolladores</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />

                    <Carousel.Caption>
                        <h3>Tapia Sergio Dario</h3>
                        <p>Página de Desarrolladores</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />

                    <Carousel.Caption>
                        <h3>Ontiveros Fabian</h3>
                        <p>Página de Juego</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />
                    <Carousel.Caption>
                        <h3>Masquez Nicolás</h3>
                        <p>Imágenes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />
                    <Carousel.Caption>
                        <h3>Espada Esteban Fabricio</h3>
                        <p>Página Index</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Img src={fondo} style={{ width: '50%' }} />
                    <Carousel.Caption>
                        <h3>Zenteno Miguel Angel</h3>
                        <p>Página Index</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </>
    }
}

export default Desarrolladores;