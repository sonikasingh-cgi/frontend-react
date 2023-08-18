// api.js
import config from './config';

async function login(userData) {
  try {
    const response = await fetch(`${config.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      return data; // Successful login
    } else {
      throw new Error(data.message); // Server error or bad request
    }
  } catch (error) {
    throw new Error('An error occurred'); // Network error
  }
}

// Similar functions for register and other API calls

export { login, /* register and other API functions */ };
