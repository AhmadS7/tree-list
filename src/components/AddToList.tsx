import React, { useState } from 'react';
import { TrInfo as Props } from '../App';

interface TProps {
  plant: Props['plant'];
  setPlant: React.Dispatch<React.SetStateAction<Props['plant']>>;
}

const AddToList: React.FC<TProps> = ({ plant, setPlant }) => {
  const [input, setInput] = useState({
    name: '',
    height: '',
    info: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (): void => {
    if (!input.name || !input.height || !input.img) {
      return;
    }

    setPlant([
      ...plant,
      {
        name: input.name,
        height: parseInt(input.height),
        url: input.img,
        info: input.info,
      },
    ]);
    setInput({
      name: '',
      height: '',
      info: '',
      img: '',
    });
  };

  return (
    <>
      <div className="AddToList">
        Add To List
        <input
          type="text"
          placeholder="Name"
          className="AddToList-input"
          value={input.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          placeholder="Height"
          className="AddToList-input"
          value={input.height}
          onChange={handleChange}
          name="height"
        />
        <input
          type="text"
          placeholder="Image URL"
          className="AddToList-input"
          value={input.img}
          onChange={handleChange}
          name="img"
        />
        <textarea
          placeholder="info"
          className="AddToList-input"
          value={input.info}
          onChange={handleChange}
          name="info"
        />
        <button className="AddToList-btn" onClick={handleClick}>
          Add To List
        </button>
      </div>
    </>
  );
};

export default AddToList;
