import "./rodape.css"

const Rodape = () => {
    return (<footer className="footer"> 
        <section className="redes-sociais">
            <ul>
                <li>
                    <a className="rede-social">
                        <img alt="Facebook" src="/imagens/fb.png"></img>
                    </a>
                </li>
                <li>
                    <a className="rede-social">
                        <img alt="Twitter" src="/imagens/tw.png"></img>
                    </a>
                </li>
                <li>
                    <a className="rede-social">
                        <img alt="Instagram" src="/imagens/ig.png"></img>
                    </a>
                </li>
            </ul>
        </section>
        <section className="creditos">
            <img className="logo" src="/imagens/logo.png">
            </img>
            <p className="texto">
                Desenvolvido por Geovana. 
            </p>
        </section>
    </footer>
    )
}

export default Rodape;