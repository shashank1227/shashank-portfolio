import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId, {
    gtagOptions: {
      cookie_flags: 'SameSite=Strict;Secure',
      cookie_domain: 'auto',
      anonymize_ip: true
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
