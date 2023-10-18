import { useState } from 'react'

import Header from '../../components/Header'
import Title from '../../components/Title'

import './new.css'

import { FiPlusCircle } from 'react-icons/fi'


export default function New() {

    const [customers, setCustomers] = useState([])

    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    function handleOptionChange(e){
        setStatus(e.target.value);

    }

    return (
      <div>
        <Header />
        <div className="content">
            <Title name="Novo Chamado">
                <FiPlusCircle size={25} />
            </Title>

            <div className="container">
                <form>
                    <label>Cliente</label>
                    <select>
                        <option key={1} value={1}>Fulano de Tal</option>
                        <option key={2} value={2}>Ciclano de Tal</option>
                    </select>

                    <label>Assunto</label>
                    <select>
                        <option value="Suporte">Música Rádio</option>
                        <option value="Contas">E-mail</option>
                        <option value="Contas">Computadores</option>
                        <option value="Contas">Atualização</option>
                        <option value="Contas">Telefone</option>
                        <option value="Contas">Contas Vivo</option>
                    </select>

                    <label>Status</label>
                    <div className='status'>
                    
                        <input 
                        type="radio" 
                        name="radio" 
                        value="Aberto" 
                        onChange={handleOptionChange}
                        checked={status === 'Aberto'}
                        />
                        <span>Aberto</span>

                        <input 
                        type="radio"
                        name="radio"
                        value="Progresso"
                        onChange={handleOptionChange}
                        checked={status === 'Progresso'}
                        />
                        <span>Progresso</span>

                        <input 
                        type="radio" 
                        name="radio" 
                        value="Atendido"
                        onChange={handleOptionChange}
                        checked={status === 'Atendido'}
                        />
                        <span>Atendido</span>
                    
                    </div>
                    

                        <label>Complemento</label>
                        <textarea 
                        type="text" 
                        placeholder="Descreva seu problema (opcional)"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        />

                    <button type="submit">Registrar</button>
            
                </form>
            </div>
        </div>
      </div>
    )
}