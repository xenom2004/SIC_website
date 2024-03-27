import React from 'react'

const  Row = (props) => {
  return (
  <>

       <div className="slide relative">
            <img className="w-full h-[350px] border border-gray-500 object-cover rounded-md"
                src={props.image}/>
        </div>
  
</>
  
  )
}

export default Row