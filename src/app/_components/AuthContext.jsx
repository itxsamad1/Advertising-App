'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Pre-defined admin and manager accounts
const ADMIN_USERS = [
  { email: 'admin@intelik.net', password: 'admin123', role: 'admin' },
];

const MANAGER_USERS = [
  { email: 'manager@intelik.net', password: 'manager123', role: 'manager' },
];

// Pre-defined regular user account
const DEFAULT_USERS = [
  { email: 'user@example.com', password: 'user123', role: 'user' },
];

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // Initialize default users in localStorage if not present
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
      localStorage.setItem('users', JSON.stringify(DEFAULT_USERS));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Check admin users first
    const adminUser = ADMIN_USERS.find(u => u.email === email && u.password === password);
    if (adminUser) {
      const userData = { email: adminUser.email, role: adminUser.role };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      router.push('/dashboard/admin');
      return true;
    }

    // Check manager users
    const managerUser = MANAGER_USERS.find(u => u.email === email && u.password === password);
    if (managerUser) {
      const userData = { email: managerUser.email, role: managerUser.role };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      router.push('/dashboard/manager');
      return true;
    }

    // Check regular users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const regularUser = users.find(u => u.email === email && u.password === password);
    if (regularUser) {
      const userData = { email: regularUser.email, role: 'user' };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      router.push('/dashboard/user');
      return true;
    }

    return false;
  };

  const signup = (email, password, name) => {
    // Check if email already exists in predefined users
    if (ADMIN_USERS.some(u => u.email === email) || MANAGER_USERS.some(u => u.email === email)) {
      return false;
    }

    // Check if email exists in regular users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
      return false;
    }

    // Add new user
    const newUser = { email, password, name, role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Log in the new user
    const userData = { email: newUser.email, role: newUser.role };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    router.push('/dashboard/user');
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 