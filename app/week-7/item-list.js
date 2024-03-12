import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const renderSortButton = (label, value) => {
    return (
      <button
        key={value}
        className='p-2 mb-2 w-60 h-10 bg-pink-500 border-2 border-blue-800 rounded-md hover:bg-pink-700 '
        onClick={() => handleSortBy(value)}
        style={{ backgroundColor: sortBy === value ? 'lightpink' : 'grey' }}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className='flex space-x-10'>
        {renderSortButton('Name', 'name')}
        {renderSortButton('Category', 'category')}
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
