import Foto from '../assets/Images/Perfil_Profissional.png'
import {CardHero} from "./Cards";

const Hero = () => {
    const cards = ["JavaScript", "html5", "Css3", "Tailwind", "Bootstrap", "React", ]

    return ( 
        <>
            <section className="text-w1 max-w-[1080px] mx-auto p-3 flex justify-between max-md:flex-col my-20 min-h-[90vh]" id='hero'>
                {/* Descrição Dev */}
                <div className="max-md:m-auto md:w-6 my-auto">
                    <div className=''>
                        <h1 className="text-[50px]">
                            DESENVOLVEDOR <br />FRONT-END
                        </h1>
                    </div>
                    <h2 className="text-[20px] py-1">
                        olá, me chamo <span className="text-p5">L</span>enízio <span className="text-p5">N</span>ascimento Cru<span className="text-p5">Z</span>
                    </h2>
                    <p className="text-[15px] mr-5">
                        Sou um desenvolvedor front-end apaixonado por tecnologias modernas, sempre buscando aprender novas ferramentas e expandir meus conhecimentos para áreas como back-end e mobile.
                    </p>
                    <div className='py-3'>
                        {cards.map(item => (
                            <CardHero text={item}/>
                        ))}                      
                    </div>
                </div>
                {/* Foto Perfil */}
                <div className="flex justify-end align-items-center max-md:w-auto md:w-6 max-md:my-2 max-md:justify-center" >
                    <img 
                    src={Foto} 
                    alt="foto-perfil" 
                    className='imgLogo w-[70%]'/>
                </div>
            </section>
        </>
     );
}
 
export default Hero;