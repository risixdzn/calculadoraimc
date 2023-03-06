import Head from 'next/head'
import { useState , useEffect } from 'react'

import { GiWeight } from 'react-icons/gi'

function Home() {
  const [ peso, setPeso ] = useState("");
  const [ altura, setAltura ] = useState("");   
  const [ estadoPeso , setEstadoPeso] = useState("");
  var [ showImc, setShowImc ] = useState(0);
 
  //const delay = (ms: number) => new Promise(res => setTimeout(res, ms)); 

  async function calculaImc(event: { preventDefault: () => void; }){
    event.preventDefault();

    var imc = 0
    setShowImc(0);
    setEstadoPeso("");

    //alert(peso + " " + altura);
  
    var pesoFormat = parseInt(peso);
    var alturaFormat = parseInt(altura)/100;   
       
    //alert(pesoFormat + " " + alturaFormat); 
    
    
    imc = ( pesoFormat / ( alturaFormat * alturaFormat));
    //await delay(1000);
    //alert(imc);        
    pesoFormat = 0;    
    alturaFormat= 0;     
    verificaIMC(imc); 
    setShowImc(imc);
    resetData();
  }   

  function resetData (){    
    setPeso("")
    setAltura("")
  }

  function verificaIMC (imc: number){       
    switch (true) {
      case imc <18.5:
        setEstadoPeso('Você está abaixo do peso.')
        break;
      case imc >=18.6 && imc <=24.9:
        setEstadoPeso("Você tem o peso ideal!")  
        break;  
      case imc >=25.0 && imc <=29.9:
        setEstadoPeso("Você está levemente acima do peso.")  
        break;  
      case imc >=30.0 && imc <=34.9:
        setEstadoPeso("Você tem obesidade grau I.")  
        break;  
      case imc >=35.0 && imc <=39.9:
        setEstadoPeso("Você tem obesidade grau II (severa).") 
        break;   
      case imc >=40.0:
        setEstadoPeso("Você tem obesidade grau III (morbida).")  
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center content-center h-screen w-screen'>
        <h1 className='text-2xl font-semibold mt-5'>Calculadora de IMC</h1>
        <form className='flex flex-col' onSubmit={calculaImc}>      
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-neutral-100">
              Peso
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><GiWeight/></span>
              </div>
              <input
                type="text"                    
                className="-mt-2 block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-neutral-300 ring-1 ring-neutral-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={63+"kg"}
                onChange={(e)=> setPeso(e.target.value)} value={peso}
                required={true}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">                
                <h1 className='text-gray-400 bg-neutral-600 w-12 text-center py-2 rounded-r-lg ring-2 ring-neutral-600 ring-inset'>kg </h1>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-neutral-100">
              Altura
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><GiWeight/></span>
              </div>
              <input
                type="text123"                    
                className="-mt-2 block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-neutral-300 ring-1 ring-neutral-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={175+"cm"}
                onChange={(e)=> setAltura(e.target.value)} value={altura}
                required={true}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <h1 className='text-gray-400 bg-neutral-600 w-12 text-center py-2 rounded-r-lg ring-2 ring-neutral-600 ring-inset'>cm</h1>
              </div>
            </div>
          </div>
         
          <button type='submit' className='bg-gradient-to-b from-sky-600 to-blue-600 rounded-lg px-5 py-2 mt-4 font-semibold text-lg hover:from-sky-400 hover:to-blue-500'>Calcular IMC</button>
        </form>
        
        <h1 className={showImc == 0 || isNaN(showImc) ? "block mt-5 text-neutral-200" : "hidden"}>Preencha os campos acima.</h1>
        <h2 className={showImc == 0 || isNaN(showImc) ? "hidden" : "block mt-5 text-lg"}>Seu imc é: {showImc.toFixed(2)}</h2>
        <h2 className='text-lg font-semibold'>{estadoPeso}</h2>
      </div>      
    </div>
  )
}


export default Home;