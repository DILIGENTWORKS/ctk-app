import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function AboutFees() {
  const [payerName, setPayerName] = React.useState('');
  const [reference, setReference] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const amountNumber = Number(amount);
  const amountValid = !isNaN(amountNumber) && amountNumber > 0;
  const canDonate = payerName.trim().length > 0 && reference.trim().length > 0 && amountValid;

  const paypalUrl = React.useMemo(() => {
    if (!canDonate) return '';
    const business = 'croydon.tamizh@gmail.com';
    const base = 'https://www.paypal.com/donate';
    const params = new URLSearchParams({
      business,
      currency_code: 'GBP',
      no_recurring: '0',
      source: 'url',
      amount: amountNumber.toFixed(2),
      // Map name+reference to item_name; also pass reference via custom
      item_name: `${payerName} - ${reference}`,
      custom: reference,
    });
    return `${base}?${params.toString()}`;
  }, [canDonate, amountNumber, payerName, reference]);

  return (
    <div className="container section">
      <Helmet>
        <title>Fees & Payments | {BASE_TITLE}</title>
        <meta name="description" content="CTK Fees & Payments – term fees and book price for Croydon Tamil School (Croydon Tamizh Kazhagam) in the UK." />
        <meta name="keywords" content={keywordsContent(['Fees', 'Payments', 'Tamil School UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/about/fees" />
      </Helmet>
      <h2 className="title-bar">Fees & Payments</h2>
      <h3>Basic fees for a Term</h3>
      <ul>
        <li>Term fees payment for 1 kid: £35</li>
        <li>Term fees payment for 2 kids: £70</li>
        <li>Book Price: £7</li>
      </ul>
      <p>
        Please reach out to the treasurer for more details
        {' '}
        <a
          href="mailto:info@croydontamizhkazhagam.org.uk"
          onClick={(e) => {
            // Some dev environments may intercept anchor clicks; force navigation
            e.preventDefault();
            window.location.href = 'mailto:info@croydontamizhkazhagam.org.uk';
          }}
        >
          info@croydontamizhkazhagam.org.uk
        </a>
      </p>

      <div className="aside-card" style={{ marginTop: '1rem' }}>
        <h3 className="title-bar">Pay by PayPal</h3>
        <div className="callout note" style={{ marginBottom: '.75rem' }}>
          <p style={{ margin: 0 }}>
            Please enter the payer name, a clear reference (e.g., student name and class), and the amount to pay.
            You will be redirected to PayPal to complete the payment to our official account.
          </p>
        </div>
        <div className="form" style={{ display: 'grid', gap: '.5rem', maxWidth: 420, margin: '0 auto' }}>
          <input
            placeholder="Payer name (e.g., Parent or Student)"
            value={payerName}
            onChange={(e) => setPayerName(e.target.value)}
            aria-label="Payer name"
          />
          <input
            placeholder="Reference (e.g., Arun K / Year 3)"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            aria-label="Payment reference"
          />
          <input
            placeholder="Amount (GBP £) – e.g., 35.00"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Amount in GBP"
          />
          {canDonate ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href={paypalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate via PayPal"
              >
                <img
                  className="paypal-img"
                  src="https://www.paypalobjects.com/en_GB/i/btn/btn_donateCC_LG.gif"
                  alt="Donate with PayPal button"
                />
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.6, pointerEvents: 'none' }}>
              <img
                className="paypal-img"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_donateCC_LG.gif"
                alt="Donate with PayPal button"
              />
            </div>
          )}
          <small>Payments are processed securely by PayPal (GBP). Ensure the reference helps us identify the student.</small>
        </div>
      </div>
    </div>
  );
}
