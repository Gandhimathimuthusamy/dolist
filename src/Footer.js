import React from 'react'

const Footer = ({length}) => {
   // const year = new Date();
  return (
    <footer> 
    <footer> {length} List {(length ===1 )?'item':'items'}</footer>
    </footer>
  )
}

export default Footer