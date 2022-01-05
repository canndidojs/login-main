import React, { useState } from "react";
import "./index.css";
import {  MdEmail,
    MdLockOutline,
    MdSentimentSatisfiedAlt  } from 'react-icons/md';


    

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };



  return (    
    <div className="principal">

  
 <div className="login-logo">
     <img 
     src="https://cutewallpaper.org/21/nike-logo-transparent-background/White-Nike-Logo-Png-Pictures-trzcacak.rs.png"
     alt="Login App">    
     </img>
 </div>


      <div className="login-esquerdo">
        <h1>Faça login para continuar</h1>

        <div className="form">
          <div className="loginInputEmail">
            <MdEmail />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="loginInputPassword">
            <MdLockOutline />
            <input
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

{/*
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>]

            */}

          <button className="botaoEntrar" type="submit">
            Entrar
          </button>

          <h4> </h4>

          <button className="botaoCadastrar" type="submit">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
