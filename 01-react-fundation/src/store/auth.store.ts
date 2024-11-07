import { create } from "zustand";


interface AuthState {
    status: 'authenticated' | 'unauthenticated' |'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }
}
// entre parentesis es un vallback que retorna un objeto () => ({ ... })
// set: primer argumento sirve para disparar la creacion de un nuevo estado en el store
export const useAuthStore = create<AuthState> ()((set) => ({
    status: 'checking',
    token: 'undefined',
    user: undefined,
})
);