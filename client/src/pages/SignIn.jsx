import React from 'react'
import '../css/SignIn.css'
function SignIn() {
  return (
    <div className="signInContainer">
        <div className="signInCard">
            <h1 className='videoTitle'>
                Sign In
            </h1>
            <p className='smallHeading'>Stay Updated and enjoy best recommendations</p>
            <form >
                <input type="email" name='email' className='smallHeading' placeholder='email' />
                <input type="password" className='smallHeading'  placeholder='password' />
                <p className='tinyTexts'>Forgot Password?</p>
                <button className='signInBtn smallHeading'>Sign In </button>
                <p className='tinyTexts' style={{textAlign:"center"}} >or</p>
                <button className='smallHeading'>Sign In With Google</button>
            </form>
        </div>

    </div>
  )
}

export default SignIn