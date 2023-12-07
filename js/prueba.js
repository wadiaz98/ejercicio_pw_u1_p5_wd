let numX = [];
const getRandomInt = () => {
    let numero = Math.floor(Math.random() * 100);
    console.log(numero)
    return numero;
};

const mostrar = (id) =>{
    document.getElementById('id'+id).innerText = getRandomInt()
    
};

const suma = (id) =>{
    document.getElementById('idResultado').innerText = resultado;
}
