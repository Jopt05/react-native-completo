import { AuthState } from "./AuthContext";

// Especifica las acciones posibles
type AuthAction = 
    | { type: 'signIn' }
    | { type: 'change-icon', payload: string }
;

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username'
            }
        
        case 'change-icon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
    
        default:
            return state;
    }

}