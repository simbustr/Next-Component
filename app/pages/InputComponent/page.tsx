"use client";

import InputComponent from "@/app/components/InputComponent";
import React, { useState } from "react";

const InputPage = () => {
  const [formData, setFormData] = useState({
    Username: "",
  });

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]:value

    })
  };

  

  return (
    <div className="p-5">
      <InputComponent
        type="text"
        name="Username"
        value={formData.Username}
        placeholder="Username"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputPage;
