import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://techtwistglobal.com/images/opengraph.jpg",
  ogType = "website",
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Primary SEO
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "Tech Twist Global");

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("og:type", ogType, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "Tech Twist Global", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:url", canonical);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector("#structured-data") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Remove structured data on unmount
      const sd = document.querySelector("#structured-data");
      if (sd) sd.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);

  return null;
}
