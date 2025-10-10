const CardService = ({icon, title, text}) => {
    return ( 
        <>
            <div className="bg-b3 h-[100px] flex flex-col items-center justify-center basis-[400px] grow-1 rounded-md border-1 hover:text-b5 hover:bg-w1 transition-[1s] ">
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
 
export default CardService;