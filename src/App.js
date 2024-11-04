import React, { useState } from 'react';
import './App.css';
import UserMenu from './User';
import UserTier from './UserTier';

const initialEvents = [
  { id: 'event-1', name: 'Blikktrommen', tier: 'new', isEditing: false },
  { id: 'event-2', name: 'Tornerose', tier: 'new', isEditing: false },
  { id: 'event-3', name: 'Haugtussa', tier: 'new', isEditing: false },
  { id: 'event-4', name: 'Byggmester Solnes', tier: 'new', isEditing: false },
  { id: 'event-5', name: 'Jegeren Gracchus', tier: 'new', isEditing: false },
  { id: 'event-6', name: 'Vif- Frisk Asker Hockey', tier: 'new', isEditing: false },
  { id: 'event-7', name: 'Jesus Christ Superstar', tier: 'new', isEditing: false },
  { id: 'event-8', name: 'Solaris', tier: 'new', isEditing: false },
  { id: 'event-9', name: 'The Rake\'s Progress', tier: 'new', isEditing: false },
];

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Marius',
      password: '1234',
      tierList: [...initialEvents],
    },
    {
      name: 'Carl',
      password: '5678',
      tierList: [...initialEvents],
    },
    {
      name: 'Matti',
      password: '9012',
      tierList: [...initialEvents],
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const updateUserTierList = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.name === updatedUser.name ? updatedUser : user
      )
    );
    setSelectedUser(updatedUser); // Update the selected user to show changes immediately
  };

  return (
    <div className="App">
      <h1 className="title">Tier List</h1>
      <div className="button-container centered">
        <UserMenu 
          users={users} 
          onUserSelect={handleSelectUser} 
          buttonText={selectedUser ? selectedUser.name : 'Pick the user'}
        />
      </div>
      {selectedUser && (
        <UserTier
          user={selectedUser}
          updateUserTierList={updateUserTierList}
        />
      )}
    </div>
  );
}

export default App;
