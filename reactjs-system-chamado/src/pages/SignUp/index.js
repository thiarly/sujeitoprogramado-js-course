import { useState, useContext } from 'react'
import './signup.css'

import logo from '../../assets/intergard.png'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'



export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signUp, loadingAuth} = useContext(AuthContext)

   async function handleSubmit(e){
        e.preventDefault()
        if (name !== '' && email !== '' && password !== ''){
         await signUp(email, password, name)
        }
    }

    return (
        <div className='container-center'>
           <div className='login'>
            <div className='login-area'>
                <img src={logo} alt='Logo da Intergard do Brasil' />
            </div>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>
                    {loadingAuth ? 'Carregando...' : 'Cadastrar'}
                </button>
            </form>
            <Link to="/">Já possuo uma conta!</Link>

           </div>
        </div>
    )
}