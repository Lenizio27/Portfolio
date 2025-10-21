//-------- Card Tecnologias Hero --------

export const CardHero = ({text}) => {
    return (
        <>
            <div className="border-b5 border-1 px-1 inline mx-[2px] rounded-md hover:bg-b5 transition">
                {text}
            </div>
        </>
    )
}

//-------- Card Meus Servicos --------

export const CardService = ({icon, title, text}) => {
    return ( 
        <>
            <div className="bg-b3 h-[100px] flex flex-col items-center justify-center basis-[400px] grow-1 rounded-md border-1 hover:text-b5 hover:bg-w1 transition-[1s]">
                <div class={icon}></div>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>
     );
}


//-------- Card Meus Projetos --------

export const CardProjetos = ({image, title, text}) => {
    return (
        <>
            <div 
            className="h-[250px] relative rounded-[20px] flex border  basis-[350px] grow-1" 
             >
                <div className="flex items-center justify-center flex-7   ">
                    <img src={image} alt="" className=" h-full shadow-2xl rounded-[20px]"/>
                </div>
                <div className="p-3  text-[16px] flex-6 bg-b ">
                    <h3 className="text-b5">{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}