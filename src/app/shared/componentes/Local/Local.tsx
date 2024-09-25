import '../../../../styles/styles.css'


function Local(){
    return(
    <section className="local">
      <div className="local__alinhar">
        <div className="local__alinhar__content">
                <h2 className='title--big'>
                    Visite nossa loja, localizada no coração da cidade de <span className="text--gradient bold">São paulo</span>, 
                    no <span className="text--gradient bold">bairro são nicolau, rua igarapé n° 20 </span>
                    Estamos prontos para te atender.                         
                </h2>
                <p className='text'>
                Estamos localizados no coração de São Paulo, no bairro São Nicolau, na Rua Igarapé, n° 20. A MYTEC tem mais de 4 anos de experiência no mercado, oferecendo consertos e vendas de aparelhos eletrônicos com qualidade e confiança. <br />

                Aqui, você encontrará uma ampla seleção de aparelhos novos e usados, todos avaliados e prontos para atender suas necessidades. Se o seu dispositivo está com problemas, nossa equipe de especialistas está pronta para diagnosticá-lo e realizar os reparos necessários de forma rápida e eficiente.


                </p>
        </div>

        <div className="local__alinhar__imagem">
            <img src="/assets/images/local.png" alt="" />
        </div>
      </div>
    </section>
    )
}


export default Local