import { FormEvent, useRef, useState } from "react"
import { DadosEndereco } from "../../../Util/Util"
import Alert, { propsAlert } from "../Alert/Alert"


const Dados__form = () => {
    const dadosCep = useRef(0)
    const dadosEstado = useRef('')
    const dadosCidade = useRef('')
    const dadosBairro = useRef('')
    const dadosNumero = useRef(0)
    const [mostrarAlert, setMostrarAlert] = useState(false)
    const infoAlert = useRef<propsAlert>({text: 'teste', titulo: 'erro'})

    function mandarEndereco(e: FormEvent){
        e.preventDefault()

        if(dadosCep.current, dadosEstado.current, dadosCidade.current, dadosBairro.current, dadosNumero.current){
            const newEndereco = new DadosEndereco(
                dadosCep.current,
                dadosEstado.current,
                dadosCidade.current,
                dadosBairro.current,
                dadosNumero.current
            )
    
            localStorage.setItem('Endereco', JSON.stringify(newEndereco))

            setMostrarAlert(true)
            infoAlert.current = {text: 'Endereço salvo com sucesso', titulo: 'sucesso'}

            setInterval(() => {
                setMostrarAlert(false)
            },  4490)

        }else {

            setMostrarAlert(true)
            infoAlert.current = {text: 'Erro ao salvar o endereço', titulo: 'erro'}

            setInterval(() => {
                setMostrarAlert(false)
            },  4490)
        }


    }

    return(
    <>
    <form onSubmit={(e) => mandarEndereco(e)}>
        <h1 className="title">Endereço de entrega</h1>

            <div className="alinhar__input">
                <span>
                    <label htmlFor="">CEP</label>
                    <input required type="number" onChange={(e) => dadosCep.current = parseInt(e.target.value)} className="input--dark" />
                </span>

            <span>
                <label htmlFor="">Estado</label>
                <input required type="text" onChange={(e) => dadosEstado.current = e.target.value}  className="input--dark" />
            </span>

                <span>
                    <label htmlFor="">Cidade</label>
                    <input required type="text" onChange={(e) => dadosCidade.current = e.target.value}  className="input--dark" />
                </span>
            </div>

            <div className="alinhar__input2">
                <span>
                    <label htmlFor="">Bairro</label>
                    <input required type="text" onChange={(e) => dadosBairro.current = e.target.value}  className="input--dark" />
                </span>

                <span> 
                    <label htmlFor="">Numero</label>
                    <input required type="number" onChange={(e) => dadosNumero.current = parseInt(e.target.value)}  className="input--dark" />
                </span>
            </div>

            <div className="button__endereco">

            <button type="submit" className="button button--gradiente  mt-5">Salvar</button>
            </div>

      </form>

     

      {
        mostrarAlert ? (
            <Alert key={infoAlert.current.text} titulo={infoAlert.current.titulo} text={infoAlert.current.text} />
        )
        : ''
      }
    </>
    )
}

export default Dados__form