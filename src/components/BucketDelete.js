import React from 'react';
import { generateClient } from 'aws-amplify/api';
import { deleteBucketListItem } from '../graphql/mutations';

const client = generateClient();

const DeleteButton = ({ itemId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await client.graphql({
        query: deleteBucketListItem,
        variables: { input: { id: itemId } },
      });
      onDelete();  // This will update the UI after deletion
    } catch (error) {
      console.error('Error deleting bucket list item:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteButton;
