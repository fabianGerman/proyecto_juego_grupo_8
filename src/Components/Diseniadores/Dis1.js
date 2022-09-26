import React from "react";
import Image from "../../Imagen/imgDummy.jpg";
import Img from 'react-bootstrap/image';
 


const Dis1 = () => {
    return(
        <div>
        <header>
            <h1>HOLA soy Tapia Sergio Dario</h1>
        </header>
        <p>Creador de esta pantalla</p>
        <Img src={Image} className='img-fluid shadow-4' alt='...'/>
        </div>
    )
}
export default Dis1;