import { FC, useContext } from "react"
import AuthContext from "../../contexts/AuthContext"

const NavBar: FC = () => {

    const {signed, markAsSigned, markAsNotSigned} = useContext(AuthContext)

    return (
        <div>
            { !signed && 
                <button onClick={markAsSigned}>Entrar</button>
            }
            { signed && 
                <button onClick={markAsNotSigned}>Sair</button>
            }
        </div>
    )
}

export default NavBar