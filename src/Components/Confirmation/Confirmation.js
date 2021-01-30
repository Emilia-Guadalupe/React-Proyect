import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';

function Confirmation() {

    const { compra } = useContext(CartContext);

    console.log(compra);

    return(
        <div>
            <div>
                <h3>¡Gracias por tu compra {compra.buyer.name}!</h3>
            </div>
            <div>
                {compra.items.map(item => {
                    return(
                        <>
                        <div key={item.id}>
                            <p>{item.item.title}</p>
                            <p>{item.item.number}</p>
                            <p>${item.total}</p>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Confirmation;