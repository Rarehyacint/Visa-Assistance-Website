import React from 'react';
import { Check, X, RefreshCw, LayoutDashboard, AlertOctagon, FileText, ArrowRight } from 'lucide-react';

export default function PaymentResultPage({
  status = 'success', // 'success' | 'failure'
  paymentData = {},
  onReturnToDashboard,
  onRetryPayment,
  onShowToast
}) {
  const isSuccess = status === 'success';

  const refNumber = paymentData.referenceNumber || (isSuccess ? 'GV-2024-8834A' : 'GV-2024-8834A-ERR');
  const serviceName = paymentData.serviceName || 'Premium Visa Processing';
  const amount = paymentData.totalPaid || paymentData.totalAttempted || '$634.00';
  const reason = paymentData.reason || 'Card declined by issuing bank due to security check or insufficient funds.';

  return (
    <div className={`page-view payment-result-page animate-fade-in ${isSuccess ? 'status-success' : 'status-failed'}`}>
      <div className="container payment-result-container">
        <div className="payment-result-center-card">
          {/* Top Status Circle Icon matching Image 3 */}
          <div className={`result-status-circle ${isSuccess ? 'circle-green' : 'circle-red'}`}>
            {isSuccess ? (
              <Check size={36} className="status-svg-icon" />
            ) : (
              <X size={36} className="status-svg-icon" />
            )}
          </div>

          {/* Main Titles */}
          <h1 className="result-main-title">
            {isSuccess ? 'Payment Successful' : 'Payment Unsuccessful'}
          </h1>

          <p className="result-subtitle-text">
            {isSuccess
              ? "Your transaction has been processed successfully. We've sent a receipt to your email."
              : 'We were unable to complete your transaction. Please check your payment details or try another card.'}
          </p>

          {/* Order Details Card matching Image 3 */}
          <div className="order-details-box">
            <h2 className="order-details-title">Order Details</h2>
            <div className="order-details-line"></div>

            <div className="order-meta-rows">
              <div className="order-meta-item">
                <span className="order-meta-label">Reference Number</span>
                <span className="order-meta-value">{refNumber}</span>
              </div>

              <div className="order-meta-item">
                <span className="order-meta-label">Service</span>
                <span className="order-meta-value">{serviceName}</span>
              </div>

              {!isSuccess && (
                <div className="order-meta-item item-error-reason">
                  <span className="order-meta-label">Decline Reason</span>
                  <span className="order-meta-value text-red-failure">{reason}</span>
                </div>
              )}
            </div>

            <div className="order-details-line"></div>

            <div className="order-total-item">
              <span className="order-total-label">{isSuccess ? 'Total Paid' : 'Amount Attempted'}</span>
              <span className="order-total-value">{amount}</span>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="result-actions-row">
            {!isSuccess && onRetryPayment && (
              <button
                type="button"
                className="btn-retry-payment-pill"
                onClick={onRetryPayment}
              >
                <RefreshCw size={15} />
                <span>Try Payment Again</span>
              </button>
            )}

            <button
              type="button"
              className="btn-return-dashboard-pill"
              onClick={() => {
                if (onReturnToDashboard) onReturnToDashboard();
                if (onShowToast) onShowToast('Returned to User Dashboard.', 'info');
              }}
            >
              <LayoutDashboard size={15} />
              <span>Return to Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
