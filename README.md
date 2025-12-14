# Rangeway Investor Hub

Investor resources portal for Rangeway Energy, Inc. Built with Jekyll and hosted on GitHub Pages.

## About

The Rangeway Investor Hub provides potential investors with access to key company documents and investment opportunities. Features include:
- Pitch deck presentation
- Executive summary
- Business plan
- Investment inquiries contact
- Password-protected access

**Live URL:** https://investors.rangewayev.com

## Brand Guidelines Implementation

### Brand Colors
- **Warm** (#f4a855) - Primary brand color
- **Charcoal** (#2d2d2d) - Typography and grounding
- **Cream** (#f5f1eb) - Background and supporting color
- **Accent** (#F09060) - Buttons and highlights

### Typography
- **Raleway** - Headlines and wordmark
- **Source Sans Pro** - Body copy and UI elements

### Design Features
- Automatic light/dark mode based on system preference
- Premium hospitality-focused design language
- Responsive mobile-first design
- Document cards with clear navigation

## Site Structure

```
rangeway-investors/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Main page template
├── _includes/
│   ├── header.html       # Site header
│   └── footer.html       # Site footer
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   ├── images/           # Brand imagery
│   └── js/               # JavaScript files
├── documents/
│   ├── pitch-deck.html           # Interactive pitch deck
│   ├── executive-summary.html    # One-page overview
│   ├── business-plan.html        # Detailed business plan
│   └── rangeway-pitch-deck.pdf   # PDF version of deck
├── index.html            # Main investor hub page
├── login.html            # Password-protected access page
├── robots.txt            # Search engine directives
├── CNAME                 # Custom domain config
└── Gemfile               # Ruby dependencies
```

## Page Sections

### Index Page
1. **Hero Section** - "Partner in the Journey"
2. **Key Documents** - Pitch deck, executive summary, business plan
3. **Investment Opportunity** - Community and institutional pathways
4. **Investment Thesis** - Why invest in Rangeway
5. **Market Stats** - Key metrics and projections
6. **Expansion Plan** - Timeline for growth
7. **Contact** - Investor relations information

### Documents
- **Pitch Deck** - Comprehensive investor presentation
- **Executive Summary** - One-page company overview
- **Business Plan** - Detailed financial projections and strategy

## Investment Inquiries

For accredited investors and institutional partners:
- Contact: investors@rangewayev.com

## Local Development

### Prerequisites
- Ruby (2.6+)
- Jekyll and Bundler

### Setup

1. Install dependencies:
```bash
gem install jekyll bundler
bundle install
```

2. Run the site locally:
```bash
bundle exec jekyll serve
```

3. View at `http://localhost:4000`

### Building

```bash
bundle exec jekyll build
```

## Deployment

This site is configured for GitHub Pages. Push to the main branch and GitHub will automatically build and deploy.

### Custom Domain Setup

1. In repository settings, add `investors.rangewayev.com` as custom domain
2. Add CNAME record in DNS pointing to your GitHub Pages URL
3. Enable HTTPS in repository settings

## Security

- Login page is `noindex, nofollow` for search engines
- Password protection via client-side JavaScript
- Sensitive documents require authentication

## Related Sites

- **Main Site:** https://rangewayev.com
- **Newsroom:** https://newsroom.rangeway.energy

## Contact

For investor inquiries: investors@rangewayev.com

---

Last Updated: December 2025
