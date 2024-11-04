import React, { useState } from 'react';
import './App.css';

function UserTier({ user, updateUserTierList }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const addNewEvent = () => {
    if (!isAuthenticated) {
      alert('Please enter your password to proceed.');
      return;
    }

    const newItem = {
      id: `item-${user.tierList.length + 1}`,
      name: '',
      tier: 'new',
      isEditing: true,
    };
    const updatedUser = {
      ...user,
      tierList: [...user.tierList, newItem],
    };
    updateUserTierList(updatedUser);
  };

  const handlePasswordSubmit = () => {
    if (password === user.password) {
      setIsAuthenticated(true);
      alert('Password correct. You can now add or move events.');
      setPassword(''); // Clear the password field after authentication
    } else {
      alert('Incorrect password. Please try again.');
      setPassword(''); // Clear the password field for re-entry
    }
  };

  const handleEventClick = (id) => {
    setSelectedEvent(id);
  };

  const handleTierClick = (tier) => {
    if (selectedEvent) {
      const updatedUser = {
        ...user,
        tierList: user.tierList.map((item) =>
          item.id === selectedEvent ? { ...item, tier } : item
        ),
      };
      updateUserTierList(updatedUser);
      setSelectedEvent(null); // Deselect the event after moving it
    }
  };

  const handleNameChange = (id, newName) => {
    const updatedUser = {
      ...user,
      tierList: user.tierList.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      ),
    };
    updateUserTierList(updatedUser);
  };

  return (
    <div>
      <h2>{user.name}'s Tier List</h2>
      {!isAuthenticated && (
        <div className="password-prompt">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      )}
      <button onClick={addNewEvent}>+ New Event</button>
      <div className="tier-container">
        {['S', 'A', 'B', 'C', 'D', 'E', 'F'].map((tier) => (
          <div
            key={tier}
            className="tier-row"
            onClick={() => handleTierClick(tier)}
          >
            <div className={`tier-label ${tier.toLowerCase()}`}>{tier}</div>
            <div className="tier-content">
              {user.tierList
                .filter((item) => item.tier === tier)
                .map((item) => (
                  <div
                    key={item.id}
                    className={`event-card ${selectedEvent === item.id ? 'selected' : ''}`}
                    onClick={() => handleEventClick(item.id)}
                  >
                    {item.isEditing ? (
                      <input
                        type="text"
                        placeholder="Type event name..."
                        value={item.name}
                        onChange={(e) => handleNameChange(item.id, e.target.value)}
                        onBlur={() => handleNameChange(item.id, item.name)}
                        className="event-input"
                        autoFocus
                      />
                    ) : (
                      <div>{item.name || 'Unnamed Event'}</div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* New Events section */}
      <div className="new-events-section">
        <h2>New Events</h2>
        <div className="new-events-content">
          {user.tierList
            .filter((item) => item.tier === 'new')
            .map((item) => (
              <div
                key={item.id}
                className={`event-card ${selectedEvent === item.id ? 'selected' : ''}`}
                onClick={() => handleEventClick(item.id)}
              >
                {item.isEditing ? (
                  <input
                    type="text"
                    placeholder="Type event name..."
                    value={item.name}
                    onChange={(e) => handleNameChange(item.id, e.target.value)}
                    onBlur={() => handleNameChange(item.id, item.name)}
                    className="event-input"
                    autoFocus
                  />
                ) : (
                  <div>{item.name || 'Unnamed Event'}</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserTier;
