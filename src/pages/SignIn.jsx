import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!usernameError && !passwordError) {
        setUsername("");
        setPassword("");
        setPasswordError(null);
        setUsernameError(null);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 2) {
      setUsernameError("Username is too short")
    } else {
      setUsernameError(null);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
      setPasswordError("Password should have a min of 8 characters")
    } else {
      setPasswordError(null);
    }
  };
  return (
    <div className="justify-center items-center flex flex-col">
      <h2 className="my-4 font-semibold text-xl">Sign In</h2>
      <div className="w-auto sm:w-96 border rounded-md border-light-gray py-2 sm:py-4 px-2 sm:px-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="rounded border-2 border-dark-gray px-4 py-2" value={username} onChange={handleUsername}/>
            {usernameError && (<p className="text-error">{usernameError}</p>)}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="rounded border-2 border-dark-gray px-4 py-2" value={password} onChange={handlePassword}/>
            {passwordError && (<p className="text-error">{passwordError}</p>)}
          </div>
          <div>
            <p>Don&apos;t have an account? <span><RouterLink to="/signup" className="text-primary hover:underline">Sign Up</RouterLink></span></p>
          </div>
          <div className="flex justify-end">
            <button className="bg-primary text-white font-semibold rounded px-4 py-2 hover:bg-primary-dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn