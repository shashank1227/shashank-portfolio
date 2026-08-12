import ReactGA from 'react-ga4';

export const GA_MEASUREMENT_ID = 'G-59JRJJSMM1';

let initialized = false;
const seenScrollMarks = new Set<number>();
const seenSections = new Set<string>();

const SCROLL_MARKS = [25, 50, 75, 90, 100] as const;
const SECTION_IDS = ['hero', 'experience', 'projects', 'contact'] as const;

export const shouldTrack = (): boolean => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host !== 'localhost' && host !== '127.0.0.1';
};

const canSend = (): boolean => initialized && shouldTrack();

export const initGA = (measurementId: string = GA_MEASUREMENT_ID) => {
  if (initialized || !shouldTrack()) return;

  ReactGA.initialize(measurementId, {
    gtagOptions: {
      cookie_flags: 'SameSite=None;Secure',
      cookie_domain: 'auto',
      anonymize_ip: true,
      cookie_update: true,
      cookie_expires: 63072000, // 2 years in seconds
      send_page_view: false, // avoid duplicate with manual pageview
    },
  });

  initialized = true;
};

export const logPageView = () => {
  if (!canSend()) return;

  ReactGA.send({
    hitType: 'pageview',
    page: `${window.location.pathname}${window.location.search}`,
    title: document.title,
  });
};

/** GA4 recommended `file_download` for resume PDF */
export const logResumeDownload = (source: string = 'mobile-cta') => {
  if (!canSend()) return;

  ReactGA.event('file_download', {
    file_name: 'Shashank-Resume.pdf',
    file_extension: 'pdf',
    link_text: source,
  });
};

/** Primary CTAs (Explore Projects, etc.) */
export const logCtaClick = (ctaName: string, location: string = 'hero') => {
  if (!canSend()) return;

  ReactGA.event('select_content', {
    content_type: 'cta',
    item_id: ctaName,
    content_id: location,
  });
};

/** Outbound / contact channel clicks */
export const logOutboundClick = (
  url: string,
  label: string,
  location: string = 'unknown'
) => {
  if (!canSend()) return;

  ReactGA.event('click', {
    link_url: url,
    link_text: label,
    outbound: true,
    link_classes: location,
  });
};

/** Contact form outcome — `generate_lead` on success */
export const logContactSubmit = (status: 'success' | 'error') => {
  if (!canSend()) return;

  if (status === 'success') {
    ReactGA.event('generate_lead', {
      form_name: 'contact',
      method: 'formspree',
    });
    return;
  }

  ReactGA.event('form_submit_error', {
    form_name: 'contact',
  });
};

/** Project demo video modal open */
export const logDemoOpen = (projectTitle: string) => {
  if (!canSend()) return;

  ReactGA.event('select_content', {
    content_type: 'demo_video',
    item_id: projectTitle,
  });
};

/** Desktop QR widget interaction (not an actual download) */
export const logQrInteraction = (action: string = 'click') => {
  if (!canSend()) return;

  ReactGA.event('select_content', {
    content_type: 'resume_qr',
    item_id: action,
  });
};

export const logScrollDepth = (percent: number) => {
  if (!canSend() || seenScrollMarks.has(percent)) return;

  seenScrollMarks.add(percent);
  ReactGA.event('scroll', {
    percent_scrolled: percent,
  });
};

export const logSectionView = (sectionId: string) => {
  if (!canSend() || seenSections.has(sectionId)) return;

  seenSections.add(sectionId);
  ReactGA.event('section_view', {
    section_id: sectionId,
  });
};

/**
 * One-time engagement listeners: scroll milestones + section views.
 * Call after GA init. No DOM/layout changes.
 */
export const setupEngagementTracking = () => {
  if (!canSend() || typeof window === 'undefined') return () => {};

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) {
      logScrollDepth(100);
      return;
    }

    const percent = Math.min(
      100,
      Math.round((window.scrollY / scrollable) * 100)
    );

    for (const mark of SCROLL_MARKS) {
      if (percent >= mark) {
        logScrollDepth(mark);
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observers: IntersectionObserver[] = [];

  for (const sectionId of SECTION_IDS) {
    const el = document.getElementById(sectionId);
    if (!el) continue;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            logSectionView(sectionId);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    observers.push(observer);
  }

  return () => {
    window.removeEventListener('scroll', onScroll);
    observers.forEach((observer) => observer.disconnect());
  };
};
