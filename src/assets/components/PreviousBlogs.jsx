import React from 'react'

const PreviousBlogs = ({ blog }) => {

    const { titulo, date, image, resumen, id } = blog

  return (
    <div className='m-5'>
        <h3 className="font-bold uppercase m-5 text-lg">{titulo}</h3>
      <div className="flex flex-col justify-center items-center">
        <img
          className="m-5 border-solid border-4 border-green-600 rounded-xl"
          width="672px"
          src={image}
          alt="imagen"
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center self-center text-center">
        <p className="max-w-2xl text-justify">{resumen}</p>
        <p className="max-w-2xl text-right self-right items-end">
          {date}
        </p>
      </div>
    </div>
  )
}

export default PreviousBlogs