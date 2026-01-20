# Gather Catering Website

A premium, modern website for Gather Catering - a high-end catering service in Dubai & Abu Dhabi, UAE.

## Features

- 🌐 **Multilingual Support**: English and Arabic with seamless language switching
- 🎥 **Video-Rich Design**: Multiple video sections with various orientations
- 📱 **Fully Responsive**: Optimized for all devices
- 🎨 **Modern UI/UX**: Creative design with smooth animations
- 📧 **Contact Forms**: Email integration for inquiries
- 🔍 **SEO Optimized**: Optimized for UAE market, especially Dubai & Abu Dhabi
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Email**: Nodemailer

## Project Structure

```
gather-catering/
├── app/
│   ├── [locale]/           # Locale-specific routes
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── menu/           # Menu page
│   │   ├── blog/           # Blog page
│   │   └── contact/        # Contact page
│   ├── api/
│   │   └── contact/        # Contact form API
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── VideoHero.tsx
│   ├── Banner.tsx
│   └── VideoSection.tsx
├── lib/                    # Utilities
│   ├── i18n.ts            # i18n configuration
│   └── routing.ts         # Routing configuration
├── messages/              # Translation files
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── public/
│   ├── logos/             # Logo files (white, green, brown)
│   └── media/
│       ├── images/        # Image assets
│       └── videos/        # Video assets
└── ...
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Add Media Files**
   - Place logo files in `public/logos/`:
     - `logo-white.svg` (or .png)
     - `logo-green.svg` (or .png)
     - `logo-brown.svg` (or .png)
   
   - Add videos to `public/media/videos/`:
     - `hero-video.mp4` (main hero video)
     - `about-preview.mp4`
     - `showcase-1.mp4` through `showcase-5.mp4`
     - `about-story-1.mp4`, `about-story-2.mp4`
     - `service-*.mp4` (for services page)
     - `menu-*.mp4` (for menu page)
   
   - Add images to `public/media/images/`:
     - `service-*.jpg` (for services)
     - `blog-*.jpg` (for blog posts)

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Video Placeholders

The website includes placeholders for the following videos:
- Hero video (home page background)
- About preview videos
- Service showcase videos
- Menu category videos
- Blog/feature videos

Replace these with your actual video files while maintaining the same filenames.

## Logo Files

Add your logo files to `public/logos/`:
- **logo-green.svg**: Used in navigation (on light backgrounds)
- **logo-white.svg**: Used in footer (on dark backgrounds)
- **logo-brown.svg**: Available for use on secondary backgrounds

## Brand Colors

- **Primary**: #04544A (Dark Teal/Green)
- **Secondary**: #A38A7A (Warm Brown/Beige)

## SEO Optimization

The website is optimized for:
- Dubai catering services
- Abu Dhabi catering services
- UAE event catering
- Corporate catering Dubai
- Wedding catering UAE

## Contact Email

All contact form submissions are sent to: **contact@gathercatering.ae**

## License

© 2024 Gather Catering. All rights reserved.
