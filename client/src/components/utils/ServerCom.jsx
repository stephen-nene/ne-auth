//ServerCom.jsx
import axios from "axios";
import { message } from "antd";

import { login, logout, signupAction } from "../../assets/store/actions/userAction"
// import { setArticles, setMeetings, setUsers, createUser, setAddNewMeeting, setAddNewArticle, deleteArticle, updateMeetingStatus, updateArticleStatus } from "./store/actions/appAction";


const apiUrl = 'http://127.0.0.1:3000'
// const apiUrl = 'https://www.fountainofhopepsychotherapy.com/api'
// const apiUrl = '/api'

function showMessage(type, content, duration) {
  return message[type]({
    content,
    duration,
  });
}


export const handleServerLogin = async (dispatch, formData, navigate) => {
  const loadingMessage = showMessage('loading', 'Logging in ...', 0);
  try {
    const response = await axios.post(`${apiUrl}/login`, formData);
    if (response.status == 200) {
      // console.log(response.data)
      dispatch(login(response.data));
      showMessage('success', 'Logged in successfully', 1);
      // navigate('/dashboard');
    } else {
      showMessage('error', 'Login failed. Please try again .', 1);
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      showMessage('error', error.response.data.error);
    } else {
      showMessage('error', 'server error. Please try again later.');
    }
  } finally {
    loadingMessage();
  }
};

export const handleForgotPass= async (email, setMessage, setError) => {
  const loadingMessage = showMessage('loading', 'Sending email...', 0);
  try {
    const response = await axios.post(`${apiUrl}/forgot`, {email});
    console.log(response)
    if (response.status == 200) {
      setMessage(response.data);
      showMessage('success', 'Account reset intiated', 1);
    } else {
      showMessage('error', 'Account reset failed. Please try again .', 1);
    }
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data && error.response.data.error) {
      showMessage('error', error.response.data.error);
      setError(error.response.data.error);
    } else {
      showMessage('error', 'server error. Please try again later.');
    }
  } finally {
    loadingMessage();
  }
}

export const handleServerSignup = async (formData, setError, dispatch, navigate) => {
  const loadingMessage = showMessage('loading', 'Signing up...', 0);

  try {
    const response = await axios.post(`${apiUrl}/users`, { ...formData, sendResetEmail: false });

    if (response.status === 201) {
      showMessage('success', 'Signed up successfully', 3);
      dispatch(signupAction(response.data));
      navigate('/dashboard');
      setError('');
    } else {
      showMessage('error', 'Signup failed. Please try again.');
    }
  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data);
      console.error('Error:', error.response.data);
      showMessage('error', 'Errors: Please check the fields.');
    } else {
      console.error('Error in response:', error);
      showMessage('error', 'Server error. Please try again later.');
    }
  } finally {
    loadingMessage();
  }

};

export const handleServerCreateUser = async (user, setError, closeModal, dispatch) => {
  const loadingMessage = showMessage("loading", "Creating user...", 0);

  try {
    const response = await axios.post(`${apiUrl}/users`, { ...user, sendResetEmail: true });

    if (response.status === 201) {
      showMessage("success", "User created successfully", 3);
      dispatch(createUser(response.data.user));
      setError();
      closeModal();
    } else {
      showMessage("error", "User creation failed. Please try again.");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data);
      showMessage("error", "Errors: Please check the fields.");
    } else {
      console.error("Error in response:", error);
      showMessage("error", "Server error. Please try again later.");
    }
  } finally {
    loadingMessage();
  }
};


export const handleServerLogout = async (dispatch, navigate) => {
  const loadingMessage = showMessage('loading', 'Logging out ...', 0);
  try {
    const response = await axios.delete(`${apiUrl}/logout`);

    if (response.status === 200) {
      dispatch(logout());
      navigate('/login')
      showMessage('success', 'Logged out successfully', 1);
    } else {
      showMessage('error', 'Logout failed. Please try again .', 1);
    }
  } catch (error) {
    console.log(error)
    // Handle any logout errors here if necessary.
    showMessage('error', 'Logout failed. Please try again.', 1);
  } finally {
    loadingMessage();
  }
};

export const handleServerPasswordUpdate = async (formData, showMessage, navigate) => {
  const loadingMessage = showMessage('loading', 'Updating password ...', 0);
  try {
    const response = await axios.post(`${apiUrl}/user/update`, formData);
    if (response.status === 200) {
      showMessage('success', 'Password updated successfully', 1);
      navigate('/login'); // Redirect to the login page after a successful password update.
    } else {
      showMessage('error', 'Password update failed. Please try again.', 1);
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      showMessage('error', error.response.data.error);
    } else {
      showMessage('error', 'Server error. Please try again later.');
    }
  } finally {
    loadingMessage();
  }
};




// export const handleGetCurrentUser = async (dispatch, navigate,setLoginPrompt) => {
//     // const loadingMessage = showMessage('loading', 'Getting current user ...', 0);
//     try {
//         const response = await axios.get(`${apiUrl}/me`);
//         // showMessage('success', 'current user fetched successfully', 2);
//         dispatch(login(response.data));
//         setLoginPrompt(true);   
//     } catch (error) {
//         if (error.response && error.response.data && error.response.data.error) {
//             // showMessage('error', error.response.data.error + ' please login');
//             // setTimeout(() => { navigate('/login'); }, 0)
//         } else {
//             showMessage('error', 'Login failed. Please try again later.');
//         }
//     }
//     //  finally {
//     //     loadingMessage();
//     // }
// }

export const handleGetCurrentUser = (dispatch, navigate, setLoginPrompt) => {
  // Check if user data is in local storage
  const userDataString = localStorage.getItem('userData');

  if (userDataString) {
    try {
      const userData = JSON.parse(userDataString);

      // Check if user data is not expired
      if (userData.expires > new Date().getTime()) {
        // User data is valid, dispatch it
        dispatch(login(userData.data));
        setLoginPrompt(true);
        return; // Exit the function
      }
    } catch (error) {
      // Handle JSON parsing error
      console.error('Error parsing user data:', error);
    }
  }
  console.log('error')

  // If no valid user data found in local storage, you can handle it here
  // For example, redirect the user to the login page
  // setTimeout(() => { navigate('/login'); }, 3);
};


