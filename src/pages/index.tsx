import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from './../components/Layout';
import Tabela from './../components/Tabela';


import useCleintes from './../hooks/useClientes';


export default function Home() {

  const { 
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    exibirTabela,
    tabelaVisivel
  } = useCleintes()


  return (

    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>

      <Layout titulo="Cadastro Simples">
        {/* colcoar um renderização opcional */}
        {tabelaVisivel ? (
          
        /* colocar o botão e tabela dentro de um fragmento <> </> */
        <>
        <div className='flex justify-end'>
          <Botao cor="green" className='mb-4'
            onClick={novoCliente}>
            Novo Cliente
          </Botao>
        </div>
          
          <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
        />
        </>

        ) : ( 
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}
