import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from "./Modo_juego.js";

function Juego() {
    const [modalShow, setModalShow] = React.useState(false);    
    return(
        <>
        <Form>
            <Button id="btnInit" variant="outline-primary" onClick={() => setModalShow(true)}>Jugar</Button>{' '}
            <MyVerticallyCenteredModal show = {modalShow} onHide = {() => setModalShow(false)}/>
            <Button variant="outline-secondary">Puntaje</Button>{' '}
        </Form>
        <div id="container">

        </div>
        <script src='./controlJuego,js'></script>
        </>
    );
}



export default Juego;

