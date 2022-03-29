import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from './../components/Layout';
import Tabela from './../components/Tabela';
import Cliente from './../core/Cliente';
import { useState } from 'react';


export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 40, '2'),
    new Cliente('Carlos', 28, '3'),
    new Cliente('Roberto', 45, '4'),
  ]


function clienteSelecionado(cliente: Cliente) {
  setCliente(cliente)
  setVisivel('form')
}
function clienteExcluido(cliente: Cliente) {
  console.log(`Excluir...${cliente.nome}`)
}

function novoCliente(){
  setCliente(Cliente.vazio())
  setVisivel('form')
}

function salvarCliente(cliente: Cliente){
  console.log(cliente)
  setVisivel('tabela')
}

/* Criar um estado - definir um useStade com dois possíveis estados
e como padrão iniciara como tabela */


  return (

    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>

      <Layout titulo="Cadastro Simples">
        {/* colcoar um renderização opcional */}
        {visivel === 'tabela' ? (
          
        /* colocar o botão e tabela dentro de um fragmento <> </> */
        <>
        <div className='flex justify-end'>
          <Botao cor="green" className='mb-4'
            onClick={novoCliente}>
            Novo Cliente
          </Botao>
        </div>
          
          <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
        />
        </>

        ) : ( 
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}
