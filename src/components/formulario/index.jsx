import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA,setMateriaA] = useState(0);
    const [materiaB,setMateriaB] = useState(0);
    const [materiaC,setMateriaC] = useState(0);


    useEffect(() => {
        console.log("O componente iniciou");

        return() => {
            console.log("componente finalizado");
        }
    },[]);

    useEffect(() => {
        console.log('O materiaA mudou para: ' + materiaA)
        console.log('O materiaB mudou para: ' + materiaB)
        console.log('O materiaC mudou para: ' + materiaC)
    },[materiaA,materiaB,materiaC]);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return(
                <p>Você foi aprovado!</p>
            )
        }else{
            return(
                <p>Reprovado!</p>
            )
        }
    } 

    return(
        <form>

            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="number" max={10} placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}></input>
            <input type="number" max={10} placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}></input>
            <input type="number" max={10} placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}></input>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario