import { motion } from 'framer-motion'
import '../../../../styles/styles.css'



function Local(){
    return(
    <section className="local">
      <div className="local__alinhar">
        <motion.div
             initial={{  opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{
                 duration: 1,
                 ease: "easeInOut",
                 delay: 0.3,
                 type: "spring",
                 stiffness: 100,
                 damping: 10
             }}
        className="local__alinhar__content">
                <h2 className='title--big'>
                    Visite nossa loja, localizada no coração da cidade de <span className="text--gradient bold">São paulo</span>, 
                    no <span className="text--gradient bold">bairro são nicolau, rua igarapé n° 20 </span>
                    Estamos prontos para te atender.                         
                </h2>

                <span className="mobille local__alinhar__content__mobille">
                  <img src="/assets/images/GPS.jpg" alt="" />
                </span>

                <p className='text'>
                Estamos localizados no coração de São Paulo, no bairro São Nicolau, na Rua Igarapé, n° 20. A MYTEC tem mais de 4 anos de experiência no mercado, oferecendo consertos e vendas de aparelhos eletrônicos com qualidade e confiança. <br />

                Aqui, você encontrará uma ampla seleção de aparelhos novos e usados, todos avaliados e prontos para atender suas necessidades. Se o seu dispositivo está com problemas, nossa equipe de especialistas está pronta para diagnosticá-lo e realizar os reparos necessários de forma rápida e eficiente.


                </p>
        </motion.div>

        <div className="local__alinhar__imagem desktop">
            <img className='desktop' src="/assets/images/local.png" alt="" />
        </div>
      </div>
    </section>
    )
}


export default Local