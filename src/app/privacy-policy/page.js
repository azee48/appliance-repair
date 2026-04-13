import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Privacy Policy | HomeFix Appliance Repair',
  description: 'Privacy Policy for HomeFix Appliance Repair. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#e87c2e',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              marginBottom: '32px',
            }}
          >
            ← Back to Home
          </Link>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '8px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: April 13, 2025
          </p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', lineHeight: '1.8', color: '#374151' }}>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>1. Introduction</h2>
              <p>HomeFix Appliance Repair ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for appliance repair services. Please read this policy carefully.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>2. Information We Collect</h2>
              <p style={{ marginBottom: '12px' }}>We may collect the following types of information:</p>
              <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Personal Information:</strong> Name, phone number, email address, and home address when you request a service or fill out a contact form.</li>
                <li style={{ marginBottom: '8px' }}><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li style={{ marginBottom: '8px' }}><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site.</li>
                <li style={{ marginBottom: '8px' }}><strong>Call Data:</strong> If you call us, we may record or log call information for quality assurance purposes.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>3. How We Use Your Information</h2>
              <p style={{ marginBottom: '12px' }}>We use the information we collect to:</p>
              <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
                <li style={{ marginBottom: '8px' }}>Connect you with qualified appliance repair professionals in your area.</li>
                <li style={{ marginBottom: '8px' }}>Respond to your inquiries and provide customer support.</li>
                <li style={{ marginBottom: '8px' }}>Send you service confirmations, updates, and promotional communications (with your consent).</li>
                <li style={{ marginBottom: '8px' }}>Improve our website and services based on usage patterns.</li>
                <li style={{ marginBottom: '8px' }}>Comply with legal obligations and enforce our terms.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>4. Sharing Your Information</h2>
              <p style={{ marginBottom: '12px' }}>We do not sell your personal information. We may share it with:</p>
              <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Service Providers:</strong> Pre-screened appliance repair technicians and companies in your area who fulfil the service request.</li>
                <li style={{ marginBottom: '8px' }}><strong>Business Partners:</strong> Marketing and analytics platforms that help us operate our website (e.g., Google Analytics, Google Ads).</li>
                <li style={{ marginBottom: '8px' }}><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>5. Cookies & Tracking Technologies</h2>
              <p>We use cookies, web beacons, and similar technologies to collect usage data and improve your experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website. We also use Google Ads conversion tracking and Google Analytics to measure ad performance.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>6. Data Security</h2>
              <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. However, no data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>7. Your Rights</h2>
              <p style={{ marginBottom: '12px' }}>Depending on your location, you may have the right to:</p>
              <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
                <li style={{ marginBottom: '8px' }}>Access or request a copy of your personal data.</li>
                <li style={{ marginBottom: '8px' }}>Request correction of inaccurate information.</li>
                <li style={{ marginBottom: '8px' }}>Request deletion of your personal data.</li>
                <li style={{ marginBottom: '8px' }}>Opt out of marketing communications at any time.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>To exercise these rights, please contact us at the information below.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us immediately.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div style={{ marginTop: '12px', padding: '16px 20px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #e87c2e' }}>
                <p style={{ margin: 0 }}><strong>HomeFix Appliance Repair</strong></p>
                <p style={{ margin: '4px 0' }}>Phone: <strong>(866) 565-6212</strong></p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
