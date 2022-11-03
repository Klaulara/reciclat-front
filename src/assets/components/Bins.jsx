import React from 'react'

const Bins = ({recicle}) => {

    const { name, image, id} = recicle

  return (
    <div className='flex flex-col'>
        <img src={image} alt={name} />
        <button className='bg-green-600 m-8 p-1 rounded-md text-white' type='button'>Aprende más</button>
    </div>
  )
}

export default Bins