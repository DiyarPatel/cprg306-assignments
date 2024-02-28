"use client"
import React, { useState } from 'react';
import items from './items.json';
import Item from './item';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  const renderSortButton = (lable, value) => {
    return (
      <div>
        <button
          className='p-2 mb-2 w-60 h-10 bg-pink-500 border-2 border-blue-800 rounded-md hover:bg-pink-700 '
          onClick={() => setSortBy(value)}
          style={{ backgroundColor: sortBy === value ? 'lightpink' : 'grey' }}
        >
          {lable}
        </button>
      </div>
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
