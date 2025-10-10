const Sobre = () => {
    return ( 
        <>
            <section className="text-w1 py-5">
                <div className="max-w-[1080px] m-auto">
                    <div className=" flex flex-col align-items-center justify-center">
                        <h2 className="text-[30px] font-semibold">SOBRE <span className="text-p5">MIM</span></h2>
                        <p>Um pouco sobre minha jornada e experiências</p>
                    </div>
                    <article className="flex max-md:flex-col">
                        {/* Jornada */}
                        <div className="StyleGrow p-3 md-flex">
                            <h3 className="text-[20px] text-p5">Minha Jornada</h3>
                            <p>
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
                        <div className="StyleGrow p-3 ">
                            <h3 className="text-[20px] text-p5">Experiência</h3>
                            <div className="flex flex-column justify-evenly items-center w-full h-full">
                                <div className="xpBox bg-p1 w-full p-2 rounded-md border border-b4">
                                    <h4>Desafio Drip-Store</h4>
                                    <h5>Geração Tech</h5>
                                    <p>Projeto Front-End</p>
                                </div>
                                <div className="xpBox bg-p1 BoxEx w-full p-2 rounded-md border border-b4">
                                    <h4>Projeto Drip-Store</h4>
                                    <h5>Geração Tech</h5>
                                    <p>Projeto Front-End</p>
                                </div>
                                <div className="xpBox bg-p1 BoxEx w-full p-2 rounded-md border border-b4">
                                    <h4>Projeto Drip-Store</h4>
                                    <h5>Geração Tech</h5>
                                    <p>Projeto Front-End</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
     );
}
 
export default Sobre;