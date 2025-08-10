import Logo from "/src/assets/Images/LogoPortifolio.png"
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Header = () => {
    return ( 
        <>
            <header>
                <div className="flex align-items-center justify-around">
                    {/*Logo*/}
                    <div>
                        <img src={Logo} alt="" style={{width: '100px'}}/>
                    </div>
                    {/*Navegation*/}
                    <nav className="bg-primary">
                        <ul className="flex gap-3">
                            <li>
                                <Link to="/" className="text-b5 hover:text-p5 duration-1000">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Button */}
                    <div>
                        <Button label="Fale Comigo" className="bg-b5 text-p0 p-1.5 rounded-md"/>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;