
import React from 'react'
import GoogleLogin from 'react-google-login'
import { selectSignedIn, setSignedIn, setUserData } from '../Features/userSlice';
import {  useDispatch, useSelector } from "react-redux";


const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : ""}}>
      {!isSignedIn ? (
        <div className="login__message">
          {/* <h2>📗</h2> */}
          <h4><img src="blog.png" alt="logo" style={{width:'210px'}}></img></h4>
          
          <h4>
            We provide high quality online resource for reading blogs.<br /> Just sign
            up and start reading some quality blogs.
          </h4>
          <GoogleLogin
            clientId="951926576470-ehqjvep31lhp3m05f7b80mh5l8sisim3.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;