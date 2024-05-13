import React from "react";

type AvatarComponentProps = {
  imageUrl: string;
  altText: string;
};

const AvatarComponent = ({ imageUrl, altText }: AvatarComponentProps) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={altText}
        className="aspect-square flex h-10 w-10 shrink-0 overflow-hidden rounded-full cursor-pointer"
      />
    </div>
  );
};

export default AvatarComponent;
