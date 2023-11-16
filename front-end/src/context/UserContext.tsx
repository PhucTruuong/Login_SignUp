import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext<{ user: any; setUser: React.Dispatch<React.SetStateAction<any>> } | undefined>(undefined);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        if (!user) {
            axios.get('/dashboard')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                    setUser(null);
                });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
