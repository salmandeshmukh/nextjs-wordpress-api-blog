import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-400'>
        {props.children}
    </button>
  )
}

export default Button