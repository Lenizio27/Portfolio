import {motion} from 'framer-motion'


const Sobre = () => {
    const arrayCards = [
        {
            title: "Desafio Drip-Store",
            institute: "Geração Tech",
            sobre: "Construção de uma loja digital"
        },
         {
            title: "Desafio Back-End",
            institute: "Geração Tech",
            sobre: "Projeto Back-End"
        },
         {
            title: "Desafio Drip-Store",
            institute: "Geração Tech",
            sobre: "Projeto Front-End"
        },
    ]
    return ( 
        <>
            <motion.section 
                className="text-w1 py-5 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
                >
                <div className="max-w-[1440px] m-auto p-3">
                    <div className=" flex flex-col align-items-center justify-center">
                        <h2 className="text-[30px] font-semibold">SOBRE <span className="text-p5">MIM</span></h2>
                        <p>Um pouco sobre minha jornada e experiências</p>
                    </div>
                    <article className="flex max-md:flex-col py-3 gap-3">
                        {/* Jornada */}
                        <div className=" md-flex flex-6 my-1">
                            <h3 className="text-[20px] text-p5">Minha Jornada</h3>
                            <p className="">
                                Olá! Sou Lenizio Nascimento (LNZ), um desenvolvedor frontend dedicado e curioso por tecnologia. Iniciei minha trajetória na programação há alguns mêses, venho me aprimorando continuamente, sempre em busca de evoluir minhas habilidades e entregar soluções de qualidade.
                                <br />
                                <br />
                                Tenho foco em React e desenvolvimento web moderno, prezando pela performance, acessibilidade e boas práticas de código. Gosto de criar interfaces que unam design e funcionalidade, proporcionando experiências que realmente façam diferença para os usuários.
                                <br />
                                <br />
                                tenho interesse por aprender constantemente novas tecnologias, explorar áreas como back-end e mobile, além de dedicar tempo a projetos pessoais que me desafiam e ampliam minha visão como desenvolvedor. Também valorizo a troca de conhecimento e acredito que a colaboração é um dos maiores motores da evolução na área de tecnologia.
                            </p>
                        </div>
                        {/* Experiências */}
                    </article>
                </div>
            </motion.section>
        </>
     );
}
 
export default Sobre;