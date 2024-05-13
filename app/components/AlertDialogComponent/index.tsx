import React from "react";
import ButtonComponent from "../ButtonComponent";

type AlertDialogComponentProps = {
  AlertDialogTitle: any;
  AlertDialogContent: any;
  onOk: () => void;
  onCancel: () => void;
};

const AlertDialogComponent = ({
  AlertDialogTitle,
  AlertDialogContent,
  onOk,
  onCancel
}: AlertDialogComponentProps) => {
  return (
    <div
      className={` text-black gap-4 grid  w-full rounded-lg border p-6 max-w-lg z-50 shadow-lg bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
    >
       

      <div className="">
        <div className="mb-1 font-medium leading-none tracking-tight">
          {AlertDialogTitle}
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          {AlertDialogContent}
        </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            
          <ButtonComponent onClick={onCancel} className="bg-white text-black">
            Cancel
          </ButtonComponent>
          <ButtonComponent onClick={onOk} className="bg-black text-white">
            Continue
          </ButtonComponent>

        
      </div>
    </div>
  );
};

export default AlertDialogComponent;
