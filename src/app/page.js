'use client'

import { useState, useRef, useEffect } from "react";

import Calculadora from "./Calculadora";

export default function Home() {

  const [dadosObtidos, setDadosObtidos] = useState ({
    conta:"",
    pessoa:"",
    gorjeta:""
  });

  const [dadosCalculados, setDadosCalculados] = useState({
    gorjetaCalculada: 0,
    total: 0,
    totalPorPessoa: 0
  });

  const zerar = () =>{
    let conta = "";
    let pessoa = "";
    let gorjeta = "";
    setDadosObtidos({conta, pessoa, gorjeta});
    setValidacao(false);
    setTentouCalcular(false);
  }

  const [mensagemErro, setMensagemErro] = useState(""); 

  const [validacao, setValidacao] = useState(false);

 const [tentouCalcular, setTentouCalcular] = useState(false); 


 useEffect(()=>{
  if(!validacao && tentouCalcular){
      setMensagemErro("Preencha corretamente!")
  } else{
    setMensagemErro("");
  }

 }, [validacao, tentouCalcular]) // chama sempre que validacao mudar o estado.
 
  const calcular = () =>{

    const dadosValidos =
    dadosObtidos.conta !=="" && parseFloat(dadosObtidos.conta)>=1 &&
    dadosObtidos.pessoa !=="" && parseFloat(dadosObtidos.pessoa)>=1 &&
    dadosObtidos.gorjeta !=="" && parseFloat(dadosObtidos.gorjeta)>=0;    
    
    if(dadosValidos)
    {
      const gorjetaCalculada = (parseFloat(dadosObtidos.conta) * parseFloat(dadosObtidos.gorjeta)) / 100;
      const total = parseFloat(dadosObtidos.conta) + gorjetaCalculada;
      const totalPorPessoa = total / parseFloat(dadosObtidos.pessoa);
      setDadosCalculados({gorjetaCalculada, total, totalPorPessoa})
    }

    setValidacao(dadosValidos);
    setTentouCalcular(true);
  }

  let saida = null;

  saida = 
  <div style={{width:'350px'}}>
    <table style={{borderSpacing: '0 10px'}}>
        <tr>
            <td>
                <label>Conta</label><br/>
                <input type="text" style={{width: '80px'}} 
                onChange={(event) =>
                  setDadosObtidos(prevState => ({...prevState, conta: event.target.value}))
                } value={dadosObtidos.conta}/>
            </td>
            <td>
                <label style={{ marginLeft: '10px' }}>Pessoa</label><br/>
                <input type="number" style={{width: '45px', marginLeft:'10px'}}  
                onChange={(event) =>
                  setDadosObtidos(prevState => ({...prevState, pessoa: event.target.value}))
                }value={dadosObtidos.pessoa}/> 
            </td>
        </tr>
        <tr style={{marginTop:'20px'}}>
            <td>
                <label>Gorjeta</label><br/>
                <input type="number" style={{width: '45px', appearance:'textfield'}}  
                onChange={(event) =>
                  setDadosObtidos(prevState => ({...prevState, gorjeta: event.target.value}))
                } value={dadosObtidos.gorjeta}/>
                <span style={{ marginLeft: '5px' }}>%</span>
            </td>
            <td>
                <button style={{backgroundColor:'white', width:'65px'}}
                onClick={()=>calcular()}>Calcular</button>
              

                <button style={{marginLeft: '10px', marginTop:'15px',width:'65px', backgroundColor:'white'}}
                onClick={()=>zerar()}>Zerar </button>
            </td>
        </tr>
    </table><hr/> 

    {/* {!validacao.valores ? <div>Preencha corretamente</div> : null} */}
    {mensagemErro && <div>{mensagemErro}</div>}
    {validacao ? <Calculadora dados={dadosCalculados}/>: null}
  </div>
  return saida;
}
