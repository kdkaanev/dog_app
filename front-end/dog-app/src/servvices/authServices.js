import axiosDA from '../config/axiosinstance';


const getCsrfToken = () => {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
};

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
      const csrfToken = getCsrfToken();
     
        const response = await axiosDA.post(`/${ENDPOINT}login/`, {
          username: username,
          password: password,
          expires,

        }, {
           
            withCredentials: true,
            headers: {
              'X-CSRFToken': csrfToken,
            },
        });
        
    
       
        alert('Login successful!'); // Show success message
        return response.data;
        
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        alert('Login failed: ' + (error.response?.data?.detail || 'Try again.'));
    }
}
export async function getCurrentUser() {
  console.log(`/${ENDPOINT}me/`);
  const csrfToken = getCsrfToken();
  console.log('CSRF Token:', csrfToken);
  try {
    if (!csrfToken) {
      throw new Error('CSRF token not found in cookies');
    }
    const res = await axiosDA.get(`/${ENDPOINT}me/`, {
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
    
    });
    return res.data;
  }
  catch (e) {
    console.error('Ops something went wrong', e);
  }
}
export async function saveUserProfile(profileData) {
  try {
    const response = await axiosDA.patch(`/${ENDPOINT}me/`, profileData,{
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
    
    });
    return response.data;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    const csrfToken = getCsrfToken();
    const response = await axiosDA.post(`/${ENDPOINT}logout/`, {}, {

      withCredentials: true,
      headers: {
        'X-CSRFToken': csrfToken,
      },
    });
    
    console.log("Logout successful:", response.data);
    return true;
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    return false;
  }
}