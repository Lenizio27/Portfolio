import Logo from "/src/assets/Images/LogoPortifolio.png"
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return ( 
        <>
            <header 
            className="border-b border-b1 m-auto"
            >
                <div 
                className="flex align-items-center justify-between h-[80px] max-w-[1080px] m-auto max-md:justify-between max-md:px-7 px-3"
                >
                    {/*Logo*/}
                    <div>
                        <img src={Logo} alt="" style={{width: '70px'}}/>
                    </div>
                    {/*Navegation*/}
                    <nav className="hidden md:flex">
                        <ul className="flex justify-around w-full gap-7">
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">início</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Habilidades</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Projetos</Link>
                            </li>
                        </ul>
                    </nav>
                    {menuOpen && (
                        <nav 
                            className="absolute top-[80px] left-0 w-full h-[90vh] bg-[#0a0a23] flex flex-col items-center gap-6 py-6 md:hidden
                            justify-content-center z-10"
                        >
                            <Link to="/" className="text-white">início</Link>
                            <Link to="/sobre" className="text-white">Sobre</Link>
                            <Link to="/skills" className="text-white">Habilidades</Link>
                            <Link to="/projetos" className="text-white">Projetos</Link>
                             <Button label="Fale Comigo" className="bg-none text-b5 border border-b5 p-1.5 rounded-md text-[14px]"/>
                        </nav>
                    )}
                    {/* Button */}
                    <div>
                        <Button 
                            label="Fale Comigo" 
                            className="bg-none text-b5 border border-b5 p-1.5 rounded-md text-[14px] hidden md:flex hover:bg-b5 hover:text-w1"
                        />
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