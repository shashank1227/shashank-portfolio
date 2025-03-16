import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId, {
    gtagOptions: {
      cookie_flags: 'SameSite=None;Secure',
      cookie_domain: 'auto',
      anonymize_ip: true,
      cookie_update: true,
      cookie_expires: 63072000, // 2 years in seconds
      consent: 'default'
    }
  });
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};

export const logResumeDownload = (source: string = 'mobile-cta') => {
  ReactGA.event({
    category: 'Resume',
    action: 'Download',
    label: source,
  });
};
