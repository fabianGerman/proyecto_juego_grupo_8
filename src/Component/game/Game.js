import Imagen from 'react-bootstrap/Image';
import Pregunta from '../Img/pregunta.png';
import imgData from "../Img/ImgData";

var titulo = "aa";

function randomImg(){
    var index1 = Math.round(Math.random() * (3-0));
    var index2 = Math.round(Math.random() * (3-0));
    document.getElementById("id1").setAttribute('src',imgData[index1].src);
    document.getElementById("id2").setAttribute('src',imgData[index2].src);
    
    comparar(index1,index2);
}

function comparar(a,b){
    const newElement = document.createElement("h1");
    if(a === b){
        console.log("empate");
    }else{
        if((a+b) % 2 == 0){//gana piedra
            console.log("gana piedra");
        }else if((a+b) % 2 == 1){ //gana tijera o gana papel
            console.log("gana los otros");
        }
    }

}

const Numbers = () => {   

    return(
        
        <>
        <div>
            <Imagen id="id1" src={Pregunta} style={{width: '10%'}}/>
            <button onClick={randomImg}>Gerar Número</button>
            <Imagen id="id2" src={Pregunta} style={{width: '10%'}}/>
            
            
        </div>
        </>
    );

}

export default Numbers;