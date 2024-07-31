import { ChangeEvent, useState } from 'react'
import authAPI from '../../api/auth-api';

type AuthProps = {
  setToken: (newToken: string) => void
}

const Auth = (props: AuthProps) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeLoginHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const submitLogin = () => {
    authAPI.login(login, password)
      .then(res => {
        const token = res.data["API-KEY"];
        console.log(res.status);
        setLogin("");
        setPassword("");
        props.setToken(token);
        console.log(token)
      })
  }

  return (
    <div>
      <p>Login:</p>
      <input id="login" type="text" value={login} onChange={changeLoginHandler} />
      <p>Password:</p>
      <input id="password" type="password" value={password} onChange={changePasswordHandler} />
      <button onClick={submitLogin}>Submit</button>
    </div>
  )
}

export default Auth