import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: 700,
        fontSize: '1.05rem',
        letterSpacing: '-0.02em',
        background: 'linear-gradient(135deg, #f5a623 0%, #ffb84d 45%, #e8472a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      GoToKart
    </span>
  ),
  project: {
    link: 'https://github.com/gotokart',
  },
  chat: {
    link: 'https://github.com/gotokart/docs/discussions',
  },
  docsRepositoryBase: 'https://github.com/gotokart/docs/tree/main',
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give feedback →',
  },
  footer: {
    text: (
      <span>
        GoToKart documentation — built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noreferrer">
          Nextra
        </a>
      </span>
    ),
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: 38,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      return <>{title}</>
    },
  },
  head: (
    <>
      <meta name="theme-color" content="#0a0a0f" />
      <meta name="description" content="GoToKart — e-commerce platform documentation" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s | GoToKart Docs',
    }
  },
}

export default config
