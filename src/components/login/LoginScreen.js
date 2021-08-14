import React from 'react'
//history viene por defecto del React-routes al momento de enlazarlo al
//componente
export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        //history.push('/');
        //replace no nos deja ir a la anterior vista que seria esta misma
        history.replace('/');
    }


    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>
            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
