import React, {useState} from 'react';

function ItemCount(){
    const initial = 0;
    const [number, setNumber] = React.useState(initial);
    const [stock] = useState(10); 
    const [limit] = useState(0);


    function more(){
        if(number < stock){
            
        setNumber(number + 1);
        return;
    }
}

    function less(){
        if(number > limit){
        setNumber(number - 1);
    }
}

    return(
        <>
        <div>
            <button onClick={more}>+</button>
            <p>Cantidad de clicks: {number}</p>
            <button onClick={less}>-</button>
        </div>
        <div>
            <button>Agregar al Carrito</button>
        </div>
        </>
    )
}

export default ItemCount;