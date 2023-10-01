import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({svg,content,to}) => {
  return (
    <Link to={to} className='navlink'>
        <img src={svg}/>
        {content}
    </Link>
  )
}

export default Navlink