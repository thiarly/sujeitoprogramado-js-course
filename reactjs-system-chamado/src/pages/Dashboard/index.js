import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";

import { Link } from "react-router-dom";

import './dashboard.css'



export default function Dashboard() {
    const { logout } = useContext(AuthContext);

   async function handleLogout() {
       await logout();
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>
                
                <>           
                    <Link to="/new" className="new">  
                        <FiPlus color="#FFF" size={25}/>
                        Novo Ticket
                    </Link>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>    
                                <th scope="col">Assunto</th>    
                                <th scope="col">Status</th>    
                                <th scope="col">Cadastrado</th>    
                                <th scope="col">#</th>    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Cliente">Thiarly TC</td>
                                <td data-label="Assunto">Vamos programar 1</td>
                                <td data-label="Status">Em progresso</td>
                                <td data-label="Cadastrador">30/10/2023</td>
                                <td data-label="#">
                                    <button className="action" style={{ backgroundColor: "#3583f6"}}>
                                        <FiSearch color='#FFF' size={17} />
                                    </button>

                                    <button className="action" style={{ backgroundColor: "#f6a935"}}>
                                        <FiEdit2 color='#FFF' size={17} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            </div>    
        </div>
    )
}