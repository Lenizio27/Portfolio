import Hero from "../Components/Hero";
import Sobre from "../Components/Sobre";
import Habilidades from "../Components/Habilidades";
import Projetos from "../Components/Projetos";
Sobre
const Home = () => {
    return ( 
        <>
            <main>
                <section id="Hero">
                    <Hero/>
                </section> 
                <section id="Sobre">
                    <Sobre/>
                </section>
                <section id="Habilidades">
                    <Habilidades/>
                </section>
                <section>
                    <Projetos/>
                </section>
            </main>
        </>
     );
}
 
export default Home;