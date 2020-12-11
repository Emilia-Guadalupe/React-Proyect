import React from 'react';

function ItemCount(){
    const [numero, setNumero] = React.useState(0);

    function sumar(){
        setNumero(numero + 1);
    }

    function restar(){
        setNumero(numero - 1);
    }

    return(
        <div>
            <button onClick={sumar}>
                Sumar 
            </button>
            <button onClick={restar}>
                Restar 
            </button>
            <p>Cantidad de clicks: {numero}</p>
        </div>
    )
}

export default ItemCount;