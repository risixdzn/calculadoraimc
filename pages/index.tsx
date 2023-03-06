import Head from 'next/head'
import { useState , useEffect } from 'react'

function Home() {
  const [ peso, setPeso ] = useState("");
  const [ altura, setAltura ] = useState(""); 
  const [ imc , setImc] = useState(0);
  const [ estadoPeso , setEstadoPeso] = useState("");

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  useEffect(()=>{
    const calculaImc = async (event: { preventDefault: () => void; })=>{
      event.preventDefault();
  
      alert(peso + " " + altura);
  
      var pesoFormat = parseInt(peso);
      var alturaFormat = parseInt(altura)/100;   
       
      alert(pesoFormat + " " + alturaFormat);
  
      
      setImc( pesoFormat / ( alturaFormat * alturaFormat));   
      await delay(1000);
      alert(imc);        
  
      pesoFormat = 0;
      alturaFormat= 0;     
      verificaIMC(imc); 
    }   
  },[imc]);

  function verificaIMC (imc: number){       
    switch (true) {
      case imc <18.5:
        alert('Você está abaixo do peso.')
        break;
      case imc >=18.6 && imc <=24.9:
        alert("Você tem o peso ideal!")  
        break;  
      case imc >=25.0 && imc <=29.9:
        alert("Você está levemente acima do peso.")  
        break;  
      case imc >=30.0 && imc <=34.9:
        alert("Você tem obesidade grau I.")  
        break;  
      case imc >=35.0 && imc <=39.9:
        alert("Você tem obesidade grau II (severa).") 
        break;   
      case imc >=40.0:
        alert("Você tem obesidade grau III (morbida).")  
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center content-center h-screen w-screen'>
        <h1>Calculadora de IMC</h1>
        <form className='flex flex-col' onSubmit={calculaImc}>
          <input className='w-52 text-center' required={true} placeholder='Peso'
            onChange={(e)=> setPeso(e.target.value)} value={peso}
          ></input>
          <input className='w-52 mt-2 text-center' required={true} placeholder='Altura'
            onChange={(e)=> setAltura(e.target.value)} value={altura}
          ></input>
          <button type='submit' className='bg-blue-900 px-5 py-2 mt-4'>Calcular IMC</button>
        </form>
        

        <h2>{imc == 0 || isNaN(imc) ? "Preencha os campos acima!" : "Seu imc é: " + imc.toFixed(2)}</h2>
        <h2>{estadoPeso}</h2>
      </div>      
    </div>
  )
}


export default Home;