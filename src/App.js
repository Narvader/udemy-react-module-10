import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';

function App() {

  const [users, setUsers] = useState('');

  const addUserHandler = (user) => {
    setUsers(prevState => {
      return [...prevState, user];
    });
  }

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      {users.length > 0 && <Users items={users} />}
    </div>
  );
}

export default App;
