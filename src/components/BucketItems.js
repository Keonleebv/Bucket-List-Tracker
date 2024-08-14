import React from 'react';
import DeleteButton from './BucketDelete';

const BucketItem = ({ item, onDelete, onView }) => {
  return (
    <div className="bucket-item">
      <span>{item}</span>
      <div>
        <button onClick={onView}>View</button>
        <DeleteButton onDelete={onDelete} />
      </div>
    </div>
  );
};

export default BucketItem;
