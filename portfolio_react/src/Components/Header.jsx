import Logo from "/src/assets/Images/LogoPortfolio.png"
import { Link } from 'react-scroll';
import { Button } from 'primereact/button';
import { useState } from "react";
import { CardFaleComigo } from "./Cards";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const arrayCards = [
        {
            link: "/src/assets/pdf/Currículo-Lenízio.pdf",
            icon: "pi pi-copy"
        },
        {
            link: "https://wa.me/5585992970669",
            icon: "pi pi-whatsapp"
        },
        {
            link: "https://github.com/Lenizio27",
            icon: "pi pi-github"
        },
        {
            link: "https://www.linkedin.com/in/lenizio-nascimento-805534296/",
            icon: "pi pi-linkedin"
        },
    ]
    return ( 
        <>
            <header 
            className="border-b border-b1 m-auto fixed flex w-full z-20 bg-b6 top-0"
            >
                <div 
                className="flex align-items-center justify-between h-[80px] max-w-[1080px] m-auto max-md:justify-between max-md:px-7 px-3 w-full"
                >
                    {/*Logo*/}
                    <div>
                        <img src={Logo} alt="" style={{width: '70px'}}/>
                    </div>
                    {/*Navegation*/}
                    <nav className="hidden md:flex">
                        <ul className="flex justify-around w-full gap-7">
                            <li>
                                <Link to="hero" smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">início</Link>
                            </li>
                            <li>
                                <Link to="Sobre" offset={-200} smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Sobre</Link>
                            </li>
                            <li>
                                <Link to="Habilidades" offset={-250} smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Habilidades</Link>
                            </li>
                            <li>
                                <Link to="Projetos" smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Projetos</Link>
                            </li>
                        </ul>
                    </nav>
                    {menuOpen && (
                        <nav 
                            className="absolute top-[80px] left-0 w-full h-[92vh] bg-[#0a0a23] flex flex-col items-center gap-6 py-6 md:hidden
                            justify-content-center z-10"
                        >
                            <ul className="flex justify-center items-center w-full gap-7 flex-col text-[20px]">
                                <li>
                                    <Link to="hero" smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">início</Link>
                                </li>
                                <li>
                                    <Link to="Sobre" offset={-200} smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Sobre</Link>
                                </li>
                                <li>
                                    <Link to="Habilidades" offset={-250} smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Habilidades</Link>
                                </li>
                                <li>
                                    <Link to="Projetos" smooth={true} className="text-w1 hover:text-b5 duration-700 cursor-pointer">Projetos</Link>
                                </li>
                            </ul>
                            <div className="text-center">
                                <div className="flex">
                                    {arrayCards.map(item => (
                                        <a href="">
                                            <div className={`${item.icon} text-b5 px-3 text-2xl`}></div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    )}
                    {/* Button */}
                    <div>
                        <div className="flex flex-col items-center ">
                            <Button
                                label="Fale Comigo"
                                className="z-10 bg-none text-b5 border border-b5 p-1.5 rounded-md text-[14px] hidden md:flex hover:bg-b5 hover:text-w1"
                                onClick={() => setOpen(!open)}
                            />
                            <CardFaleComigo
                                open={open}
                                arrayCard={arrayCards}
                            />
                        </div>

                        <button
                        className="md:hidden text-w1 w-3"
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <i 
                            className={menuOpen ? "pi pi-times" : "pi pi-bars"
                            }>
                            </i>
                        </button>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;