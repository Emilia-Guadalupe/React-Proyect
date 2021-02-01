import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import './formStyles.css';

function CartForms() {

    const { setName, setEmail, setPhone, manejarCompra, name, email, phone, setConfirmEmail, thanks, confirmEmail, compra } = useContext(CartContext);

    console.log(compra);

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onEmailChange(evt) {
    setEmail(evt.target.value);
    }

    function  secondOnEmailChange(evt) {
        setConfirmEmail(evt.target.value)
    }

    function onPhoneChange(evt) {
    setPhone(evt.target.value);
    }


    return(
        <div className="formContainer">
            <div className="explanation">
                <h4 id="title"> ¡Confirmá tu compra! </h4>
                <p id="description">Si ya tenés todo listo, confirmá tu compra</p>
            </div>
            <div>
                <form className="forms" onSubmit={manejarCompra}>

                <label id="name-label"> Nombre Completo: </label>
                <input required placeholder="Ingresá tu nombre" type="text" id="name" className="datos" onChange={evt => onNameChange(evt)} />
                
                <label id="email-label">Tu email:</label>
                <input type="email" id="email" name="email" placeholder="Ingresá tu email" className="datos" required onChange={evt => onEmailChange(evt)}></input>
                
                <label id="secondond-email-label">Reingresá tu email:</label>
                <input type="email" id="SecondEmail" name="email" placeholder="Ingresá nuevamente tu email" className="datos" required onChange={evt => secondOnEmailChange(evt)}></input>
                
                <label id="number-label">Tu teléfono:</label>
                <input  placeholder="Ingresá tu teléfono" required type="number" id="number" className="datos" onChange={evt => onPhoneChange(evt)}></input>
                
                <button type="submit" className="submitButton" disabled={!(name !== "" && phone !== "" && email !== "" && confirmEmail !== "")}>Enviar</button>
                </form>
            </div>
            <div id="confirmationText">
                {compra ? (
                    <>
                    <div>
                    <p>
                    ¡Muchas gracias, {compra.buyer.name}! 
                    </p>
                    <p>El id de tu compra es: {compra.id}</p>
                    <p>Total de tu compra: ${compra.total}</p>
                    </div>
                    </>
                ) : null }
            </div>
        </div>
    )
}

export default CartForms;