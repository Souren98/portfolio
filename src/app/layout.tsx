import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import { Person, WithContext } from "schema-dts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Souren",
  description: "Explore my portfolio showcasing my skills in web development, React, and Next.js.",
  keywords: ["Next.js", "React", "Web Development", "Portfolio", "Frontend Developer"],
  authors: [{ name: "Souren", url: "https://yourwebsite.com" }], // Corrected the author name
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio | Souren",
    description: "Explore my portfolio showcasing my skills in web development, React, and Next.js.",
    url: "https://souranportfolio.com",
    siteName: "Souren's Portfolio",
    images: [
      {
        url: "https://souranportfolio.com/og-image.jpg", // Ensure this image is available
        width: 1200,
        height: 630,
        alt: "Portfolio | Souren",
      },
    ],
    type: "website",
    locale: "en_US", // Added locale for better reach
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Souren",
    description: "Explore my portfolio showcasing my skills in web development, React, and Next.js.",
    site: "@your_twitter_handle", // Ensure this is your actual Twitter handle
    images: ["https://souranportfolio.com/og-image.jpg"],
  },
};


// SCHEMA - Person
const jsonLdPerson: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Souren Laheri",
  jobTitle: "Front-end Developer",
  description:
    "Experienced front-end developer specializing in React.js, Next.js, and Material UI. Explore my portfolio for web development projects, skills, and achievements.",
  url: "https://sdportfolio.com",
  image: "/images/profile.jpg",
  sameAs: [
    "https://www.linkedin.com/in/souren-laheri",
    "https://github.com/SourenLaheri",
    "https://twitter.com/SourenLaheri",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Material UI",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Webskitters Academy",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Portfolio Inquiry",
    email: "contact@sdportfolio.com",
    telephone: "+91 9876543210",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance Web Developer",
  },
};

// SCHEMA - Pages
const jsonLdPages = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Page",
    url: "https://sdportfolio.com",
    description:
      "Welcome to Souren Laheri's portfolio home page showcasing skills, experience, and projects.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Page",
    url: "https://sdportfolio.com/about",
    description:
      "Learn more about Souren Laheri's skills, educational background, and journey as a front-end developer.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projects Page",
    url: "https://sdportfolio.com/projects",
    description:
      "Explore web development projects by Souren Laheri, showcasing creativity and technical skills.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Page",
    url: "https://sdportfolio.com/contact",
    description:
      "Get in touch with Souren Laheri for web development inquiries, collaborations, or project discussions.",
  },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
       <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id="pages-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPages) }}
        />
         {jsonLdPages.map((schema, index) => (
          <Script
            key={`page-schema-${index}`}
            id={`page-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      <body className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
