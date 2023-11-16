import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
    const contextValue = useContext(UserContext);

    // Check if the context value is defined before accessing 'user'
    if (contextValue === undefined) {
        throw new Error('useContext(UserContext) must be used within a UserContextProvider');
    }

    const { user } = contextValue;

    // Use the useEffect hook to listen for changes in the user context
    useEffect(() => {
        // User data has changed, component should re-render
        console.log('User:', user);
    }, [user]);

    return (
        <div>
            <h1>Dashboard</h1>
            <>
                {user?.name && (<h2>Hi {user.name}!</h2>)}
            </>
        </div>
    );
};

export default Dashboard;
