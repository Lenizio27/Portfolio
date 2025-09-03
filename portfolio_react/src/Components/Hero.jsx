import Foto from '../assets/Images/Perfil_Profissional.png'

const Hero = () => {
    return ( 
        <>
            <section className="text-w1 max-w-[1080px] m-auto p-3 flex justify-between max-md:flex-col">
                <div className="max-md:m-auto md:w-6 my-auto">
                    <h1 className="text-[30px]">DESENVOLVEDOR <br />FRONT-END</h1>
                    <h2 className="text-[20px] py-1">
                        olá, me chamo <span className="text-p5">L</span>enízio <span className="text-p5">N</span>ascimento Cru<span className="text-p5">Z</span>
                    </h2>
                    <p className="text-[15px] mr-5">
                        Sou um desenvolvedor front-end apaixonado por criar experiências web bonitas e responsivas com tecnologias modernas, sempre buscando aprender novas ferramentas e expandir meus conhecimentos para áreas como back-end e mobile.
                    </p>
                </div>
                <div className="flex justify-center align-items-center max-md:w-auto md:w-6 max-md:my-2" >
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