import * as Sentry from "@sentry/react";
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";

const SentryConfig = () => {
  // Initialize Sentry here
  useEffect(() => {
    Sentry.init({
      dsn: "https://e7c30d0577c71dd09e52a74dd6104ac3@o4508477865525248.ingest.de.sentry.io/4508477899800656",
      integrations: [
        Sentry.reactRouterV6BrowserTracingIntegration({
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes,
        }),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1.0,
      tracePropagationTargets: [/^\//, /^https:\/\/api.itgalaxy.io\.io\/v1/],
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }, []);

  return null; // This component does not render anything
};

export default SentryConfig;