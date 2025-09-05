import Hero from "../Components/Hero";
import Sobre from "../Components/Sobre";
import Habilidades from "../Components/Habilidades";
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
            </main>
        </>
     );
}
 
export default Home;