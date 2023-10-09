import { useState } from 'react'
import './signup.css'

import logo from '../../assets/intergard.png'
import { Link } from 'react-router-dom'


export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className='container-center'>
           <div className='login'>
            <div className='login-area'>
                <img src={logo} alt='Logo da Intergard do Brasil' />
            </div>
            <form>
                <h1>Criar Cadastrar</h1>

                <input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    value={name} onChange={(e) => setName(e.target.value)} 
                    />

                <input 
                    type="text" 
                    placeholder='Digite seu e-mail' 
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                    />

                <input 
                    type="password" 
                    placeholder='********'
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                    />

                <button type='submit'>Cadastrar</button>
            </form>
            <Link to="/">Já possuo uma conta!</Link>

           </div>
        </div>
    )
}