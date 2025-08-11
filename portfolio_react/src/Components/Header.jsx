import Logo from "/src/assets/Images/LogoPortifolio.png"
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Header = () => {
    return ( 
        <>
            <header className="border-b border-b1 m-auto">
                <div className="flex align-items-center justify-around h-[80px] max-w-[1280px] m-auto">
                    {/*Logo*/}
                    <div>
                        <img src={Logo} alt="" style={{width: '80px'}}/>
                    </div>
                    {/*Navegation*/}
                    <nav className="">
                        <ul className="flex justify-around w-full gap-7">
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Skils</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-w1 hover:text-b5 duration-700">Projetos</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Button */}
                    <div>
                        <Button label="Fale Comigo" className="bg-none text-b5 border border-b5 p-1.5 rounded-md text-[14px]"/>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;