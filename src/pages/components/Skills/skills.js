import React from 'react'

export default function Skills() {
  return (
    <section className='text-gray-400 bg-gray-900 hover:text-2xl duration-500 '>
        <h1 className='flex justify-center text-4xl mb-8 hover:text-6xl duration-500 hover:text-sky-500'>My Skills</h1>
        <div className='flex flex-wrap justify-evenly	'>
        <div>
            <h1 className='text-2xl'>code</h1>
        <div className='border-2 border-sky-500 h-70 w-96 mt-4 hover:bg-gray-800 duration-500 '>
            <div className='m-2'>
                <span className='flex justify-between mt-2'>
                <h3 >HTML</h3>
                <h3>90%</h3>
                </span>
                <div className='border-2 border-sky-500	 flex '>
                    <div className='bg-sky-500 m-2 w-72 h-2 '><span className='pl-2'></span></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>CSS</h3>
                <h3>90%</h3>
                </span>
                <div className='border-2 border-sky-500 flex mt-2'>
                    <div className='bg-sky-500 m-2	 w-72 h-2'></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>JAVASCRIPT</h3>
                <h3>60%</h3>
                </span>
                <div className='border-2	border-sky-500 flex'>
                    <div className='bg-sky-500 m-2	 w-52 h-2'></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>Front-End</h3>
                <h3>70%</h3>
                </span>
                <div className='border-2	border-sky-500 flex'>
                    <div className='bg-sky-500 m-2	 w-60 h-2'></div>
                </div>
            </div>
        </div>
        </div>
        <div>
            <h1 className='text-2xl'>code</h1>
        <div className='border-2 border-sky-500 h-70 w-96 mt-4 duration-500 flex-wrap hover:bg-gray-800'>
            <div className='m-2'>
                <span className='flex justify-between mt-2'>
                <h3 >React</h3>
                <h3>100%</h3>
                </span>
                <div className='border-2 border-sky-500	 flex '>
                    <div className='bg-sky-500 m-2	 w-96 h-2'><span className='pl-2'></span></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>BootStrap</h3>
                <h3>90%</h3>
                </span>
                <div className='border-2 border-sky-500 flex mt-2'>
                    <div className='bg-sky-500 m-2	h-2 w-72'></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>Responsive</h3>
                <h3>50%</h3>
                </span>
                <div className='border-2	border-sky-500 flex'>
                    <div className='bg-sky-500 m-2 h-2 w-52'></div>
                </div>
            </div>
            <div className='m-2'>
                <span className='flex justify-between mt-4'>
                <h3>Back-End</h3>
                <h3>10%</h3>
                </span>
                <div className='border-2	border-sky-500 flex'>
                    <div className='bg-sky-500 m-2 h-2 w-10 hover:bg-left-300'></div>
                </div>
            </div>
        </div>
        </div>
        
       
        
        </div>
    </section>
  )
}
