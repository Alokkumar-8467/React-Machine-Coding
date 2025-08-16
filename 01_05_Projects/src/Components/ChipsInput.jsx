import React, { useState } from "react";

const ChipsInput = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handlekeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDeleteChips = (index) => {
    // here we remove the selected chip and then delete

    const copyOfChip = [...chips];
    copyOfChip.splice(index, 1);
    setChips(copyOfChip);

  };

  return (
    <div className="my-12">
      <h1>ChipsInput</h1>
      <input
        type="text"
        placeholder="Type a chip and press enter"
        className="border-1 rounded-lg w-full h-[40px] p-2  focus:outline-red focus:ring-1"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handlekeyDown(e)}
      />

      <div>
        {chips.map((chip, index) => (
          <div className="bg-gray-100 p-2 text-black my-2">
            {chip}
            <button
              onClick={() => handleDeleteChips(index)}
              className="bg-red-600 text-black mx-12"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
