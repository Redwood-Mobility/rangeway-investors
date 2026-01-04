# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rangeway Investor Hub - Jekyll-based investor relations portal for Rangeway Energy, Inc. Provides access to pitch deck, executive summary, and business plan. Hosted on GitHub Pages at investors.rangewayev.com.

## Build & Development Commands

```bash
# Install dependencies
bundle install

# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

Deployment is automatic via GitHub Pages on push to `main` branch.

## Project Structure

```
/
├── _config.yml              # Jekyll config, organization info, page metadata
├── _layouts/default.html    # Main layout
├── _includes/
│   ├── header.html          # Site header
│   └── footer.html          # Site footer
├── assets/
│   ├── css/main.css         # Main stylesheet with CSS variables
│   ├── images/              # Brand imagery, OG images
│   └── js/main.js           # JavaScript
├── documents/
│   ├── pitch-deck.html      # Interactive pitch deck
│   ├── executive-summary.html
│   ├── business-plan.html
│   └── rangeway-pitch-deck.pdf
├── index.html               # Main investor hub page
├── login.html               # Password-protected access page
└── CNAME                    # Custom domain
```

## Brand Colors

```css
--warm: #f4a855;      /* Primary brand color */
--charcoal: #2d2d2d;  /* Typography */
--cream: #f5f1eb;     /* Background */
--accent: #F09060;    /* Buttons and highlights */
```

## Typography

- **Raleway** - Headlines and wordmark
- **Source Sans Pro** - Body copy and UI elements

## Key Features

- Automatic light/dark mode based on system preference
- Premium hospitality-focused design language
- Responsive mobile-first design
- Password-protected document access (client-side JS)

## Configuration

`_config.yml` contains:
- Organization info (name, email, phone, address)
- Social media links
- Investment contact info
- Page-specific metadata (title, description, keywords, og_image)
- Asset versioning via `asset_version`

## Dependencies

- Jekyll (via github-pages gem)
- jekyll-seo-tag plugin
- Google Fonts (Raleway, Source Sans Pro)
