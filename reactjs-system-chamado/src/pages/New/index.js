
import { useState, useEffect, useContext  } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle} from 'react-icons/fi'

import {AuthContext} from '../../contexts/auth'
import { db } from '../../services/firebaseConnection'
import {collection, getDocs, getDoc, doc, addDoc, updateDoc} from 'firebase/firestore'

import { useParams, useNavigate } from 'react-router-dom'

import './new.css';

import { toast } from 'react-toastify'
import { set } from 'date-fns'

const listRef = collection(db, "customers");

export default function New(){
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([])
  const [loadCustomer, setLoadCustomer] = useState(true);
  const [customerSelected, setCustomerSelected] = useState(0)

  const [complemento, setComplemento] = useState('')
  const [assunto, setAssunto] = useState('Suporte')
  const [status, setStatus] = useState('Aberto')
  const [idCustomer, setIdCustomer] = useState(false)

  useEffect(() => {
    async function loadCustomers(){
        try {
            const querySnapshot = await getDocs(listRef);
            let lista = [];

            querySnapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nomeFantasia: doc.data().nome
                });
            });

            if (lista.length === 0) {
                console.log("NENHUMA EMPRESA ENCONTRADA");
                setCustomers([{ id: '1', nomeFantasia: 'FREELA' }]);
            } else {
                setCustomers(lista);
                console.log("EMPRESAS ENCONTRADAS", lista);
            }
            
            setLoadCustomer(false);

            if(id){
                loadId(lista);
            }

        } catch (error) {
            console.log("ERRO AO BUSCAR OS CLIENTES", error);
            setLoadCustomer(false);
            setCustomers([{ id: '1', nomeFantasia: 'FREELA' }]);
        }
    }
    loadCustomers();    
}, [id]);

async function loadId(lista){
    const docRef = doc(db, "chamados", id);
    await getDoc(docRef)
    .then ( (snapshot) => {
      setAssunto(snapshot.data().assunto);
      setStatus(snapshot.data().status);
      setComplemento(snapshot.data().complemento);
      
      let index = lista.findIndex(item => item.id === snapshot.data().clienteId);
      setCustomerSelected(index);
      setIdCustomer(true);

    })
    .catch( (error) => {
      console.log('ERRO AO BUSCAR ID', error);
      setIdCustomer(false);
    })

}


  function handleOptionChange(e){
    setStatus(e.target.value);
  }

  function handleChangeSelect(e){
    setAssunto(e.target.value)
  }

  function handleChangeCustomer(e){
    console.log('Selected index:', e.target.value);
    setCustomerSelected(e.target.value);
    console.log(customers[e.target.value]?.nomeFantasia); // Note o uso de ?. para evitar erros caso o valor seja undefined
}

async function handleRegister(e){
    e.preventDefault();

    if (idCustomer) {
        //Atualizando chamado
        const docRef = doc(db, "chamados", id);
        await updateDoc(docRef, {
            cliente: customers[customerSelected]?.nomeFantasia,
            clienteId: customers[customerSelected]?.id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then( () => {
            toast.info('Chamado editado com sucesso!');
            setComplemento('');
            setCustomerSelected(0);
            setIdCustomer(false);
            navigate('/dashboard');
        })
        .catch( (error) => {
            toast.error('Erro ao editar chamado!');
            console.log(error);
        })

        return;
    }

    //registrar chamado
    await addDoc(collection(db, 'chamados'), {
        created: new Date(),
        cliente: customers[customerSelected]?.nomeFantasia,
        clienteId: customers[customerSelected]?.id,
        assunto: assunto,
        status: status,
        complemento: complemento,
        userId: user.uid
    })
    .then( () => {
        toast.success('Chamado registrado com sucesso!');
        setComplemento('');
        setCustomerSelected(0);
    })
    .catch( (error) => {
        toast.error('Erro ao registrar chamado!');
        console.log(error);
    })
    
}
  return(
    <div>
      <Header/>

      <div className="content">
        <Title name={id ? "Editando Chamado" : "Novo Chamado"}>
          <FiPlusCircle size={25}/>
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>

            <label>Clientes</label>
            {
              loadCustomer ? (
                <input type="text" disabled={true} value="Carregando..." />
              ) : (
                <select value={customerSelected} onChange={handleChangeCustomer}>
                  {customers.map((item, index) => {
                    return(
                      <option key={index} value={index}>
                        {item.nomeFantasia}
                      </option>
                    )
                  })}
                </select>
              )
            }

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={ status === 'Aberto' }
              />
              <span>Em aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={ status === 'Progresso' }
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={ status === 'Atendido' }
              />
              <span>Atendido</span>
            </div>


            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
              value={complemento}
              onChange={ (e) => setComplemento(e.target.value) }
            />

            <button type="submit">Registrar</button>

          </form>
        </div>
      </div>
    </div>
  )
}