import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthModal from './components/auth/AuthModal';
import AuthPage from './components/auth/AuthPage';
import VisaDetailModal from './components/visa/VisaDetailModal';
import DiagnosticWizardModal from './components/modals/DiagnosticWizardModal';
import ConsultationModal from './components/modals/ConsultationModal';
import Toast from './components/common/Toast';

// Dedicated Page Views matching Figma Drafts
import VisasPage from './components/pages/VisasPage';
import DestinationsPage from './components/pages/DestinationsPage';
import ServicesPage from './components/pages/ServicesPage';
import ProcessPage from './components/pages/ProcessPage';
import ArticlesPage from './components/pages/ArticlesPage';
import ArticleContentPage from './components/pages/ArticleContentPage';
import FaqsPage from './components/pages/FaqsPage';
import UserDashboardPage from './components/pages/UserDashboardPage';
import HomePage from './components/pages/HomePage';

// Flow Pages matching new batch
import DiagnosticPage from './components/pages/DiagnosticPage';
import DocumentPortalPage from './components/pages/DocumentPortalPage';
import VisaApplicationPage from './components/pages/VisaApplicationPage';
import ReviewApplicationPage from './components/pages/ReviewApplicationPage';

import PaymentPage from './components/pages/PaymentPage';
import PaymentResultPage from './components/pages/PaymentResultPage';

export default function App() {
  // Navigation State:
  // 'home' | 'visas' | 'destinations' | 'services' | 'process' | 'articles' | 'faqs' | 'dashboard' | 'diagnostic' | 'document-portal' | 'visa-application' | 'review-application' | 'payment' | 'payment-success' | 'payment-failed' | 'auth'
  const [activePage, setActivePage] = useState('home');

  const [paymentResultData, setPaymentResultData] = useState(null);

  const [userSession, setUserSession] = useState({
    name: 'Alexander Sterling',
    email: 'alexander.sterling@example.com',
    phone: '+44 7700 900077',
    location: 'London, United Kingdom'
  });

  // Current Application Draft State (passed across application -> review -> dashboard)
  const [currentApplicationDraft, setCurrentApplicationDraft] = useState({
    fullName: 'John Alexander Doe',
    dateOfBirth: '15 Aug 1985',
    nationality: 'United States',
    passportNumber: 'A123456789',
    destination: 'Japan',
    visaType: 'Tourist (Single Entry)',
    intendedArrivalDate: '10 Oct 2024',
    durationOfStay: '14 Days',
    currentEmployer: 'Tech Solutions Inc.',
    jobTitle: 'Senior Software Engineer',
    annualIncome: '$75,000'
  });

  // Modal States
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin');
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);
  const [diagnosticVisa, setDiagnosticVisa] = useState(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [detailVisa, setDetailVisa] = useState(null);

  // Toast Notification State
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleLoginSuccess = (user) => {
    setUserSession(user);
    showToast(`Welcome back, ${user.name}!`);
    setActivePage('dashboard');
  };

  const handleSignOut = () => {
    setUserSession(null);
    showToast('Signed out from GlobalVisa portal.');
  };

  const handleOpenAuth = (mode = 'signin') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleStartDiagnosticFlow = () => {
    setActivePage('diagnostic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartVisaApplication = (presetData = null) => {
    if (presetData) {
      setCurrentApplicationDraft((prev) => ({
        ...prev,
        ...presetData
      }));
    }
    setActivePage('visa-application');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToReview = (formData) => {
    setCurrentApplicationDraft(formData);
    setActivePage('review-application');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToPayment = () => {
    setActivePage('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = (result) => {
    setPaymentResultData(result);
    setActivePage('payment-success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentFailure = (result) => {
    setPaymentResultData(result);
    setActivePage('payment-failed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectVisa = (visa) => {
    setDetailVisa(visa);
  };

  const handleScheduleCall = (visa) => {
    setConsultationModalOpen(true);
  };

  const handleSelectDestination = (destination) => {
    handleStartVisaApplication({
      destination: destination.title || destination.name,
      visaType: `${destination.title || destination.name} Entry Visa`
    });
  };

  const handleSelectService = (service) => {
    showToast(`Service selected: ${service.title}. A specialist will assist you.`);
    setConsultationModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    showToast(`Selected the ${plan.name} Plan ($${plan.price}). Opening application...`);
    handleStartVisaApplication({
      planPrice: plan.price
    });
  };

  return (
    <div className="app-root">
      {/* Top Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAuth={handleOpenAuth}
        onOpenDiagnostic={handleStartDiagnosticFlow}
        userSession={userSession}
      />

      {/* Main Content Area: Direct Page Routing */}
      <main className="main-content">
        {/* 1. Home Tab */}
        {activePage === 'home' && (
          <HomePage
            onStartApplication={handleStartDiagnosticFlow}
            onViewDestinations={() => {
              setActivePage('destinations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectVisa={handleSelectVisa}
            onSelectDestination={handleSelectDestination}
            onSelectService={handleSelectService}
            onSelectPlan={handleSelectPlan}
          />
        )}

        {/* 2. Visas Tab -> Visa Section */}
        {activePage === 'visas' && (
          <VisasPage
            onSelectVisa={handleSelectVisa}
            onScheduleCall={handleScheduleCall}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 3. Destinations Tab -> Destination Section */}
        {activePage === 'destinations' && (
          <DestinationsPage
            onSelectDestination={handleSelectDestination}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 3. Services Tab -> Services Section */}
        {activePage === 'services' && (
          <ServicesPage
            onSelectPlan={handleSelectPlan}
            onSelectService={handleSelectService}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 4. Process Tab -> Process Section */}
        {activePage === 'process' && (
          <ProcessPage
            onStartApplication={handleStartDiagnosticFlow}
            onOpenDiagnostic={handleStartDiagnosticFlow}
            onOpenDocumentPortal={() => {
              setActivePage('document-portal');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 5. Articles Tab -> Articles Page */}
        {activePage === 'articles' && (
          <ArticlesPage
            onSelectArticle={(articleId) => {
              setActivePage('article-content');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 5b. Article Content Page */}
        {activePage === 'article-content' && (
          <ArticleContentPage
            onBackToArticles={() => {
              setActivePage('articles');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 6. FAQs Tab -> FAQ's Page (Image 1) */}
        {activePage === 'faqs' && (
          <FaqsPage
            onShowToast={showToast}
          />
        )}

        {/* 7. User Dashboard */}
        {activePage === 'dashboard' && (
          <UserDashboardPage
            user={userSession}
            onSignOut={handleSignOut}
            onStartApplication={() => handleStartVisaApplication()}
            onShowToast={showToast}
          />
        )}

        {/* 8. Diagnostic Assessment Flow */}
        {activePage === 'diagnostic' && (
          <DiagnosticPage
            onNavigateToApplication={(data) => handleStartVisaApplication(data)}
            onShowToast={showToast}
          />
        )}

        {/* 9. Document Submission Portal */}
        {activePage === 'document-portal' && (
          <DocumentPortalPage
            onShowToast={showToast}
            onProceedToApplication={() => handleStartVisaApplication()}
          />
        )}

        {/* 10. Visa Application Form */}
        {activePage === 'visa-application' && (
          <VisaApplicationPage
            initialData={currentApplicationDraft}
            onProceedToReview={handleProceedToReview}
            onShowToast={showToast}
          />
        )}

        {/* 11. Review Visa Application Page */}
        {activePage === 'review-application' && (
          <ReviewApplicationPage
            applicationData={currentApplicationDraft}
            onEditSection={(section) => {
              setActivePage('visa-application');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSubmitApplication={handleProceedToPayment}
            onShowToast={showToast}
          />
        )}

        {/* 12. Payment Page (Image 2) */}
        {activePage === 'payment' && (
          <PaymentPage
            applicationData={currentApplicationDraft}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentFailure={handlePaymentFailure}
            onBack={() => {
              setActivePage('review-application');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={showToast}
          />
        )}

        {/* 13a. Payment Successful Page (Image 3) */}
        {activePage === 'payment-success' && (
          <PaymentResultPage
            status="success"
            paymentData={paymentResultData || {}}
            onReturnToDashboard={() => {
              setActivePage('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={showToast}
          />
        )}

        {/* 13b. Payment Unsuccessful Page */}
        {activePage === 'payment-failed' && (
          <PaymentResultPage
            status="failure"
            paymentData={paymentResultData || {}}
            onRetryPayment={() => {
              setActivePage('payment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReturnToDashboard={() => {
              setActivePage('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={showToast}
          />
        )}

        {/* 14. Auth Page */}
        {activePage === 'auth' && (
          <AuthPage
            onLoginSuccess={handleLoginSuccess}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Global Footer (Visible on marketing and public pages) */}
      {activePage !== 'dashboard' && activePage !== 'visa-application' && activePage !== 'review-application' && activePage !== 'payment' && activePage !== 'payment-success' && activePage !== 'payment-failed' && (
        <Footer
          setActivePage={setActivePage}
          onOpenAuth={handleOpenAuth}
        />
      )}

      {/* Modals & Overlays */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onShowToast={showToast}
      />

      <VisaDetailModal
        visa={detailVisa}
        isOpen={Boolean(detailVisa)}
        onClose={() => setDetailVisa(null)}
        onApplyNow={(visa) => handleStartVisaApplication({ visaType: visa.title })}
      />

      <DiagnosticWizardModal
        isOpen={diagnosticModalOpen}
        initialVisa={diagnosticVisa}
        onClose={() => setDiagnosticModalOpen(false)}
        onComplete={(assessmentData) => {
          showToast(`Diagnostic assessment completed for ${assessmentData.destination || 'your destination'}!`);
          handleStartVisaApplication(assessmentData);
        }}
      />

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        onBooked={(booking) => {
          showToast(`Strategy call confirmed for ${booking.selectedDate} with ${booking.specialist}`);
        }}
      />

      {/* Toast Notifications */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </div>
  );
}
