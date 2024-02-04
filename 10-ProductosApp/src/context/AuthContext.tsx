import { createContext, useEffect, useReducer } from "react";
import { LoginData, LoginResponse, Usuario } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from "./authReducer";
import CafeApi from "../api/cafeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    // Permite revisar si aun estoy logeando
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const initialState: AuthState = {
    errorMessage: '',
    status: 'checking',
    token: null,
    user: null,
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        if( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token 
        const resp = await CafeApi.get('/auth');
        if( resp.status != 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })
    }
    
    const signIn = async({ correo, password }: LoginData) => {
        try {

            const response = await CafeApi.post<LoginResponse>('/auth/login', {
                correo,
                password
            })
            
            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            });

            await AsyncStorage.setItem('token', response.data.token);
            
        } catch (error) {
            console.log(error.response.data);
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
    const signUp = () => {};

    const logOut = () => {};

    const removeError = () => {
        dispatch({
            type: 'removeError'
        })
    };

    return(
        <AuthContext.Provider
            value={{
                ...state,
                signUp,
                signIn,
                logOut,
                removeError
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}