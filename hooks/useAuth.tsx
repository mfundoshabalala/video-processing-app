import React, { createContext, useState } from 'react';

interface AuthProviderInterface {
	token: null;
	setToken: React.Dispatch<React.SetStateAction<null>>;
}

export const AuthContext = createContext<AuthProviderInterface | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [token, setToken] = useState(null);
	return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

// export const useAuth = () => useContext(AuthContext);
