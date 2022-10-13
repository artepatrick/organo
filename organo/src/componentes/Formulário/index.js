import './Formulário.css'
import CampoTexto from '../CampoTexto'

const Formulário = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="digite o endereço da sua imagem" />
            </form>
        </section>
    )

}

export default Formulário