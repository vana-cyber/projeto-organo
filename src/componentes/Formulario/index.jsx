import { CampoTexto } from "./componentes/CampoTexto";

export const Formulario = () => {
    return (
        <form className='formulario'>
            <h2>Preencha os dados para inserir um colaborador</h2>
            <CampoTexto label="Nome" placeholder="Insira o nome"/>
            <CampoTexto label="Cargo" placeholder="Insira o cargo"/>
            <CampoTexto label="Imagem" placeholder="Insira a URL da imagem"/>
      </form>
    );
}