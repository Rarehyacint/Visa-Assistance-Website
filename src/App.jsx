import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Dedicated Page Views matching Figma Drafts
import VisasPage from './components/pages/VisasPage';
import DestinationsPage from './components/pages/DestinationsPage';
import ServicesPage from './components/pages/ServicesPage';
import ProcessPage from './components/pages/ProcessPage';
import ArticleContentPage from './components/pages/ArticleContentPage';
import FaqsPage from './components/pages/FaqsPage';
import UserDashboardPage from './components/pages/UserDashboardPage';

// Flow Pages matching new batch
import DiagnosticPage from './components/pages/DiagnosticPage';
import DocumentPortalPage from './components/pages/DocumentPortalPage';
import VisaApplicationPage from './components/pages/VisaApplicationPage';
import ReviewApplicationPage from './components/pages/ReviewApplicationPage';

// Modals & Overlays
import AuthPage from './components/auth/AuthPage';
import AuthModal from './components/auth/AuthModal';
import DiagnosticWizardModal from './components/modals/DiagnosticWizardModal';
import ConsultationModal from './components/modals/ConsultationModal';
import VisaDetailModal from './components/visa/VisaDetailModal';
import Toast from './components/common/Toast';

export default function App() {
  // Navigation State:
  // 'visas' | 'destinations' | 'services' | 'process' | 'articles' | 'faqs' | 'dashboard' | 'diagnostic' | 'document-portal' | 'visa-application' | 'review-application' | 'auth'
  const [activePage, setActivePage] = useState('visas');

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

  const handleFinalSubmitApplication = (finalData) => {
    showToast('Application successfully submitted! Dossier received by legal review team.', 'success');
    setActivePage('dashboard');
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
        {/* 1. Visas Tab -> Visa Section */}
        {(activePage === 'visas' || activePage === 'home') && (
          <VisasPage
            onSelectVisa={handleSelectVisa}
            onScheduleCall={handleScheduleCall}
            onStartApplication={handleStartDiagnosticFlow}
          />
        )}

        {/* 2. Destinations Tab -> Destination Section */}
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

        {/* 5. Articles Tab -> Article Content Page */}
        {(activePage === 'articles' || activePage === 'article-content') && (
          <ArticleContentPage
            onStartApplication={handleStartVisaApplication}
          />
        )}

        {/* 6. FAQs Tab -> FAQ's Page */}
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

        {/* 8. Diagnostic Assessment Flow (Image 1) */}
        {activePage === 'diagnostic' && (
          <DiagnosticPage
            onNavigateToApplication={(data) => handleStartVisaApplication(data)}
            onShowToast={showToast}
          />
        )}

        {/* 9. Document Submission Portal (Image 2) */}
        {activePage === 'document-portal' && (
          <DocumentPortalPage
            onShowToast={showToast}
            onProceedToApplication={() => handleStartVisaApplication()}
          />
        )}

        {/* 10. Visa Application Form (Image 3) */}
        {activePage === 'visa-application' && (
          <VisaApplicationPage
            initialData={currentApplicationDraft}
            onProceedToReview={handleProceedToReview}
            onShowToast={showToast}
          />
        )}

        {/* 11. Review Visa Application Page (Image 4) */}
        {activePage === 'review-application' && (
          <ReviewApplicationPage
            applicationData={currentApplicationDraft}
            onEditSection={(section) => {
              setActivePage('visa-application');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSubmitApplication={handleFinalSubmitApplication}
            onShowToast={showToast}
          />
        )}

        {/* 12. Auth Page */}
        {activePage === 'auth' && (
          <AuthPage
            onLoginSuccess={handleLoginSuccess}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Global Footer (Visible on marketing and public pages) */}
      {activePage !== 'dashboard' && activePage !== 'visa-application' && activePage !== 'review-application' && (
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
