import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const AuthContext = React.createContext({
    user: null,
    setUser: () => {}
})

export default AuthContext;

export function AuthProvider({children}) {
    const [user, setUser] = React.useState(null)

    console.log(user)

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            <GoogleOAuthProvider clientId="85473638630-24iou142o06ieamnrcod5hg9s63km9fv.apps.googleusercontent.com">
                {children}
            </GoogleOAuthProvider>
        </AuthContext.Provider>
    )
}