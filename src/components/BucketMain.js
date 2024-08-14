import React, { useState } from 'react';
import BucketItem from './BucketItems';
import BucketAdd from './BucketAdd';
import BucketItemView from './BucketView';

const BucketList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const viewItem = (item) => {
    setSelectedItem(item);
  };

  const closeView = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h2>My Bucket List</h2>
      <BucketAdd onAdd={addItem} />
      {selectedItem ? (
        <BucketItemView item={selectedItem} onClose={closeView} />
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <BucketItem 
                item={item} 
                onDelete={() => deleteItem(index)} 
                onView={() => viewItem(item)} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BucketList;
