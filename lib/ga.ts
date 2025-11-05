// Simple Google Analytics event tracking helper
// Works when GA script is active (GoogleAnalytics in app/layout)

export type GAEventParams = {
  action: string; // event name
  category?: string; // e.g. 'engagement', 'navigation', 'social', 'form'
  label?: string; // descriptive label
  value?: number; // numeric value if applicable
  params?: Record<string, any>; // extra GA4 params
};

export function trackEvent({ action, category, label, value, params }: GAEventParams) {
  try {
    if (typeof window === 'undefined') return;
    const gtag = (window as any).gtag;
    if (!gtag) {
      if (process.env.NEXT_PUBLIC_GA_DEBUG === 'true') {
        console.debug('[GA] gtag not ready', { action });
      }
      return;
    }

    const payload: Record<string, any> = { ...(params || {}) };
    if (category) payload.event_category = category;
    if (label) payload.event_label = label;
    if (typeof value === 'number') payload.value = value;

    // Debug mode to surface events in DebugView
    if (process.env.NEXT_PUBLIC_GA_DEBUG === 'true') {
      payload.debug_mode = true;
      console.debug('[GA] event', action, payload);
    }

    // Explicitly set send_to when available (useful with multiple properties)
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      payload.send_to = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    }

    gtag('event', action, payload);
  } catch (err) {
    if (process.env.NEXT_PUBLIC_GA_DEBUG === 'true') {
      console.error('[GA] event error', err);
    }
  }
}

export function trackPageView(path?: string) {
  try {
    if (typeof window === 'undefined') return;
    const gtag = (window as any).gtag;
    if (!gtag) return;

    const payload: Record<string, any> = {
      page_path: path || window.location.pathname,
    };

    if (process.env.NEXT_PUBLIC_GA_DEBUG === 'true') {
      payload.debug_mode = true;
      console.debug('[GA] page_view', payload);
    }

    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      payload.send_to = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    }

    gtag('event', 'page_view', payload);
  } catch (err) {
    if (process.env.NEXT_PUBLIC_GA_DEBUG === 'true') {
      console.error('[GA] page_view error', err);
    }
  }
}
