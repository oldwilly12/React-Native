// probeer infromacion de manera global pasar el estado, el tema
// cuando queramos compartir informacion en todo el tema

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated',
}

interface AuthState {
    status: AuthStatus;
    token?: string;

    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;

    //method
    loginWithEmailPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);


export const useAuthContext = () => useContext(AuthContext)


// probeedor 
export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>()

    useEffect(() => {

        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated)
        }, 1500);
    }, []);

    const loginWithEmailPassword = (email: string, password: string) => {
        console.log(password)
        setUser({
            name: 'willy',
            email: email,
        })
        setStatus(AuthStatus.authenticated);
    }

    const logout = () => {
        setUser(undefined)
        setStatus(AuthStatus.unauthenticated);
    }

    // Regresar un componente
    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            // Getter
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,

            //Method
            loginWithEmailPassword,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
