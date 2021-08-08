import React from 'react';
import { TrInfo as LsProps } from '../App';

const List: React.FC<LsProps> = ({ plant }) => {
  const renderTree = (): JSX.Element[] => {
    return plant.map((tree) => {
      return (
        <ul className="List">
          <div className="List-header">
            <img src={tree.url} alt="Tree" className="List-img" />
            <h2>{tree.name}</h2>
          </div>
          <p>Usually {tree.height}ft Tall </p>
          <p className="List-note">{tree.info}</p>
        </ul>
      );
    });
  };

  return (
    <>
      <ul>{renderTree()}</ul>
    </>
  );
};

export default List;
