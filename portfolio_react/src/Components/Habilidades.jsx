import {CardService} from "./Cards";

const Habilidades = () => {
    const Cards = [
        {
            icon: "pi pi-code",
            title: "Desenvolvimento-Web",
            text: "Conhecimento em Desenvolvimento web"
        },
        {
            icon: "pi pi-palette",
            title: "UI/UX Designer",
            text: "Conhecimento em interface e experiência do Usuario"
        },
        {
            icon: "pi pi-server",
            title: "Desenvolvimento Back-End",
            text: "Desenvolvedor Back-End"
        },
        {
            icon: "pi pi-tablet",
            title: "Mobile-First",
            text: "Desenvolvimento para Mobile-First"
        },
        {
            icon: "pi pi-github",
            title: "Git/GitHub",
            text: "Versionamento com git e github"
        }
    ];
    return ( 
        <>
            <section className="text-w1 w-full bg-b1">
                <div className="max-w-[1080px] m-auto p-3">
                    <div className=" m-auto p-3 text-center">
                        <h2 className="text-[30px] font-semibold">
                            MEUS <span className="text-p5">SERVIÇOS</span>
                        </h2>
                        <p>
                            Minhas habilidades e serviços a oferecer
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {Cards.map(item => (
                            <CardService
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Habilidades;