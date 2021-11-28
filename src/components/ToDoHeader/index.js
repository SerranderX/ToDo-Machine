import React from "react";

function ToDoHeader({children, loading}){
    

    return (
        <header>
            {  
            /* 
                La funcionalidad React.Children es implementada en este segmento para avitar enviar 
                la propiedad children, sin validar que esta este vacia (null) o bien para manejar todo 
                como un array, al enviar mas de una elemento. 
            */
                React.Children.toArray(children).map(
                    child => React.cloneElement(child, { loading: loading }) 
                )
            }
        </header>
    )
}

export { ToDoHeader }