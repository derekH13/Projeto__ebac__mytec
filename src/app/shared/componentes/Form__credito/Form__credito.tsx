import { FormEvent, useRef, useState, useEffect } from "react";
import { cartaoCredito } from "../../../Util/Util";
import Alert, { propsAlert } from "../Alert/Alert";



const Form__credito = () => {
    const nomeTitular = useRef('');
    const cpf = useRef(0);
    const nomeCartao = useRef('');
    const numeroCartao = useRef(0);
    const cvv = useRef(0);
    const mesVencimento = useRef('');
    const anoVencimento = useRef('');
    const [mAlert, setMAlert] = useState<boolean>(false);
    const infoAlert = useRef<propsAlert>({ text: 'teste', titulo: 'erro' });

    function salvarCartao(e: FormEvent) {
        e.preventDefault();

        // Verifica se todos os campos têm valor
        if (nomeTitular.current &&
            cpf.current &&
            nomeCartao.current &&
            numeroCartao.current &&
            cvv.current &&
            mesVencimento.current &&
            anoVencimento.current) {

            const newCartao = new cartaoCredito(
                nomeTitular.current,
                cpf.current,
                nomeCartao.current,
                numeroCartao.current,
                cvv.current,
                mesVencimento.current,
                anoVencimento.current
            );

            localStorage.setItem('cartaoCredito', JSON.stringify(newCartao));

            infoAlert.current = { text: 'Cartão salvo com sucesso', titulo: 'sucesso' };
            setMAlert(true);

            setTimeout(() => {
                setMAlert(false);
            }, 4490);

        } else {
            infoAlert.current = { text: 'Erro ao salvar os dados do cartão', titulo: 'erro' };
            setMAlert(true);

            setTimeout(() => {
                setMAlert(false);
            }, 4490);
        }
    }

    useEffect(() => {
        console.log(mAlert);
    }, [mAlert]);

    console.log(mAlert);
    

    return (
        <>
            <form onSubmit={(e) => salvarCartao(e)}>

           
          
            {mAlert === true ? (
                    <Alert key={infoAlert.current.text} titulo={infoAlert.current.titulo} text={infoAlert.current.text} />
                ) : ''}

                <div className="alinhar__input1">
                    <span>
                        <label htmlFor="">Nome do titular do cartão</label>
                        <input required type="text" onChange={(e) => nomeTitular.current = e.target.value} className="input--dark" />
                    </span>

                    <span>
                        <label htmlFor="">CPF do titular do cartão</label>
                        <input required type="text" onChange={(e) => cpf.current = parseInt(e.target.value)} className="input--dark" />
                    </span>

                    <span>
                        <label htmlFor="">Nome no cartão</label>
                        <input required type="text" onChange={(e) => nomeCartao.current = e.target.value} className="input--dark" />
                    </span>
                </div>

                <div className="alinhar__input3">
                    <span>
                        <label htmlFor="">Número do cartão</label>
                        <input required type="text" onChange={(e) => numeroCartao.current = parseInt(e.target.value)} className="input--dark" />
                    </span>

                    <span>
                        <label htmlFor="">CVV</label>
                        <input required type="text" onChange={(e) => cvv.current = parseInt(e.target.value)} className="input--dark" />
                    </span>

                    <span>
                        <label htmlFor="">Mês do vencimento</label>
                        <input required type="text" onChange={(e) => mesVencimento.current = e.target.value} className="input--dark" />
                    </span>

                    <span>
                        <label htmlFor="">Ano do vencimento</label>
                        <input required type="text" onChange={(e) => anoVencimento.current = e.target.value} className="input--dark" />
                    </span>
                </div>

                <div className="alinhar__input2">
                    <div className="button__endereco mt-5">
                        <button className="button button--gradiente">Salvar</button>
                    </div>
                </div>

                

            </form>

        </>
    );
}

export default Form__credito;
