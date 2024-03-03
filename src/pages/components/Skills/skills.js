import React from 'react'

export default function Skills() {
    
        const skills = [
            { name: 'HTML', percentage: 100 },
            { name: 'CSS', percentage: 95 },
            { name: 'JavaScript', percentage: 60 },
            { name: 'Front-End', percentage: 85 }
        ];
        const skilltwo = [
            { name: 'React', percentage: 88 },
            { name: 'Tailwind', percentage: 90 },
            { name: 'Bootstrap', percentage: 80 },
            { name: 'Back-end', percentage: 30 }
        ];
  return (
    <section className='text-gray-400 bg-gray-900 hover:text-2xl duration-500 max-md:mt-20'>
        <h1 className='flex justify-center text-4xl mb-8 hover:text-6xl duration-500 hover:text-sky-500'>My Skills</h1>
        <div className='flex max-md:flex-wrap'>
        <div className="container mx-auto mt-8">
            <div className="max-w-xl mx-auto">
                <h1 className="text-2xl text-center mb-4">Skills</h1>
                <div className="border-2 border-sky-500 hover:bg-gray-800 duration-500 overflow-hidden rounded-lg shadow-lg">
                    {skills.map((skill, index) => (
                        <div key={index} className="m-4">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">{skill.name}</h3>
                                <h3 className="font-semibold">{skill.percentage}%</h3>
                            </div>
                            <div className=" h-2 mt-1">
                                <div className={`h-full bg-blue-500`} style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-8 ">
            <div className="max-w-xl mx-auto">
                <h1 className="text-2xl text-center mb-4">Skills</h1>
                <div className="border-2 border-sky-500 hover:bg-gray-800 duration-500 overflow-hidden rounded-lg shadow-lg">
                    {skilltwo.map((skilltwo, index) => (
                        <div key={index} className="m-4">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">{skilltwo.name}</h3>
                                <h3 className="font-semibold">{skilltwo.percentage}%</h3>
                            </div>
                            <div className=" h-2 mt-1">
                                <div className={`h-full bg-blue-500`} style={{ width: `${skilltwo.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
       
        
        </div>
    </section>
  )
}
