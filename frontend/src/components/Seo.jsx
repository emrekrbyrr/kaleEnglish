import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DEFAULT_SITE_URL = process.env.REACT_APP_SITE_URL || "https://kalelift.com";
const DEFAULT_OG_IMAGE = `${DEFAULT_SITE_URL.replace(/\/+$/, "")}/favicon.png`;

function joinUrl(baseUrl, path) {
  const base = (baseUrl || "").replace(/\/+$/, "");
  const p = path && path.startsWith("/") ? path : `/${path || ""}`;
  return `${base}${p}`;
}

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}) {
  const location = useLocation();
  const canonicalUrl = joinUrl(
    DEFAULT_SITE_URL,
    canonicalPath ?? location.pathname ?? "/",
  );

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      {title ? <meta property="twitter:title" content={title} /> : null}
      {description ? <meta property="twitter:description" content={description} /> : null}
      {ogImage ? <meta property="twitter:image" content={ogImage} /> : null}

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
}
