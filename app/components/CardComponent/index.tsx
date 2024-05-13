import React from 'react'


type CardComponentProps = {
    
    title?: string;
    description?: string;
    imageUrl?: string;
    children: React.ReactNode;
}


const CardComponent = ({title,description,imageUrl,children}:CardComponentProps) => {
  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]'>
        <div className='flex flex-col space-y-1.5 p-6'>
        <h3 className='text-2lg font-semibold leading-none tracking-tight'>{title}</h3>
        <img src= {imageUrl}/>
        </div>
        {children}
        
    </div>
  )
}

export default CardComponent
