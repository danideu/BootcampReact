//Con esto cremos nuestro componente Mensaje para poder utilizarlo en otro sitio
const Mensaje = (props) => {
    return <h1 style={{ color: props.color }}>
            {props.message} Más
            </h1>
}

export default Mensaje