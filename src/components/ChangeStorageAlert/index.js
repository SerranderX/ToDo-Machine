import React from "react";
import {useStorageListener} from "./useStorageListener";
import "./ChangeStorageAlert.css";

function ChangeAlert({sincronize}) {

    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        return (
            <div className="changeAlert-bg">
                <div className="changeAlert-container">
                    <p>Parece que cambiaste tus ToDo's en otra pestaña o ventada de navegador.</p>
                    <p>¿Quieres sincronizar los cambios?</p>
                    <button className="changeAlert-button"
                        onClick={() => toggleShow(false)}
                    >Sincronizar cambios</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}


export {ChangeAlert}