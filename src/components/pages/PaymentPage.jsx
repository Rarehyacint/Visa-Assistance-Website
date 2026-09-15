import React, { useState } from 'react';
import { CreditCard, ShieldCheck, GraduationCap, Lock, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PaymentPage({
  applicationData = {},
  onPaymentSuccess,
  onPaymentFailure,
  onBack,
  onShowToast
}) {
  const [paymentForm, setPaymentForm] = useState({
    cardName: 'Juan Dela Cruz',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '12/28',
    cvc: '888',
    simulateResult: 'success' // 'success' | 'failure'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentForm.cardName || !paymentForm.cardNumber || !paymentForm.expiryDate || !paymentForm.cvc) {
      if (onShowToast) onShowToast('Please fill in all credit card payment details.', 'warning');
      return;
    }

    setIsProcessing(true);
    if (onShowToast) onShowToast('Processing your payment securely via 256-bit SSL gateway...', 'info');

    setTimeout(() => {
      setIsProcessing(false);
      if (paymentForm.simulateResult === 'success') {
        if (onShowToast) onShowToast('Payment completed successfully!', 'success');
        if (onPaymentSuccess) {
          onPaymentSuccess({
            referenceNumber: 'GV-2024-8834A',
            serviceName: 'Premium Visa Processing',
            totalPaid: '$634.00',
            date: new Date().toLocaleDateString(),
            cardMask: `Visa ending in ${paymentForm.cardNumber.slice(-4) || '4242'}`
          });
        }
      } else {
        if (onShowToast) onShowToast('Transaction failed: Card declined by issuing bank.', 'error');
        if (onPaymentFailure) {
          onPaymentFailure({
            referenceNumber: 'GV-2024-8834A-ERR',
            serviceName: 'Premium Visa Processing',
            errorCode: 'CARD_DECLINED_ERR_502',
            reason: 'Your bank declined the transaction due to security flag or insufficient funds.',
            totalAttempted: '$634.00'
          });
        }
      }
    }, 1500);
  };

  return (
    <div className="page-view payment-checkout-page animate-fade-in">
      <div className="container payment-checkout-container">
        {/* Back Link */}
        {onBack && (
          <button className="btn-back-nav" onClick={onBack} style={{ marginBottom: '20px' }}>
            <ArrowLeft size={16} />
            <span>Back to Review Application</span>
          </button>
        )}

        {/* Header Title */}
        <div className="payment-checkout-header">
          <h1 className="checkout-title">Secure Checkout</h1>
          <p className="checkout-subtitle">
            Review your selected service and complete your payment securely.
          </p>
        </div>

        {/* 2-Column Split Grid (Image 2) */}
        <div className="checkout-split-grid">
          {/* Left Column: Summary Card */}
          <div className="checkout-summary-card">
            <div className="summary-card-header">
              <div className="summary-service-icon-wrap">
                <GraduationCap size={28} className="summary-service-icon" />
              </div>
              <div className="summary-service-titles">
                <h2 className="summary-service-name">Premium Study Visa Support</h2>
                <p className="summary-service-sub">Expedited processing & dedicated case manager</p>
              </div>
            </div>

            <div className="summary-divider-line"></div>

            {/* Fee Itemization */}
            <div className="summary-fee-list">
              <div className="fee-item-row">
                <span className="fee-label-text">Base Processing Fee</span>
                <span className="fee-dots-spacer"></span>
                <span className="fee-price-val">$299.00</span>
              </div>
              <div className="fee-item-row">
                <span className="fee-label-text">Premium Support Add-on</span>
                <span className="fee-dots-spacer"></span>
                <span className="fee-price-val">$150.00</span>
              </div>
              <div className="fee-item-row">
                <span className="fee-label-text">Government Fees (Est.)</span>
                <span className="fee-dots-spacer"></span>
                <span className="fee-price-val">$150.00</span>
              </div>
            </div>

            <div className="summary-divider-line"></div>

            {/* Total Row */}
            <div className="summary-total-row">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-amount">$634.00</span>
            </div>

            <div className="checkout-security-badge-row">
              <ShieldCheck size={18} className="shield-icon" />
              <span>256-Bit SSL Encrypted & Bank-Grade Security Guarantee</span>
            </div>
          </div>

          {/* Right Column: Payment Details Form */}
          <div className="checkout-payment-card">
            <h2 className="payment-card-title">Payment Details</h2>
            <p className="payment-card-sub">All major credit cards accepted.</p>

            <form onSubmit={handleSubmit} className="payment-checkout-form">
              <div className="form-group-field">
                <label className="field-label-text">Name on Card</label>
                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  value={paymentForm.cardName}
                  onChange={(e) => setPaymentForm({ ...paymentForm, cardName: e.target.value })}
                  className="app-text-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label className="field-label-text">Card Number</label>
                <div className="input-with-icon-wrap">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={paymentForm.cardNumber}
                    onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
                    className="app-text-input"
                    required
                  />
                  <CreditCard size={18} className="input-inner-icon" />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-group-field">
                  <label className="field-label-text">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/DD/YY"
                    value={paymentForm.expiryDate}
                    onChange={(e) => setPaymentForm({ ...paymentForm, expiryDate: e.target.value })}
                    className="app-text-input"
                    required
                  />
                </div>

                <div className="form-group-field">
                  <label className="field-label-text">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={paymentForm.cvc}
                    onChange={(e) => setPaymentForm({ ...paymentForm, cvc: e.target.value })}
                    className="app-text-input"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              {/* Simulation Selector for Testing */}
              <div className="payment-simulation-box">
                <span className="sim-box-label">Simulation Mode:</span>
                <div className="sim-radio-options">
                  <label className="sim-radio-label">
                    <input
                      type="radio"
                      name="simulateResult"
                      value="success"
                      checked={paymentForm.simulateResult === 'success'}
                      onChange={() => setPaymentForm({ ...paymentForm, simulateResult: 'success' })}
                    />
                    <span>Success</span>
                  </label>

                  <label className="sim-radio-label">
                    <input
                      type="radio"
                      name="simulateResult"
                      value="failure"
                      checked={paymentForm.simulateResult === 'failure'}
                      onChange={() => setPaymentForm({ ...paymentForm, simulateResult: 'failure' })}
                    />
                    <span className="sim-fail-text">Unsuccessful (Decline)</span>
                  </label>
                </div>
              </div>

              <div className="payment-submit-wrapper">
                <button
                  type="submit"
                  className="btn-pay-securely-pill"
                  disabled={isProcessing}
                >
                  <Lock size={16} />
                  <span>{isProcessing ? 'Processing Payment...' : 'Pay $634.00 Securely'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
