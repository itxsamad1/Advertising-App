import PlansSection from '../_components/PlansSection';

export default function PlansPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Our Advertising Plans
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect advertising package for your business. From short-term promotions to long-term campaigns, we have a plan that fits your needs.
          </p>
        </div>
      </div>
      <PlansSection />
    </div>
  );
} 