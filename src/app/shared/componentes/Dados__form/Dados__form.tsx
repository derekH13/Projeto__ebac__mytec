const Dados__form = () => {
    return(
      <form>
        <h1 className="title">Endereço de entrega</h1>

            <div className="alinhar__input">
                <span>
                    <label htmlFor="">CEP</label>
                    <input required type="text" className="input--dark" />
                </span>

            <span>
                <label htmlFor="">Estado</label>
                <input required type="text" className="input--dark" />
            </span>

                <span>
                    <label htmlFor="">Cidade</label>
                    <input required type="text" className="input--dark" />
                </span>
            </div>

            <div className="alinhar__input2">
                <span>
                    <label htmlFor="">Cidade</label>
                    <input required type="text" className="input--dark" />
                </span>

                <span> 
                    <label htmlFor="">Cidade</label>
                    <input required type="text" className="input--dark" />
                </span>
            </div>
      </form>
    )
}

export default Dados__form