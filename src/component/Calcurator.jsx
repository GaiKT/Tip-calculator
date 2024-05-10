import React from 'react'
import dollar from "../../images/icondollar.svg"
import person from "../../images/iconperson.svg"

export default function Calcurator() {
  return (
    <div className='w-3/6 h-5/6 max-md:w-full mt-10 bg-white rounded-2xl shadow-lg border-none p-8 flex max-md:flex-col font-mono font-semibold gap-8'>
        <div className='flex-1 flex flex-col justify-around gap-10'>
            <div className='relative'>
                <img src={dollar} className='absolute left-3 bottom-3'/>
                <p className='text-[#0D686D]'>Bill</p>
                <input className='bg-[#f4fafa] text-right mt-2 rounded p-2 w-full text-[#7f9c9f] focus:text-[#00494d] focus:outline-[#26c0ab]' type="number"/>
            </div>
            <div>
                <p className='text-[#0D686D]'>Select Tip %</p>
                <div className=' text-white justify-center mt-2 grid grid-cols-3 gap-3 max-md:grid-cols-2'>
                    <button className='bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'>
                        5%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'>
                        10%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'>
                        15%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'>
                        25%
                    </button>
                    <button className=' bg-[#00494d] rounded p-2 active:bg-[#7ECED6] active:text-[#00494d] focus:bg-[#26C0AB] focus:text-[#00494d]'>
                        50%
                    </button>
                    <input className='text-center bg-[#f4fafa]  text-[#7f9c9f] focus:text-[#00494d] focus:outline-[#26c0ab] rounded p-2' placeholder='Custom'/>
                </div>
            </div>
            <div className='relative'>
                <img src={person} className='absolute left-3 bottom-3'/>
                <p className='text-[#0D686D]'>Number of People</p>
                <input className='bg-[#f4fafa] text-right mt-2 rounded p-2 w-full text-[#7f9c9f] focus:text-[#00494d] focus:outline-[#26c0ab]' type="number" />
            </div>
        </div>
        <div className='flex-1 bg-[#00494d] rounded-2xl text-white p-10 flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1>Tip Amount</h1>
                        <p className='text-lg text-[#7f9c9f]'>/ person</p>
                    </div>
                    <h1 className='text-[#26c0ab] text-4xl flex items-center'>$0.00</h1>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h1>Total</h1>
                        <p className='text-lg text-[#7f9c9f]'>/ person</p>
                    </div>
                    <h1 className='text-[#26c0ab] text-4xl flex items-center'>$0.00</h1>
                </div>
            </div>
            <button className='w-full rounded-md active:bg-[#7ECED6] bg-[#0D686D] text-[#00494D] focus:bg-[#26C0AB] focus:text-[#00494d] py-2 max-md:mt-10'>
                RESET
            </button>
        </div>
    </div>
  )
}
