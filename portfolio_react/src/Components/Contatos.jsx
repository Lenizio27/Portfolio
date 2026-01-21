import { CardContato } from "./Cards";

const Contatos = () => {
    const cardContatos = [
        {
            icon: "pi pi-envelope",
            title: "Email",
            doc: "lenizio27@gmail.com",
        },
         {
            icon: "pi pi-phone",
            title: "Telefone",
            doc: "(85) 99297-0669",
        },
         {
            icon: "pi pi-map-marker",
            title: "Localização",
            doc: "Eusébio(CE), Brasil",
        },
    ]

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
                    <section className="flex flex-col p-3 bg-b1 rounded-sm">
                        <h2 className="text-[20px] text-p5 pb-2">Envie uma Mensagem</h2>
                        <form className="flex gap-2 w-full">
                            <label className="flex flex-col flex-1">Nome
                                <input type="text" className="bg-b3 rounded-sm px-2" placeholder="Seu nome completo"/>
                            </label>
                            <label className="flex flex-col flex-1">Email
                                <input type="text" className="bg-b3 rounded-sm px-2" placeholder="seuemail@gmail.com"/>
                            </label>
                        </form>
                        <form>
                             <label className="flex flex-col flex-1">Assunto
                                <input type="text" className="bg-b3 rounded-sm px-2" placeholder="Assunto do Email"/>
                            </label>
                            <label className="flex flex-col flex-1">Mensagem
                                <textarea type="text" className="bg-b3 rounded-sm px-2" placeholder="Conte sobre suas ideias de projetos.."/>
                            </label>
                        </form>
                    </section>
                    <section className="flex flex-col p-3 rounded-sm gap-2">
                        {
                            cardContatos.map(item => (
                                <CardContato
                                    icon={item.icon}
                                    title={item.title}
                                    doc={item.doc}
                                >
                                </CardContato>
                            ))
                        }
                    </section>
                </div>
            </section>
        </>
     );
}
 
export default Contatos;    