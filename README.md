Certainly! Here’s the updated README without the navigation part:

---

# Cyberpunk Market | Single Page Application (SPA)

## Overview

The Cyberpunk Market is a Single Page Application (SPA) built with JavaScript, HTML, CSS, and several modern libraries. The application allows users to perform various actions, including login, registration, managing market items (create, edit, delete), and viewing details of both their own and other users' items. Authentication is implemented using local storage to store user credentials securely. Additionally, the app includes notifications to guide users when they encounter issues like incorrect login or registration.

## Technologies Used

- **JavaScript**
- **HTML/CSS**
- **lit-html** for templating
- **page.js** for routing

## Getting Started

### To save you Time
Run the file called `run.bat`. For first-time users, this will install the necessary node packages, and on the second run, it will start the server and open the website. **Highly recommended.**

Follow the steps below to set up and run the Cyberpunk Market application:

### 1. Install Dependencies

Navigate to the Terminal and run the following command:

```bash
npm i
```

### 2. Start the Server

Navigate to the `server` directory where the server-side code is located.

```bash
cd server
```

Start the server using Node.js:

```bash
node server.js
```

The server will now be running, and you can interact with the application.

### 3. To start the Website

You can either run a new Terminal with the command:

```bash
npm run start
```

Or you can use an extension of your choice.

## Features

- **User Authentication**
    - Register a new account
    - Log in and log out

- **Market Item Management**
    - Create items
    - Edit existing items
    - Delete items
    - View details of your own and other users' items

- **Notifications**
    - Receive notifications if actions such as login or registration are not performed correctly

## How to Use

1. **Register**: Create a new account to start using the application.
2. **Log In**: Access your account to manage market items.
3. **Market**: View, edit, and delete your own market items.
4. **Sell**: Create and list new items for sale.
5. **Notifications**: Be alerted with notifications for any issues like incorrect login or registration.

---

This documentation provides a clear and structured guide to setting up and using the Cyberpunk Market SPA application, including its features and how to get started.