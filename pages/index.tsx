import Head from 'next/head'
import { useState , useEffect } from 'react'

import { GiWeight } from 'react-icons/gi'
import { AiFillGithub } from 'react-icons/ai'

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
        setEstadoPeso("Você tem obesidade grau III (mórbida).")  
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center content-center h-screen w-screen px-2 py-10'>
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
        <div className='my-5 text-center'>
          <h1 className={showImc == 0 || isNaN(showImc) ? "block mt-5 text-neutral-200" : "hidden"}>Preencha os campos acima.</h1>
          <h2 className={showImc == 0 || isNaN(showImc) ? "hidden" : "block mt-5 text-lg"}>Seu imc é: {showImc.toFixed(2)}</h2>
          <h2 className='text-lg font-semibold'>{estadoPeso}</h2>
        </div>
        

        <table className="table-auto bg-neutral-800 rounded-xl mt-5">
          <thead>
            <tr>
              <th colSpan={2} className='py-2 bg-neutral-500 rounded-t-xl text-lg font-semibold'>Tabela de IMC</th>
            </tr>
            <tr>              
              <th className='py-2 bg-neutral-600 font-semibold'>Valor</th>
              <th className='py-2 bg-neutral-600 font-semibold'>Estado</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center'>Menor que 18,5</td>
              <td className='text-center'>Abaixo do peso.</td>              
            </tr>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center'>Entre 18,6 e 24,9</td>
              <td className='text-center px-4'>Peso normal.</td>              
            </tr>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center'>Entre 25,0 e 29,9</td>
              <td className='text-center px-4'>Levemente acima do peso.</td>              
            </tr>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center'>Entre 30,0 e 34,9</td>
              <td className='text-center px-4'>Obesidade grau I</td>              
            </tr>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center'>Entre 35,0 e 39,9</td>
              <td className='text-center px-4'>Obesidade grau II (severa)</td>              
            </tr>
            <tr>
              <td className='px-8 py-1 bg-neutral-700 text-center rounded-bl-xl'>Maior que 40,0</td>
              <td className='text-center px-4'>Obesidade grau III (morbida)</td>              
            </tr>
          </tbody>
        </table>
        <h1 className='flex items-center mt-5 text-sm text-neutral-400'>Feito por <a href='https://github.com/risixdzn' target='_blank' className='flex items-center hover:text-sky-500 hover:underline'><AiFillGithub className='ml-1'/>risixdzn</a></h1>      </div>      
    </div>
  )
}


export default Home;