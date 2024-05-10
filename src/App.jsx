import { useState } from 'react'
import './App.css'
import Calcurator from './component/Calcurator'

function App() {
  return  <div className='min-h-screen bg-[#C4E4E7] flex flex-col justify-center items-center'>
            <p className='text-xl font-semibold text-[#0D686D]'>S P L I</p>
            <p className='text-xl font-semibold text-[#0D686D]'>T T E R</p>
            <Calcurator/>
          </div>
}

export default App
