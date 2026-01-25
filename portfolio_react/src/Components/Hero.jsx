import Foto from '../assets/Images/Perfil_Profissional.png'
import { motion } from 'framer-motion'
import {CardHero} from "./Cards";

const Hero = () => {
    const cards = ["html5", "Css3", "JavaScript", "Tailwind", "Bootstrap", "React", "Vercel", "Git", "GitHub", "Node.js"]
    
    return ( 
        <>
            <motion.section 
                initial={{ opacity: 0, y: 50 }} // Começa invisível e 50px abaixo
                whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela, fica visível e sobe
                transition={{ duration: 0.6 }} // Duração da animação
                viewport={{ once: false, amount: 0.3 }} // Anima apenas uma vez ao rolar
                className="text-w1 max-w-[1440px] mx-auto p-3 flex justify-between max-md:flex-col my-20 min-h-[90vh] " id='hero'
            >
                {/* Descrição Dev */}
                <div className="max-md:m-auto md:w-6 my-auto">
                    <div className=''>
                        <h1 className="text-[50px] max-md:text-center max-sm:text-[40px]">
                            DESENVOLVEDOR <br /><span id='titleHero'>FRONT-END</span>
                        </h1>
                    </div>
                    <h2 className="text-[20px] py-1">
                        olá, me chamo <span className="text-p5">L</span>enízio <span className="text-p5">N</span>ascimento Cru<span className="text-p5">Z</span>
                    </h2>
                    <p className="text-[15px] mr-5">
                        Sou um desenvolvedor front-end apaixonado por tecnologias modernas, sempre buscando aprender novas ferramentas e expandir meus conhecimentos para áreas como back-end e mobile.
                    </p>
                    <div className='py-3 flex flex-wrap gap-y-1'>
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
            </motion.section>
        </>
     );
}
 
export default Hero;