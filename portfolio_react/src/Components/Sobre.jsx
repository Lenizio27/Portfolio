const Sobre = () => {
    return ( 
        <>
            <section className="text-w1">
                <div className="max-w-[1080px] m-auto">
                    <div className=" flex flex-col align-items-center justify-center">
                        <h2 className="text-[30px] font-semibold">SOBRE <span className="text-p5">MIM</span></h2>
                        <p>Um pouco sobre minha jornada e experiências</p>
                    </div>
                    <article className="flex">
                        <div className="w-6 p-3">
                            <h3 className="text-[20px] text-p5">Minha Jornada</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum doloribus vel facere, et non minus inventore nostrum! Ullam, ad ab repellendus animi repellat illum! Voluptatum possimus laudantium labore debitis harum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ratione, quia ad illum eaque provident consequuntur dolorem deserunt ab velit error dignissimos dicta! Quod nam nesciunt qui neque tempora fugiat.
                                <br />
                                <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta explicabo, mollitia quae libero fugit tempore odio perspiciatis aperiam! Eum blanditiis minus earum ea non molestiae a tenetur corporis tempore.
                            </p>
                        </div>
                        <div className="w-6 p-3">
                            <h3 className="text-[20px] text-p5">Experiência</h3>
                            <div className="flex flex-column justify-around items-center">
                                <div className="w-4">
                                    <h4>Projeto Drip-Store</h4>
                                    <h5>Geração Tech</h5>
                                    <p>Projeto Front-End</p>
                                </div>
                                <div className="w-4">
                                    <h4>Projeto Drip-Store</h4>
                                    <h5>Geração Tech</h5>
                                    <p>Projeto Front-End</p>
                                </div>
                                <div className="w-4">
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