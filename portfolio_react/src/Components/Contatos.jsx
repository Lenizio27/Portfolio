import { useState } from "react";
import { useRef } from "react";
import { CardContato } from "./Cards";
import emailjs from '@emailjs/browser'

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


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Substitua pelos seus IDs reais do painel EmailJS
    emailjs.sendForm('service_gmail_lenizio', 'template_tv2dx27', form.current, 'cLlmCw4rO4sKpJLY_')
      .then((result) => {
          alert("Sua mensagem foi enviada com sucesso! 🚀");
          form.current.reset(); // Limpa o formulário após enviar
      }, (error) => {
          alert("Erro ao enviar: " + error.text);
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
                            className="flex flex-col gap-2 w-full flex-wrap" 
                            ref={form} onSubmit={sendEmail}
                            >
                                <div className="flex gap-2">
                                    <label className="flex flex-col flex-1">Nome
                                        <input
                                        type="text"
                                        className="bg-b3 rounded-sm px-2"
                                        placeholder="Seu nome completo"

                                        name="user_name"
                                        required
                                        />
                                    </label>
                                    <label className="flex flex-col flex-1">Email
                                        <input
                                        type="text"
                                        className="bg-b3 rounded-sm px-2" placeholder="seuemail@gmail.com"

                                        name="user_email"
                                        required
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="flex flex-col flex-1">Assunto
                                        <input 
                                        type="text" 
                                        className="bg-b3 rounded-sm px-2" 
                                        placeholder="Assunto do Email"

                                        name="subject"
                                        required
                                        />
                                    </label>
                                    <label className="flex flex-col flex-1">Mensagem
                                        <textarea 
                                        type="text" 
                                        className="bg-b3 rounded-sm px-2" 
                                        placeholder="Conte sobre suas ideias de projetos.."
                                        
                                        name="message"
                                        rows={4}
                                        required
                                        />
                                    </label>
                                </div>
                             <button 
                             type="submit"
                             className="w-full h-10 bg-b4 rounded-md hover:bg-b2 transition active:border-1 my-2">Enviar</button>
                            </form>
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