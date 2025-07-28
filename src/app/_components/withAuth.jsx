'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

export default function withAuth(Component, allowedRoles = []) {
  return function ProtectedRoute({ ...props }) {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/signin');
        return;
      }

      if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        router.push('/dashboard/access-denied');
      }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated) {
      return null;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
      return null;
    }

    return <Component {...props} />;
  };
} 