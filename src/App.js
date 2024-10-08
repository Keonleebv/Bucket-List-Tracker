import './App.css';
import BucketMain from './components/BucketMain';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';  // For default Amplify UI styling
import awsExports from './aws-exports';     // Ensure aws-exports.js is correctly configured

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>To-do List</h1>
            <h3>Welcome, {user.username}</h3>  {/* Display the logged-in user's username */}
            <button onClick={signOut}>Sign out</button>
          </header>
          <BucketMain />  {/* Pass user and signOut to BucketMain if necessary */}
        </div>
      )}
    </Authenticator>
  );
}

export default App;
