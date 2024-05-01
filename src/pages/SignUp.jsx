import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        setPasswordConfirmError("Passwords do not match")
      } else if (!usernameError && !passwordError && !passwordConfirmError) {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError(null);
        setUsernameError(null);
        setPasswordConfirmError(null);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
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

  const handlePasswordConfirm = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPasswordConfirmError("Passwords do not match");
    }else {
      setPasswordConfirmError(null);
    }
  }
  return (
    <div className="justify-center items-center flex flex-col">
      <h2 className="my-4 font-semibold text-xl">Sign Up</h2>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="rounded border-2 border-dark-gray px-4 py-2" value={confirmpassword} onChange={handlePasswordConfirm}/>
            {passwordConfirmError && (<p className="text-error">{passwordConfirmError}</p>)}
          </div>
          <div className="flex justify-end">
            <button className="bg-primary text-white font-semibold rounded px-4 py-2 hover:bg-primary-dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp