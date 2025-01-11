import axiosDA from '../config/axiosinstance';

const ENDPOINT = 'auth/signup/';

export async function registerUser(user) {
    try {
        const response = await axiosDA.post(`/${ENDPOINT}`, {
          username: user.username,
          email: user.email,
          password: user.password,
        });
    
        console.log('User registered:', response.data);
        alert('Registration successful!'); // Show success message
        
      } catch (error) {
        console.error('Registration error:', error.response?.data || error.message);
        alert('Registration failed: ' + (error.response?.data?.detail || 'Try again.'));
    }
}