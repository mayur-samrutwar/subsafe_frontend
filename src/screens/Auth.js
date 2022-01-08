import React, {useState} from 'react';
function Auth(props) {
    const [authType, setAuthType] = useState(props.authType);
    return (
      <div className="bg-rose-400 flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-md h-96 w-96">
          {authType === 'sign-up' ? 
          <div>Sign Up</div> : 
          <div>Sign in</div>}
        </div>
      </div>
    );
}

export default Auth;