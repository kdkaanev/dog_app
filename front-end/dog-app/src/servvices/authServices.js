import axiosDA from '../config/axiosinstance';

function getCSRFToken() {
  return document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
}

const ENDPOINT = 'auth/';


export async function registerUser(user) {
    try {
        const response = await axiosDA.post(`/${ENDPOINT}signup/`, {
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

export async function loginUser({username, password}, expires=30) {
    try {
        const response = await axiosDA.post(`/${ENDPOINT}login/`, {
          username: username,
          password: password,
          expires,

        }, {
           
            withCredentials: false,
        });
        
    
        console.log('User logged in:', response);
        
        alert('Login successful!'); // Show success message
        return response.data;
        
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        alert('Login failed: ' + (error.response?.data?.detail || 'Try again.'));
    }
}
export async function getCurrentUser(csrftoken) {S
  try {
    const res = await axiosDA.get(`${ENDPOINT}/me`, {
      headers: {
        Authorization: `Bearer ${csrftoken}`,
      },
    });
    return res.data;
  }
  catch (e) {
    console.error('Ops something went wrong', e);
  }
}