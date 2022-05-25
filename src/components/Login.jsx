import React from 'react'
import GoogleLogin from 'react-google-login'
import { refreshTokenSetup } from '../utils/refreshTokenSetup'

export default function Login() {
    const clientId = '412877776800-lsv3llqbsq327t1lpv0v61fmj73nlp26.apps.googleusercontent.com'
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser : ', res.profileObj)

        refreshTokenSetup(res)
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res : ', res)
    }
    return (
        <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_origin'
            isSignedIn={true}
        />
    )
}