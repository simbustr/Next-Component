import React from 'react'


type AlertComponent = {
    AlertTitle:any
    AlertDescription:any
    type?:"success" | "error" | "warning";
}




const AlertComponent = ({AlertDescription,AlertTitle,type}:AlertComponent) => {

  let bgColor;
  switch (type) {
    case "success":
    bgColor = 'border-green-700 text-green-700';
    break;
    case "error":
        bgColor = 'border-red-700 text-red-700';
    break;
    case "warning":
        bgColor = 'border-sky-700 text-sky-700';
    break;
  
    default:
        bgColor = 'border-gray-700 text-gray-700';
        break;
  }


  return (
    <div className={`text-black ${bgColor} w-full rounded-lg border p-4 `}>
        <div className=''>
        <div className='mb-1 font-medium leading-none tracking-tight'>{AlertTitle}</div>
        <div className='text-sm'>{AlertDescription}</div>
        </div>

    </div>
  )
}

export default AlertComponent
