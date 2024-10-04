import { motion } from 'framer-motion'
import '../../../../styles/styles.css'
import Produtos__destaque from '../Produtos__destaque/Produtos__destaque'


function Caroussel_destaque(){
    return(
<motion.div
initial={{opacity: 0, scale: 0.98}}
animate={{opacity: 1, scale: 1}}
transition={{
  duration: 1,
  ease: "easeInOut",
  delay: 0.3,
  type: "spring",

}}

id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">

      <Produtos__destaque  categoria='console'/>

    </div>
    <div className="carousel-item">

      <Produtos__destaque categoria='fone'/>

    </div>
    <div className="carousel-item">

      <Produtos__destaque categoria='celular'/>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</motion.div>
    )
}

export default Caroussel_destaque