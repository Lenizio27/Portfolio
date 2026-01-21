const Contatos = () => {
    return ( 
        <>
            <section className="text-white">
                <div className="max-w-[1440px] m-auto p-3">
                    <div className=" flex flex-col align-items-center justify-center text-center my-4">
                        <h2 className="text-[30px] font-semibold">ENTRE EM <span className="text-p5">CONTATO</span></h2>
                        <p>
                            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
                        </p>
                    </div>
                    <section className="flex flex-col p-3 bg-b1 max-w-[500px] rounded-sm">
                        <form className="flex gap-2 w-full">
                            <label className="flex flex-col flex-1">Nome
                                <input type="text" className="bg-b3 rounded-sm"/>
                            </label>
                            <label className="flex flex-col flex-1">Email
                                <input type="text" className="bg-b3 rounded-sm"/>
                            </label>
                        </form>
                        <form>
                             <label className="flex flex-col flex-1">Assunto
                                <input type="text" className="bg-b3 rounded-sm"/>
                            </label>
                            <label className="flex flex-col flex-1">Mensagem
                                <textarea type="text" className="bg-b3 rounded-sm"/>
                            </label>
                        </form>
                    </section>
                    <section>
                    </section>
                </div>
            </section>
        </>
     );
}
 
export default Contatos;    