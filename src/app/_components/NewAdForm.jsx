'use client';
import { useState } from 'react';
import { FiUpload, FiCreditCard, FiInfo } from 'react-icons/fi';

const STEPS = {
  BASIC_INFO: 0,
  MEDIA_UPLOAD: 1,
  PLAN_SELECTION: 2,
  BILLING: 3
};

const PLANS = [
  {
    name: 'Weekly',
    price: '625,000',
    duration: 'Per Week',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time'
    ]
  },
  {
    name: 'Fortnight',
    price: '1,250,000',
    duration: 'Fifteen Days',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Extended Campaign Duration'
    ]
  },
  {
    name: 'Monthly',
    price: '2,500,000',
    duration: 'Per Month',
    popular: true,
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Maximum Campaign Impact',
      'Best Value for Money'
    ]
  }
];

export default function NewAdForm({ onClose }) {
  const [currentStep, setCurrentStep] = useState(STEPS.BASIC_INFO);
  const [formData, setFormData] = useState({
    campaignName: '',
    companyName: '',
    businessAddress: '',
    productName: '',
    description: '',
    video: null,
    selectedPlan: null,
    billingInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: ''
    }
  });
  const [showCustomPlanModal, setShowCustomPlanModal] = useState(false);
  const [videoError, setVideoError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a video element to check dimensions
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = () => {
        // Check if video dimensions match 192x352
        if (video.videoWidth === 192 && video.videoHeight === 352) {
          setFormData(prev => ({ ...prev, video: file }));
          setVideoError('');
        } else {
          setFormData(prev => ({ ...prev, video: null }));
          setVideoError('Video dimensions must be 192x352 pixels');
        }
      };

      video.src = URL.createObjectURL(file);
    }
  };

  const handlePlanSelect = (plan) => {
    setFormData(prev => ({ ...prev, selectedPlan: plan }));
  };

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      billingInfo: {
        ...prev.billingInfo,
        [name]: value
      }
    }));
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case STEPS.BASIC_INFO:
        return formData.campaignName && formData.companyName && formData.businessAddress && 
               formData.productName && formData.description;
      case STEPS.MEDIA_UPLOAD:
        return formData.video && !videoError;
      case STEPS.PLAN_SELECTION:
        return formData.selectedPlan;
      case STEPS.BILLING:
        return Object.values(formData.billingInfo).every(value => value);
      default:
        return false;
    }
  };

  const renderBasicInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Campaign Information</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Name</label>
        <input
          type="text"
          name="campaignName"
          value={formData.campaignName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Address</label>
        <input
          type="text"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
    </div>
  );

  const renderMediaUpload = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Upload Advertisement</h3>
      <div className="flex items-center justify-center w-full">
        <label className="w-full flex flex-col items-center justify-center px-4 py-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg border-2 border-gray-300 dark:border-gray-600 border-dashed cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FiUpload className="w-12 h-12 mb-4" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs">Video (192x352 pixels)</p>
            {videoError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{videoError}</p>
            )}
            {formData.video && !videoError && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">Video uploaded successfully</p>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </label>
      </div>
    </div>
  );

  const renderPlanSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Select a Plan</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all ${
              formData.selectedPlan?.name === plan.name
                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
            onClick={() => handlePlanSelect(plan)}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                Popular
              </span>
            )}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Rs. {plan.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.duration}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="button"
          onClick={() => setShowCustomPlanModal(true)}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <FiInfo className="mr-2" />
          Need a custom plan?
        </button>
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Information</h3>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <FiCreditCard className="h-6 w-6 text-gray-400" />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Secure Payment</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.billingInfo.cardNumber}
              onChange={handleBillingInfoChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.billingInfo.expiryDate}
                onChange={handleBillingInfoChange}
                placeholder="MM/YY"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.billingInfo.cvv}
                onChange={handleBillingInfoChange}
                placeholder="123"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cardholder Name</label>
            <input
              type="text"
              name="name"
              value={formData.billingInfo.name}
              onChange={handleBillingInfoChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.BASIC_INFO:
        return renderBasicInfo();
      case STEPS.MEDIA_UPLOAD:
        return renderMediaUpload();
      case STEPS.PLAN_SELECTION:
        return renderPlanSelection();
      case STEPS.BILLING:
        return renderBilling();
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 px-6 pt-6 pb-6">
        {renderStepContent()}
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => currentStep > 0 ? setCurrentStep(currentStep - 1) : onClose()}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {currentStep === 0 ? 'Cancel' : 'Back'}
          </button>
          <button
            type="button"
            disabled={!isCurrentStepValid()}
            onClick={() => {
              if (currentStep < STEPS.BILLING) {
                setCurrentStep(currentStep + 1);
              } else {
                // Handle form submission
                console.log('Form submitted:', formData);
                onClose();
              }
            }}
            className={`px-6 py-2 rounded-lg text-sm font-medium text-white ${
              isCurrentStepValid()
                ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
            }`}
          >
            {currentStep === STEPS.BILLING ? 'Complete Payment' : 'Continue'}
          </button>
        </div>
      </div>

      {/* Custom Plan Modal */}
      {showCustomPlanModal && (
        <div className="fixed z-[80] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Custom Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please contact our sales team to discuss custom advertising solutions tailored to your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setShowCustomPlanModal(false)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Contact Sales
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomPlanModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 