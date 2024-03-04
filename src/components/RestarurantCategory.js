import React from 'react'

const RestarurantCategory = ({cat}) => {
    console.log(cat.card);
  return (
    <div>
        {cat?.card?.card?.title}
        
    </div>
  )
}

export default RestarurantCategory