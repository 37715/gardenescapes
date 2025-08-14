import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReviewsSlider from './components/ReviewsSlider';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CalloutStrip from './components/CalloutStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import ActionsBar from './components/ActionsBar';

function App() {
  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Garden Escapes Landscaping Ltd",
            "telephone": "+447939212973",
            "email": "john@gardenescapes.me.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "74A Rails Lane",
              "addressLocality": "Hayling Island",
              "postalCode": "PO11 9LP",
              "addressCountry": "GB"
            },
            "url": window.location.origin,
            "description": "Professional landscaping services including garden design, patios, driveways, and groundworks. 20+ years experience in Portsmouth and surrounding areas."
          })
        }}
      />
      
      <Header />
      <main>
        <Hero />
        <ReviewsSlider />
        <About />
        <Services />
        <Gallery />
        <CalloutStrip />
        <Contact />
      </main>
      <Footer />
      <ActionsBar />
      <ChatbotWidget />
    </div>
  );
}

export default App;