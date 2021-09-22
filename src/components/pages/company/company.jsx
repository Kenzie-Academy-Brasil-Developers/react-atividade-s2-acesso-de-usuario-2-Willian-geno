import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Company = (props) => {
    const menbersId = useParams()

    const member = props.members.find(element => element.id === menbersId.id)
    
    return <div>
        <h1>Detalhes da Empresa</h1>

        <p>
        Nome da empresa: {member && member.name}
        </p>
    
        <Link to="/">
            Voltar  
        </Link>
    </div> 
}

export default Company;