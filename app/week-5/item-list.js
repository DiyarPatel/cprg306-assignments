"use client"
import React, { useState } from 'react';
import items from './items.json';
import item from './item';


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
          className='p-3 bg-pink-500 text-black-500'
          onClick={() => setSortBy(value)}
          style={{ backgroundColor: sortBy === value ? 'lightblue' : 'white' }}
        >
          {lable}
        </button>
      </div>
    );
  };
  return (
    <div>
      <div>
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
