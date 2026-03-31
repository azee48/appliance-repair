export const trackCallConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17958953115/QokOCPK_kJIcEJvBv_NC',
      'value': 1.0,
      'currency': 'USD',
    });
  }
};
