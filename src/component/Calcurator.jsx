import React, { useEffect, useState } from 'react'
import dollar from "../../images/icondollar.svg"
import person from "../../images/iconperson.svg"

export default function Calcurator() {
    const [bill , setBill] = useState(0);
    const [numPerson , setNumPerson] = useState(0);
    const [amount , setAmount] = useState(0);
    const [total , setTotal] = useState(0);
    const [tip , setTip] = useState(0);

    const calTip = (num) => {
        let newBill = Number(bill);
        setTip(num * newBill)
    } 

    const calculateBill = () => {
        let newBill = Number(bill);
        let newNumPerson = Number(numPerson);
        let newTip = Number(tip) 
        let total = newBill + newTip
        setAmount(newTip / newNumPerson)
        setTotal(total / newNumPerson)
    }

    const reset = () => {
        window.location.reload();
    }

    useEffect(()=>{
        calculateBill()
    },[tip , numPerson])

  return (
    <div className='w-4/6 h-5/6 max-md:w-full mt-10 bg-white rounded-2xl shadow-lg border-none p-8 flex max-md:flex-col font-mono font-semibold gap-8'>
        <div className='flex-1 flex flex-col justify-around gap-10'>
            <div className='relative'>
                <img src={dollar} className='absolute left-3 bottom-3'/>
                <p className='text-[#0D686D]'>Bill</p>
                <input className='bg-[#f4fafa] text-right mt-2 rounded p-2 w-full text-[#7f9c9f] focus:text-[#00494d] focus:outline-[#26c0ab]' 
                    type="number"
                    value={bill > 0 ? bill : ''}
                    onChange={(e)=>{setBill(e.target.value)}}
                    placeholder={0}
                    />
            </div>
            <div>
                <p className='text-[#0D686D]'>Select Tip %</p>
                <div className=' text-white justify-center mt-2 grid grid-cols-3 gap-3 max-md:grid-cols-2'>
                    <button className='bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'
                    onClick={()=>calTip(0.05)}
                    >
                        5%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'
                    onClick={()=>calTip(0.10)}
                    >
                        10%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'
                    onClick={()=>calTip(0.15)}
                    >
                        15%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'
                    onClick={()=>calTip(0.25)}
                    >
                        25%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'
                    onClick={()=>calTip(0.50)}
                    >
                        50%
                    </button>
                    <input className='text-center bg-[#f4fafa]  text-[#7f9c9f] focus:text-[#00494d] focus:outline-[#26c0ab] rounded p-2' 
                    placeholder='Custom'
                    onChange={(e)=>{setTip(e.target.value)}}
                    />
                </div>
            </div>
            <div className='relative'>
                <img src={person} className='absolute left-3 bottom-3'/>
                <div className='flex gap-2 w-full justify-between'>
                    <p className='text-[#0D686D]'>Number of People</p>
                    {numPerson > 0 ? '' :<p className='text-red-500'>Can't be zero</p>}
                </div>
                <input className={`bg-[#f4fafa] text-right mt-2 rounded p-2 w-full text-[#7f9c9f] focus:text-[#00494d] ${numPerson > 0 ? '' : 'outline outline-red-500'} focus:outline-[#26c0ab]`} 
                    type="number" 
                    value={numPerson > 0 ? numPerson : ''}
                    onChange={(e)=>{setNumPerson(e.target.value)}}
                    placeholder={0}
                    />
            </div>
        </div>
        <div className='flex-1 bg-[#00494d] rounded-2xl text-white p-10 flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1>Tip Amount</h1>
                        <p className='text-lg text-[#7f9c9f]'>/ person</p>
                    </div>
                    <h1 className='text-[#26c0ab] text-4xl flex items-center'>${amount ? parseFloat(amount).toFixed(2) : '0.00'}</h1>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h1>Total</h1>
                        <p className='text-lg text-[#7f9c9f]'>/ person</p>
                    </div>
                    <h1 className='text-[#26c0ab] text-4xl flex items-center'>${total ? parseFloat(total).toFixed(2) : '0.00'}</h1>
                </div>
            </div>
            <button className='w-full rounded-md active:bg-[#7ECED6] bg-[#0D686D] text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494d] py-2 max-md:mt-10'
            onClick={reset}
            >
                RESET
            </button>
        </div>
    </div>
  )
}
