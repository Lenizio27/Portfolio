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

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });   

    // 3. Função de envio
    const sendEmail = (e) => {
    e.preventDefault();

    // Aqui você usaria o ID do serviço, template e chave pública do EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
        .then((response) => {
            alert('Mensagem enviada com sucesso!');
            setFormData({ nome: '', email: '', assunto: '', mensagem: '' }); // Limpa o form
        }, (err) => {
            console.error('Erro ao enviar:', err);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    };

    return ( 
        <>
            <section className="text-white">
                <div className="max-w-[1440px] m-auto p-3 flex flex-col">
                    <div className=" flex flex-col align-items-center justify-center text-center my-4">
                        <h2 className="text-[30px] font-semibold">ENTRE EM <span className="text-p5">CONTATO</span></h2>
                        <p>
                            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap flex-col lg:flex-row">
                        <section className="flex flex-col p-3 bg-b1 rounded-sm flex-1">
                            <h2 className="text-[20px] text-p5 pb-2">Envie uma Mensagem</h2>
                            <form 
                            className="flex gap-2 w-full flex-wrap" 
                            onSubmit={sendEmail}
                            >
                                <label className="flex flex-col flex-1">Nome
                                    <input
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    type="text" 
                                    className="bg-b3 rounded-sm px-2" 
                                    placeholder="Seu nome completo"
                                    required
                                    />
                                </label>
                                <label className="flex flex-col flex-1">Email
                                    <input 
                                    type="text" 
                                    className="bg-b3 rounded-sm px-2" placeholder="seuemail@gmail.com"
                                    />
                                </label>
                            </form>
                            <form>
                                 <label className="flex flex-col flex-1">Assunto
                                    <input 
                                    type="text" 
                                    className="bg-b3 rounded-sm px-2" 
                                    placeholder="Assunto do Email"/>
                                </label>
                                <label className="flex flex-col flex-1">Mensagem
                                    <textarea 
                                    type="text" 
                                    className="bg-b3 rounded-sm px-2" 
                                    placeholder="Conte sobre suas ideias de projetos.."/>
                                </label>
                            </form>
                             <button className="w-full h-10 bg-b4 rounded-md hover:bg-b2 transition active:border-1 my-2">Verificar</button>
                        </section>
                        <section className="flex flex-col p-3 rounded-sm gap-2 flex-1">
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
                </div>
            </section>
        </>
     );
}
 
export default Contatos;    