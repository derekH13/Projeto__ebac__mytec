import '../../../../styles/styles.css'

type props = {
    imagem: string,
    title: string
}


function Admin__control({imagem, title}: props){
    return(
        <div className='admin__control'>
            <div className="admin__control__imagem">
            <img src={imagem} alt="" />
            </div>

            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Admin__control