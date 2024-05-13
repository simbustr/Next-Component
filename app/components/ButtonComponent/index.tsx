import React from 'react'

type ButtonComponentProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;

}

const ButtonComponent = ({children, onClick, className  }:ButtonComponentProps) => {
  return (
    <div>
        <button onClick={onClick} className={`h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background border ${className}`}>
             {children}    
        </button>
        
    </div>
  )
}

export default ButtonComponent
