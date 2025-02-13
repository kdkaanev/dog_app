import axiosDA from '../config/axiosinstance';

axiosDA.defaults.withCredentials = true;
axiosDA.defaults.xsrfHeaderName = "X-CSRFToken";
axiosDA.defaults.xsrfCookieName = "csrftoken";


// const getCsrfToken = () => {
//   const match = document.cookie.match(/csrftoken=([^;]+)/);
//   return match ? match[1] : null;
// };

async function fetchCSRFToken() {
  const response = await axiosDA.get("https://pawnpall.azurewebsites.net/csrf/");
  document.cookie = `csrftoken=${response.data.csrfToken}; path=/`;
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    document.cookie.split(";").forEach(cookie => {
      const trimmed = cookie.trim();
      if (trimmed.startsWith(name + "=")) {
        cookieValue = trimmed.substring(name.length + 1);
      }
    });
  }
  return cookieValue;
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
      await fetchCSRFToken();
     
        const response = await axiosDA.post(`/${ENDPOINT}login/`, {
          username: username,
          password: password,
          expires,

        }, {
           
            headers: {
              "X-CSRFToken": getCookie("csrftoken"),
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
  await fetchCSRFToken();

  try {
   
    const res = await axiosDA.get(`/${ENDPOINT}me/`, {
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    
    });
    return res.data;
  }
  catch (e) {
    console.error('Ops something went wrong', e);
  }
}
export async function saveUserProfile(profileData) {
    await fetchCSRFToken();
  try {
    const response = await axiosDA.patch(`/${ENDPOINT}me/`, profileData,{
      withCredentials: true,
      
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    
    });
    return response.data;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

export async function logoutUser() {
  await fetchCSRFToken();
  try {
    
    const response = await axiosDA.post(`/${ENDPOINT}logout/`, {}, {

      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    
    console.log("Logout successful:", response.data);
    return true;
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    return false;
  }
}