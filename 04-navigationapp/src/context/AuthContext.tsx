import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// 1. Definir como luce el Context
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// 2. Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

// 4. Lo usaremos para decir a React cómo luce el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
}

// 3. Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// 5. Exponder el provedor de estado 
export const AuthProvider = ({ children }: any) => {

    // El primer argumento es una función, retorna un nuevo
    // a través de un argumento. Por ejemplo logear, salir.
    const [authState, dispatch] = useReducer( authReducer, authInitialState);

    const signIn = () => {
        dispatch({
            type: 'signIn'
        });
    };

    const changeFavIcon = ( iconName: string ) => {
        dispatch({
            type: 'change-icon',
            payload: iconName
        });
    }

    return (
        <AuthContext.Provider
            value={{
                authState: authState,
                signIn: signIn,
                changeFavIcon: changeFavIcon
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}