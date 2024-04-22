import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};