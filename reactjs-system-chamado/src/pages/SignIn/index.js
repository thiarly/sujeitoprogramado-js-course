import { useState, useContext } from 'react'
import './signin.css'


import logo from '../../assets/intergard.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleSignIn(e){
        e.preventDefault();

        if (email !== '' && password !== ''){
          await signIn(email, password);
        }
    }


    return (
        <div className='container-center'>
           <div className='login'>
            <div className='login-area'>
                <img src={logo} alt='Logo da Intergard do Brasil' />
            </div>
            <form onSubmit={handleSignIn}>
                <h1>Entrar</h1>
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
                    {loadingAuth ? 'Carregando...' : 'Acessar'}
                </button>
            </form>
            <Link to="/register">Criar uma conta</Link>

           </div>
        </div>
    )
}

