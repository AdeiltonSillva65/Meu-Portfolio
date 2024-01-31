const menu = () => {
    return (
        <div className=" p-10 pt-0 pb-0 w-screen h-16 border-b-2 border-gray-800 bg-slate-900">
            <div className="h-16 text-white flex justify-between content-center">
                <div className="w-24 h-16 flex items-center justify-center text-orange-600 font-extralight">Adeilton</div>
                <div>
                    <ul className="h-16 w-[900px] flex justify-around items-center font-extralight">
                        <li className="hover:border-b-2 ">Sobre</li>
                        <li className="hover:border-b-2">Qualificações</li>
                        <li className="hover:border-b-2 ">Tecnologias</li>
                        <li className="hover:border-b-2 ">Projetos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default menu;