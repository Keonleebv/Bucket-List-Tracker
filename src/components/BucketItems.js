import React from 'react';
import DeleteButton from './BucketDelete';

const BucketItem = ({ item, onDelete, onView }) => {
  return (
    <div className="bucket-item">
      <span>{item.name}</span> {/* Display the item name */}
      <div>
        <button onClick={onView}>View</button>
        <DeleteButton itemId={item.id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default BucketItem;
