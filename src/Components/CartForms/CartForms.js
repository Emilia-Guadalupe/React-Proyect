import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import './formStyles.css';

function CartForms() {

    const { setName, setEmail, setPhone, manejarCompra } = useContext(CartContext);

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onEmailChange(evt) {
    setEmail(evt.target.value);
    }

    function onPhoneChange(evt) {
    setPhone(evt.target.value);
    }

    return(
        <div className="formContainer">
            <div className="explanation">
                <h4 id="title"> ¡Confirmá tu compra! </h4>
                <p id="description">Si ya tenés todo listo, confirmá tu compra para ser redirigido a Mercado Pago para abonar tu compra</p>
            </div>
            <div>
                <form className="forms">
                <>
                <label id="name-label"> Nombre Completo: </label>
                <input required placeholder="Ingresá tu nombre" type="text" id="name" className="datos" onChange={evt => onNameChange(evt)} />
                </>
                <>
                <label id="email-label">Tu email:</label>
                <input type="email" id="email" name="email" placeholder="Ingresá tu email" className="datos" required onChange={evt => onEmailChange(evt)}></input>
                </>
                <>
                <label id="number-label">Tu teléfono:</label>
                <input  placeholder="Ingresá tu teléfono" required type="number" id="number" className="datos" onChange={evt => onPhoneChange(evt)}></input>
                </>
                <button type="submit" className="submitButton" onClick={manejarCompra}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default CartForms;