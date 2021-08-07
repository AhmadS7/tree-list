import React from 'react';

interface LsProps {
  plant: {
    name: string;
    url: string;
    height?: number;
    location: string;
    info: string;
  }[];
}

const List: React.FC<LsProps> = (props) => {
  return <div>this is a List</div>;
};

export default List;
