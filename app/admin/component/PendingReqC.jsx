import React from 'react'

const limit=(name)=>{
    if(name.length>20){
        return name.slice(0,20)+"..."
    }
    return name

}

const PendingReqC = ({req}) => {
  return (
    <div>
       <div className='flex items-center bg-blue-300 rounded-xl flex-row w-full p-2 '>
              <div className='flex grow'>
            <img className='hidden sm:flex rounded-full w-[50px] h-[50px]' src={req.image} alt="img"></img>
            <div className='flex flex-col pl-8'>
            <h1 className='text-black font-bold text-xs items-center'>External</h1>
            <h1 className='text-black lg:text-3xl md:text-2xl sm:text-xl items-center'>{limit(req.name)}</h1>
            </div>
            </div>
            <button className='mr-8 p-2 bg-black text-white h-fit  lg:w-[200px] md:w-[100px]  text-center rounded-xl'>{req.status}</button>
            <button className='mr-8 p-2 bg-black text-blue-300 sm:text-white lg:w-[200px] h-fit md:w-[100px] text-center rounded-xl'>View</button>
            


        </div>
      
    </div>
  )
}

export default PendingReqC
