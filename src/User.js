import React, { useState } from 'react';
import './App.css';

function UserMenu({ users, onUserSelect, buttonText }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="user-menu-container">
      <button onClick={toggleUserMenu}>{buttonText}</button>
      {showUserMenu && (
        <div className="user-menu">
          {users.map((user, index) => (
            <div
              key={index}
              className="user-option"
              onClick={() => {
                onUserSelect(user);
                setShowUserMenu(false);
              }}
            >
              {user.name}
            </div>
          ))}
          <div className="user-option" onClick={() => alert('Add new user functionality')}>
            <strong>New User</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
