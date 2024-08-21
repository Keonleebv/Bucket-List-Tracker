import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listBucketListItems } from '../graphql/queries';
import BucketItem from './BucketItems';
import BucketAdd from './BucketAdd';
import BucketItemView from './BucketView';

const client = generateClient();

const BucketList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items from the database
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await client.graphql({ query: listBucketListItems });
        setItems(result.data.listBucketListItems.items);
      } catch (error) {
        setError('Failed to fetch items.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
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
      <h2>Tasks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <BucketAdd onAdd={addItem} />
          {selectedItem ? (
            <BucketItemView item={selectedItem} onClose={closeView} />
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <BucketItem
                    item={item}
                    onDelete={() => deleteItem(item.id)}
                    onView={() => viewItem(item)}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default BucketList;
