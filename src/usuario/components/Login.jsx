import React from 'react'
import "../styles/Login.css"

function Login() {
    return (
        <div className='usuario-log'>
            <div className='cont-login'>
                <div className='login-img'>
                    <img src="" alt="Logo Tienda Deportiva Suchas" />
                </div>
                <div className='login info'>
                    <h2>Registrate para acceder a nuestra tienda</h2>
                    <hr/>
                    <div className='inputs'>
                        <input type="text" placeholder="Name" className="name"/>
                        <input type="email" placeholder='Email' className='email' />
                        <input type="password" placeholder="Password" className="pass"/>
                    </div>
                    <button>Login</button>      
                    <p className="link">
                        <a href="a">Forgot password ?</a>  Or  <a href="a"> Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export {Login}