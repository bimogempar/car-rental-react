import React from 'react'
import { GoogleLogout } from 'react-google-login'

export default function Logout() {
    const clientId = '412877776800-lsv3llqbsq327t1lpv0v61fmj73nlp26.apps.googleusercontent.com'

    const onLogoutSuccess = (res) => {
        console.log('[Logout Success] res : ', res)
    }
    return (
        <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onLogoutSuccess}
        />
    )
}
