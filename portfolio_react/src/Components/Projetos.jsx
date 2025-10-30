import Foto from '../assets/Images/LogoPortfolio.png'
import { CardProjetos } from "./Cards";


const Projetos = () => {
    const arrayCards = [
        {
            image:"./src/assets/Images/ToDoList.png",
            title:"To-Do list",
            text: "Projeto To-Do list feito com html5,Css3 e Javascript"
        },
        {
            image:"../src/assets/Images/vazio.png",
            title:"projetos futuros",
            text: "Área reservada para projetos futuros"
        },
        
    ]
    return ( 
        <>
            <section className="w-full text-w1 py-5" id='Projetos'>
                <div className="max-w-[1080px] m-auto p-3">
                    <div className="text-center">
                        <h1 className="text-[30px] font-semibold">PROJETOS</h1>
                        <p>
                            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades e experiência.
                        </p>
                    </div>
                    <div className='pt-3 flex flex-wrap gap-2'>
                        {arrayCards.map(item => (
                            <CardProjetos
                                image={item.image}
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
 
export default Projetos; 