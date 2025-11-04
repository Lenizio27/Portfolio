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
            <div 
                className="bg-b3 h-[100px] flex flex-col items-center justify-center basis-[400px] grow-1 rounded-md border-1 hover:text-b5 hover:bg-w1 transition-[1s] text-center"
            >
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

export const CardProjetos = ({image, title, text, link}) => {
    return (
        <>
            <div 
            className="h-[250px] relative rounded-[20px] flex border  basis-[350px] grow-1" 
             >
                <div className="flex items-center justify-center flex-7   ">
                    <img src={image} alt="" className=" h-full shadow-2xl rounded-[20px]"/>
                </div>
                <div className="p-3 text-[16px] flex-6 bg-b flex flex-col">

                    <div>
                        <h3 className="text-b5">{title}</h3>
                        <p>{text}</p>
                    </div>

                    <div className="flex flex-col justify-center h-[100%] items-center ">
                            <a 
                            href={link}
                            target="_blank" 
                            className="w-full"
                            >
                                <button className="w-full h-10 bg-b4 rounded-md hover:bg-b2 transition active:border-1">Verificar</button>
                            </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

//-------- Card SobreMim --------

export const CardSobre = ({title, institute, sobre}) => {
    return (
        <>
            <div className="xpBox bg-p1 BoxEx w-full p-2 rounded-md border border-b4 grow-1 m-2 flex flex-col justify-around">
                <h4 className="text-[20px]">{title}</h4>
                <h5 className="text-[17px]">{institute}</h5>
                <p className="text-[12px]">{sobre}</p>
            </div>
        </>
    )
}