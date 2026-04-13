import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Terms of Service | HomeFix Appliance Repair',
  description: 'Terms of Service for HomeFix Appliance Repair. Read our terms and conditions before using our services.',
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: April 13, 2025
          </p>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', lineHeight: '1.8', color: '#374151' }}>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
              <p>By accessing or using the HomeFix Appliance Repair website ("Site") or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services. We reserve the right to update these Terms at any time, and your continued use constitutes acceptance of any changes.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>2. Nature of Our Services</h2>
              <p>HomeFix Appliance Repair is a <strong>marketing and referral service</strong>. We do not directly perform appliance repair services. When you contact us, we connect you with independent, pre-screened appliance repair professionals in your area. We do not employ these technicians, and they operate independently.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>3. Eligibility</h2>
              <p>You must be at least 18 years old and a legal resident of the United States to use our services. By using our Site, you represent and warrant that you meet these eligibility requirements.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>4. Use of the Site</h2>
              <p style={{ marginBottom: '12px' }}>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
                <li style={{ marginBottom: '8px' }}>Submit false or misleading information when requesting service.</li>
                <li style={{ marginBottom: '8px' }}>Use automated tools (bots, scrapers) to access our Site without our written permission.</li>
                <li style={{ marginBottom: '8px' }}>Engage in any activity that disrupts or interferes with the Site's functionality.</li>
                <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorized access to our systems or data.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>5. Service Requests & Third-Party Providers</h2>
              <p>When you submit a service request through our Site or call our phone number, you consent to being contacted by us and by third-party service providers in our network. We make no representations or warranties regarding the quality, timeliness, or outcome of services performed by these independent providers. Any agreements you enter into with a service provider are solely between you and that provider.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>6. No Warranties</h2>
              <p>The Site and referral services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that service professionals will be available in your area or that repairs will be completed to your satisfaction.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, HomeFix Appliance Repair and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or services. Our total liability to you for any direct damages shall not exceed $100.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>8. Telephone Consumer Protection Act (TCPA)</h2>
              <p>By submitting your phone number, you expressly consent to receive calls and/or text messages from HomeFix Appliance Repair and its network partners, including those made using automated dialing equipment, at the number you provided. Consent is not a condition of purchase. Message and data rates may apply. You may opt out at any time by replying STOP.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>9. Intellectual Property</h2>
              <p>All content on this Site, including text, graphics, logos, images, and software, is the property of HomeFix Appliance Repair or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>10. Privacy</h2>
              <p>Your use of the Site is also governed by our <Link href="/privacy-policy" style={{ color: '#e87c2e', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>11. Governing Law & Dispute Resolution</h2>
              <p>These Terms shall be governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>
            </section>

            <section style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>12. Termination</h2>
              <p>We reserve the right to terminate or suspend your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason.</p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>13. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
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
