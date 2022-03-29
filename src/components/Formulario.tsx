import Entrada from './Entrada';
import { useState } from 'react';
import Cliente from './../core/Cliente';
import Botao from './Botao';

interface FormularioProps {
    /* Formulário receberá um cliente */
    cliente: Cliente

}

export default function Formulario(props: FormularioProps) {
    /* Se cliente tiver setado id...  */
    const id = props.cliente?.id 
    /* Definir 2 estdos para controlar  - useState() vai receber a partir do cliente
    se não tiver cliente não acessará o nome e como valor padrão colocar uma string 
    vazia '' */
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    /* se não tiver cliente não acessará a idade e como valor padrão colocar 0 */
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {/* Se o id estiver setado ele irá renderizar a entrada*/}
            {id ? (
                <Entrada
                    somenteLeitura 
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
                /* caso não estaja setado  ele retornará falso */
            ) : false}
            
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />

            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade} className={''}            />

            <div className='flex justify-end mt-7'>
                <Botao cor='blue' className='mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}