import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Custumer = (props) => {
    const membersId = useParams()

    const member = props.members.find(element => element.id === membersId.id)

    return <div>
        <h1>Detalhes do cliente</h1>
    
        <p>
        Nome: {member && member.name}
        </p>
    
        <Link to="/">
          Voltar
         </Link>
  </div>
}

export default Custumer;