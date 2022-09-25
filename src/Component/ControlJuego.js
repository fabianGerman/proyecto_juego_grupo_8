class Jugador{
    constructor(name, email, puntaje){
        this.name = name;
        this.email = email;
        this.puntaje = puntaje;
    }

    actualizarPuntaje(puntaje){
        this.puntaje = puntaje;
    }
}

class Cuadro{
    constructor(imagen, estado){
        this.imagen = "img/"+imagen+".png";
        this.estado = estado;
    }
    
    actualizarEstado(estado){
        this.estado = estado;
    }
}

class Aplication{

    constructor(){
        this.arregloJugador = [];
        this.jugador;
        this.arregloTablero = [];
        this.intentos = 0;
        this.comparar = false;
        this.aux = 0;
    }

    init(){
        this.eventClickStart();
        this.eventClickInit();
    }

    eventClickInit(){
        $("#btnInit").click(function () {
            $("#name").val('');
            $("#email").val('');
        });
    }

    eventClickStart(){
        $("#btnJugar").click(function () {
            var vname = $("#name").val();
            var vemail = $("email").val();
            if(vname.length <= 0 || vemail.length <= 0){
                $("#msjerror").removeClass("d-none");
            }else{
                var unJugador = new Jugador(vname, vemail, 0);
                app.jugador = unJugador;
                app.arregloTablero = app.generateRandomBox(2);
                app.arregloTablero.push.apply(app.arregloTablero, app.arregloTablero);
                app.disorder(app.arregloTablero);
                app.displayTable();
                app.intentos = 0;
                app.eventoClickImg();
                $("#puntos").html(app.intentos);
                $("#modalIniciar").modal('hide');
            }
        });
    }

    eventClickImg(){
        var imagenes = $("#container img");
        $.each(imagenes, function(index, value) {
            $(value).click(function (){
                if (app.intentos < 15){
                    if(app.comparar){ 
                        if (app.arregloTablero[index].imagen === app.arregloTablero[app.aux].imagen) {
                            $(this).attr("src", app.arregloTablero[index].imagen);
                            app.arregloTablero[index].actualizarEstado(true);
                            app.arregloTablero[app.aux].actualizarEstado(true);
                            app.intentos ++;
                            app.comparar = false;
                        }else{
                            $(this).attr("src", app.arregloTablero[index].imagen); 
                            app.intentos ++;
                            app.comparar = false;  
                        }
                        setTimeout(function() {
                            app.dibujarTablero();
                            if(app.juegoGanado(app.intentos)){
                                alert("HAS GANADO FELICIDADES!!");
                            }else{
                            app.eventoClickImg();  
                            }
                        },500);
                    }else{
                        app.aux = index;
                        $(this).attr("src", app.arregloTablero[app.aux].imagen);
                        app.comparar = true;
                    }
                    $("#puntos").html(app.intentos);
                }else{
                    alert("HAS PERDIDO...INTENTA OTRA VEZ!")
                }
            });
        });
    }  

    generateRandomBox(cantidad){
        var arrNum = [];
        var arrCuadros = [];
        var cantImg = 2;
        while(arrNum.length < cantidad){
            var aNum = Math.round(Math.random() * 13 + 1);
            var existe = arrNum.includes(aNum);
            if(!existe){
                arrNum.push(aNum);
            }
        }
        arrNum.forEach(num =>{
            var unCuadro = new Cuadro(num, false);
            arrCuadros.push(unCuadro);
        });
        return arrCuadros;
    }

    disorder(arreglo){
        var m = arreglo.length - 1;
        for(var i = m; i > 1; i--){
            var alea = Math.floor(i * Math.random());
            var temp = arreglo[i]; arreglo[i] = arreglo[alea]; arreglo[alea] = temp;

        }
    }

    displayTable(){
        $("#container").empty();
        app.arregloTablero.forEach(cuadro => {
            var source = cuadro.estado ? cuadro.imagen : 'img/images.jpg';
            var $div = $('<div class="col-4 col-md-2 text-center p-2"></div>');
            var $div2 = $('<div class="rounded alert-dark"></div>');
            var $imagen = $('<img class="m-2 default" src="' + source + '" alt="?">');
            $div2.append($imagen);
            $div.append($div2);
            $("#container").append($div);
        });
    }

    winGame(intentos){
        var ganado = true;
        app.arregloTablero.forEach(cuadro =>{
            if (cuadro.estado !== true){
                ganado = false;
            }  
        });
        if(ganado === true){
            app.jugador.actualizarPuntaje(intentos);
            app.arregloJugador.push(app.jugador);
            app.arregloJugador.sort(function (a, b){
                return a.puntaje > b.puntaje;
            });
        }
        return ganado;
    }
}

$("document").ready(function () {
    app = new Aplication();
    app.init();
     console.log("prueba");
})