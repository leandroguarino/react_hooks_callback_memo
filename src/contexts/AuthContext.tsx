import React, { createContext, useState } from "react";

interface AuthContextData {
    signed: boolean;
    markAsSigned(): void;
    markAsNotSigned(): void;
  }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    
    const [signed, setSigned] = useState(false)

    function markAsSigned() {
        setSigned(true)
    }

    function markAsNotSigned() {
        setSigned(false)
    }

    return (<AuthContext.Provider value={{ signed, markAsSigned, markAsNotSigned }}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthContext;