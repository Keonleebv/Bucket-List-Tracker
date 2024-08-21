import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createBucketListItem } from '../graphql/mutations';
import { useAuthenticator } from '@aws-amplify/ui-react';  // Import the hook

const client = generateClient();

const BucketAdd = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const { user } = useAuthenticator();  // Get the current authenticated user

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newItem = {
        name: input.trim(),
        description: '',
        completed: false,
        owner: user.username  // Attach the username of the logged-in user
      };
      try {
        const result = await client.graphql({
          query: createBucketListItem,
          variables: { input: newItem }
        });
        onAdd(result.data.createBucketListItem);  // Add the item
        setInput('');
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new item" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BucketAdd;
