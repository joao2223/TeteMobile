import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './main.css';
import imagemFundo from '../../Images/diagramahome.jpg';


export default function Home() {
    const navRef = useRef<HTMLDivElement>(null);
    const secondNavRev = useRef<HTMLDivElement>(null);
    const navCorreioElegante = useRef<HTMLDivElement>(null);
    const navLanchao = useRef<HTMLDivElement>(null);
    const navCartografiaDaForma = useRef<HTMLDivElement>(null);
    const navCartografiaDoConforto = useRef<HTMLDivElement>(null); 
    const navLoja = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    };
    const showSecondNavBar = () => {
        if (secondNavRev.current) {
            secondNavRev.current.classList.toggle("responsive_nav");
        }
    }
    const backToFirstNav = () => {
        if (secondNavRev.current) {
            secondNavRev.current.classList.remove("responsive_nav");
        }
        if (navRef.current) {
            navRef.current.classList.add("responsive_nav");
        }
    };
    const backToSecondNav = () => {
        if (navCorreioElegante.current) {
            navCorreioElegante.current.classList.remove("responsive_nav");
        }
        if (secondNavRev.current) {
            secondNavRev.current.classList.add("responsive_nav");
        }
    }
    const showNavCorreioElegante = () => {
        if (navCorreioElegante.current) {
            navCorreioElegante.current.classList.remove("responsive_nav");
        }
        if (navCorreioElegante.current) {
            navCorreioElegante.current.classList.add("responsive_nav");
        }
    }

    const showNavLanchao = () => {
        if (navLanchao.current) {
            navLanchao.current.classList.remove("responsive_nav");
        }
        if (navLanchao.current) {
            navLanchao.current.classList.add("responsive_nav");
        }
    }
    const backToNavCorreioElegante = () => {
        if (navLanchao.current) {
            navLanchao.current.classList.remove("responsive_nav");
        }
        if (navCorreioElegante.current) {
            navCorreioElegante.current.classList.add("responsive_nav");
        }
    }
    const showNavCartografiaForma = () => {
        if (navCartografiaDaForma.current) {
            navCartografiaDaForma.current.classList.remove("responsive_nav");
        }
        if (navCartografiaDaForma.current) {
            navCartografiaDaForma.current.classList.add("responsive_nav");
        }
    }
    const backToNavLanchao = () => {
        if (navCartografiaDaForma.current) {
            navCartografiaDaForma.current.classList.remove("responsive_nav");
        }
        if (navCorreioElegante.current) {
            navCorreioElegante.current.classList.add("responsive_nav");
        }
    }
    const showNavCartografiaDoConforto = () => {
        if (navCartografiaDoConforto.current) {
            navCartografiaDoConforto.current.classList.remove("responsive_nav");
        }
        if (navCartografiaDoConforto.current) {
            navCartografiaDoConforto.current.classList.add("responsive_nav");
        }
    }
    const backToNavCartografiaForma = () => {
        if (navCartografiaDoConforto.current) {
            navCartografiaDoConforto.current.classList.remove("responsive_nav");
        }
        if (navCartografiaDaForma.current) {
            navCartografiaDaForma.current.classList.add("responsive_nav");
        }
    }
    const showNavLoja = () => {
        if (navLoja.current) {
            navLoja.current.classList.toggle("responsive_nav");
        }
    }
    return (
        <>
            <header>
                <nav ref={navRef}>
                    <a href="/#" className="opcoesTexto" onClick={showSecondNavBar}>portfólio</a>
                    <a href="/#" className="opcoesTexto" onClick={showNavLoja}>loja</a>
                    <a href="/#" className="opcoesTexto">redes sociais</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <nav ref={secondNavRev} className="secondDialog">
                    <div className="containerOpcoes">
                        <a href="/#" className="opcoesTextoDois" onClick={showNavCorreioElegante}>correio elegante</a>
                        <a href="/#" className="opcoesTextoDois" onClick={showNavLanchao}>lanchão</a>
                        <a href="/#" className="opcoesTextoDois" onClick={showNavCartografiaForma}>cartografia da forma</a>
                        <a href="/#" className="opcoesTextoDois" onClick={showNavCartografiaDoConforto}>cartografia do conforto</a>
                    </div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <button
                        className="nav-btn nav-back-btn "
                        onClick={backToFirstNav}>
                        <BsArrowLeft />
                    </button>
                </nav>
                <nav ref={navCorreioElegante} className="secondDialog">
                    <div className="containerOpcoes" style={{ right: '3rem' }}>
                        <a href="/#" className="opcoesTextoDois">correio elegante</a>
                    </div>
                    <div className="containerDescricaoCorreioElegante">
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Série de 100 poemas
                            <br />
                            impressos como livretos
                            <br />
                            postais distribuidos
                            <br />
                            gratuitamente em setembro
                            <br />
                            de 2022.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Exposição coletiva
                            <br />
                            RAIO-A-RAIO
                            <br />
                            Curadoria:Ariana Nuala
                            <br />
                            e Coletivo Solar dos
                            <br />
                            Abacaxis
                        </p>
                    </div>
                    <div className="containerSetas">
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={backToSecondNav}>
                            <BsArrowLeft />
                        </button>
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={showNavLanchao}>
                            <BsArrowRight />
                        </button>
                    </div>
                </nav>
                <nav ref={navLanchao} className="secondDialog">
                    <div className="containerOpcoes" style={{ right: '7rem', bottom: '7rem' }}>
                        <a href="/#" className="opcoesTextoDois">lanchão</a>
                    </div>
                    <div className="containerDescricaoCorreioElegante" style={{ bottom: '5rem' }}>
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Ritual performático que
                            <br />
                            reconfigura tradições de
                            <br />
                            religiões pautadas pela
                            <br />
                            identificação de gênero para
                            <br />
                            tratar das dissidências em
                            <br />
                            um campo sutil e espiritual
                            <br />
                            executado em 2022.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Despacho de cordão de
                            <br />
                            brigadeiros, cheesecakke, 36
                            <br />
                            hambúrgueres sobre base
                            <br />
                            de mandeira em forma de
                            <br />
                            pentagrama
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Exposição coletiva
                            <br />
                            A BELEZA DA LAGOA É
                            <br />
                            SEMPRE ALGUÉM
                            <br />
                            Curadoria: Guilherme
                            <br />
                            Moraes
                        </p>
                    </div>
                    <div className="containerSetas">
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={backToNavCorreioElegante}>
                            <BsArrowLeft />
                        </button>
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={showNavCartografiaForma}>
                            <BsArrowRight />
                        </button>
                    </div>
                </nav>
                <nav ref={navCartografiaDaForma} className="secondDialog">
                    <div className="containerOpcoes" style={{ right: '1.5rem', bottom: '7rem', margin: '2rem' }}>
                        <a href="/#" className="opcoesTextoDois">cartografia da forma</a>
                    </div>
                    <div className="containerDescricaoCorreioElegante" style={{ bottom: '5rem' }}>
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Exercício de retomada do
                            <br />
                            campo sensível pela
                            <br />
                            reconfiguração dos
                            <br />
                            parâmetros da disciplina
                            <br />
                            de Desenho de Forma
                            <br />
                            ensinada dentro do
                            <br />
                            sistema de Woldorf, criado
                            <br />
                            pelo pedagogo Rudolph
                            <br />
                            Steiner.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Aqui, o erro é estimulado
                            <br />
                            em detrimento da 
                            <br />
                            execução repetida dos
                            <br />
                            desenhos que compõem
                            <br />
                            o sistema.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Salçao Universitário de
                            <br />
                            Arte Contemporânea -
                            <br />
                            SESC PE
                            <br />
                            Curadoria: Letícia
                            <br />
                            Barbosa
                        </p>
                    </div>
                    <div className="containerSetas">
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={backToNavLanchao}>
                            <BsArrowLeft />
                        </button>
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={showNavCartografiaDoConforto}>
                            <BsArrowRight />
                        </button>
                    </div>
                </nav>
                <nav ref={navCartografiaDoConforto} className="secondDialog">
                    <div className="containerOpcoes" style={{ right: '1.5rem', bottom: '7rem' }}>
                        <a href="/#" className="opcoesTextoDois">cartografia do conforto</a>
                    </div>
                    <div className="containerDescricaoCorreioElegante" style={{ bottom: '5rem' }}>
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Série de colagens e
                            <br />
                            poemas sobre scan de
                            <br />
                            exercícios e anotações
                            <br />
                            das aulas de Conforto
                            <br />
                            Ambiental 2, ministrada
                            <br />
                            no segundo períoso da
                            <br />
                            graduação de Arquitetura
                            <br />
                            e Urbanismo da UFPE
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Tendo fama enquanto a
                            <br />
                            disciplina que mais 
                            <br />
                            reprova no Centro de
                            <br />
                            Artes e Comunicação, a
                            <br />
                            fricção entre poemas,
                            <br />
                            gráficos e desenhos
                            <br />
                            provocam sobre esta
                            <br />
                            agenda pedagógica e
                            <br />
                            seus limites.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ transform: 'scale(1.4, 1.5)' }}>
                            Antologia virtul, Garupa
                            <br />
                            Edições, 2019.
                        </p>
                    </div>
                    <div className="containerSetas">
                        <button
                            className="nav-btn nav-back-btn-options "
                            onClick={backToNavCartografiaForma}>
                            <BsArrowLeft />
                        </button>
                    </div>
                </nav>
                <nav ref={navLoja}>
                    <a href="/#" className="opcoesTexto">tudo</a>
                    <a href="/#" className="opcoesTexto">prints</a>
                    <a href="/#" className="opcoesTexto">pinturas</a>
                    <a href="/#" className="opcoesTexto">vestuário</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
            <img src={imagemFundo} alt="Diagrama Home" className="imagemFundo" />
        </>
    );
}
