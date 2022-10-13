import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props.label)
    console.log(props.placeholder)
    const placeholdermodificada = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input placeholder={placeholdermodificada} />
        </div>
    )
}

export default CampoTexto