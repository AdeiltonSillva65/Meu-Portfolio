import Image from "next/image";
import Eu from '../../public/portifolio.png'
const sobre = () => {
    return (
        <div className=" m-16 h-4/5 bg-slate-900 flex   ">
            <div className=" w-2/4 h-ful flex justify-center items-center">
                <Image
                    src={Eu}
                    width={500}
                    height={500}
                    alt={""}
                />
            </div>

            <div className="text-white flex-col text-justify w-2/4">
                <p className="pt-16">Sobre</p>
                <h1>Adeilton Francisco da Silva</h1>
                <p>Desenvolvedor Front-End</p>
                <p>Ola eu sou um Desenvolvedor band emd </p>
                <button className="border">Dowloand CV</button>

            </div>
        </div>
    );
}

export default sobre;