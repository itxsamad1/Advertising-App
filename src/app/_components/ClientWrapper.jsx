'use client';
import dynamic from 'next/dynamic';

// Loading components
const LoadingPlaceholder = ({ className }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
  </div>
);

// Components that are not required at first render
export const DynamicPlansSection = dynamic(() => import('./PlansSection'), {
  loading: () => <LoadingPlaceholder className="min-h-[400px] bg-gradient-to-b from-white dark:from-gray-900 to-blue-50 dark:to-gray-800" />,
  ssr: false
});

export const DynamicFeaturesSection = dynamic(() => import('./FeaturesSection'), {
  loading: () => <LoadingPlaceholder className="min-h-[400px] bg-white dark:bg-gray-900" />,
  ssr: false
});

export const DynamicLocationsSection = dynamic(() => import('./LocationsSection'), {
  loading: () => <LoadingPlaceholder className="min-h-[400px] bg-gray-50 dark:bg-gray-900" />,
  ssr: false
});

export const DynamicAboutSection = dynamic(() => import('./AboutSection'), {
  loading: () => <LoadingPlaceholder className="min-h-[400px] bg-white dark:bg-gray-900" />,
  ssr: false
});

export default function ClientWrapper({ children }) {
  return <>{children}</>;
} 