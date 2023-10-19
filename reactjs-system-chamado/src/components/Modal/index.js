import './modal.css'
import { FiX } from 'react-icons/fi'


    // Mapeando cores de status
    const statusColors ={
        "Aberto": '#ff5232',
        "Progresso": "#999",
        "Atendido": "#5cb85c",
    }


export default function Modal({ conteudo, close }){
    return(
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    <FiX size={25} color='#FFF' />
                    Voltar
                </button>

                <main>
                    <h2>Detalhes do chamado</h2>
                    <div className='row'>
                        <span>
                            Cliente: <i>{conteudo.cliente}</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Assunto: <i>{conteudo.assunto}</i>
                        </span>
                        <span>
                            Cadastrado: <i>{conteudo.createdFormated}</i>
                        </span>
                    </div>
                    <div className='row'>
                        <span>
                            Status: 
                            <i className='status-badge' style={{ 
                                backgroundColor: statusColors[conteudo.status] || statusColors['default'],
                            }}>
                                {conteudo.status}
                            </i>
                        </span>
                    </div>
                    {conteudo.complemento !== '' && (
                        <>
                        <h3>Complemento</h3>
                        <p>
                        {conteudo.complemento}
                        </p>
                    </>
                )}
                </main>
            </div>
        </div>
    )
}


