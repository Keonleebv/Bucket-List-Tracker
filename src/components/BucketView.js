import React from 'react';

const BucketItemView = ({ item, onClose }) => {
  return (
    <div className="bucket-item-view">
      <h3>Bucket List Item Details</h3>
      <p>{item}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BucketItemView;
