import './modal.css'
import { FiX } from 'react-icons/fi'


export default function Modal(){
    return(
        <div className='modal'>
            <div className='container'>
                <button className='close'>
                    <FiX size={25} color='#FFF' />
                    Voltar
                </button>

                <main>
                    <h2>Detalhes do chamado</h2>
                    <div className='row'>
                        <span>
                            Cliente: <i>Mercado</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Assunto: <i>Suporte</i>
                        </span>
                        <span>
                            Cadastrado: <i>10/10/2020</i>
                        </span>
                    </div>
                    <div className='row'>
                        <span>
                            Status: <i>Aberto</i>
                        </span>
                    </div>
                    <>
                        <h3>Complemento</h3>
                        <p>
                        Todo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamadoTodo complemento do chamado
                        </p>
                    </>
                </main>
            </div>
        </div>
    )
}

