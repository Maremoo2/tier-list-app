**Tier List App**

A dynamic React application for managing tier lists, allowing users to categorize events and move them between tiers with user authentication.

**Table of Contents**
Getting Started
Features
Installation
Available Scripts
Project Structure
Usage
Technologies Used
Contributing
License

**Getting Started**
This project was bootstrapped with Create React App. The goal is to create a user-interactive tier list that supports adding, editing, and categorizing events. It includes user authentication and password protection for specific functionalities.

*Features*
- User authentication with simple password protection.
- Ability to add new events and place them in different tiers.
- Users can select, move, and edit event tags.
- User-specific tier lists for customized data management.
**Installation**
 To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tier-list-app.git
cd tier-list-app
2. Install dependencies:

bash
Copy code
npm install
3. Start the development server:

bash
Copy code
npm start
4. Open your browser: Navigate to http://localhost:3000 to view the app.

**Available Scripts**
In the project directory, you can run:

npm start
Runs the app in development mode.
The app will open at http://localhost:3000.

npm test
Launches the test runner in interactive watch mode.
Learn more about running tests.

npm run build
Builds the app for production and optimizes the build for the best performance.
The production build is located in the build/ folder.

npm run eject
Note: This is a one-way operation. Once ejected, you can't go back.
Copies configuration files and dependencies into your project for customization.

**Project Structure**

plaintext

Copy code

tier-list-app/
│

├── public/            # Public assets

├── src/

│   ├── components/    # Reusable components (e.g., UserMenu, UserTier)

│   ├── App.js         # Main app component

│   ├── User.js        # User selection and menu handling

│   ├── UserTier.js    # User tier display and management

│   ├── index.js       # Entry point

│   └── App.css        # Main CSS file

│

├── .gitignore         # Git ignore file

├── README.md          # Project documentation

├── package.json       # Project metadata and dependencies

└── package-lock.json  # Auto-generated lock file

**Usage**
User Selection: Click the "User" button and select a user or create a new user.
Password Protection: Enter the 4-digit password to unlock editing functionalities.
Adding Events: Use the "+ New Event" button to add new event cards to the "New Events" section.
Managing Tiers: Click on an event to select it, then click on a tier to move it.
Editing Events: Double-click on an event card to edit its name.
**Technologies Used**
React: A JavaScript library for building user interfaces.
CSS: Styling for the application.
JavaScript (ES6+): Core language for building the application.
**Contributing**
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
**License**
This project is licensed under the MIT License. See the LICENSE file for details.
