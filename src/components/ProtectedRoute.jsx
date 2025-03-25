import React, { useEffect } from 'react';
import { useAuth } from '/src/components/AuthContext.jsx';
import { useNavigate } from 'react-router';

function ProtectedRoute({ children }) {
    const auth = useAuth();
    const user = auth.user;
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate, user]);

    return user ? children : null;
}

export default ProtectedRoute;