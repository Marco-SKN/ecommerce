import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");
  function loginSubmit(e) {
    e.preventDefault();
    const loginDetails = {
      username: userName,
      password: pw,
    };

    console.log(loginDetails);
    axios
      .post("http://localhost:5000/new", loginDetails)
      .then((res) => console.log(res.json()));
  }

  const getUser = async () => {
    try {
      const result = await axios("http://localhost:5000/user");
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={loginSubmit}>
        <label>Username: </label>
        <input
          placeholder="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password: </label>
        <input
          placeholder="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <button type="submit">LOGIN</button>
      </form>
      <button onClick={getUser}>Get User</button>
    </div>
  );
};

export default Login;
