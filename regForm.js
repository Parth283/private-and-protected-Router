import React from 'react'

export default function regForm() {
    return (
        <div>
            <h1>Registartion Form</h1>
            <form action=''>
                <div>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' id='username'/>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name='email' id='email'/>
                </div>
                <div>
                <label htmlFor='phone'>Phone</label>
                <input type="text" name='phone' id='phone'/>
                </div>
                <label htmlFor='password'>Password</label>
                <input type="text" name='password' id='password'/>
            </form>
        </div>
    )
}
 