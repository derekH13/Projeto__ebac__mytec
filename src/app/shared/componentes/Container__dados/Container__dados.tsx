import '../../../../styles/styles.css'

type props = {
    children: React.ReactNode
}

const Container__dados = ({children}: props) => {
    return(
        <div className="interface">
            <div className='Container__dados'>
                {children}
            </div>
        </div>
    )
}

export default Container__dados