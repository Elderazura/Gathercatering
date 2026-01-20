# Gather Catering - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd gather-catering
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
   
   > **Note**: For Gmail, generate an App Password:
   > - Go to Google Account > Security > 2-Step Verification > App Passwords
   > - Create an app password for "Mail"

3. **Add Your Assets**

   ### Logos (Required)
   Place your logo files in `public/logos/`:
   - `logo-white.svg` or `logo-white.png` - for dark backgrounds (footer)
   - `logo-green.svg` or `logo-green.png` - for light backgrounds (navigation)
   - `logo-brown.svg` or `logo-brown.png` - optional, for secondary backgrounds

   ### Videos (Required for Full Experience)
   Add videos to `public/media/videos/`:
   
   **Home Page:**
   - `hero-video.mp4` - Main hero background video (required)
   - `about-preview.mp4` - About preview section
   - `showcase-1.mp4` through `showcase-5.mp4` - Video showcase section

   **About Page:**
   - `about-story-1.mp4`
   - `about-story-2.mp4`

   **Services Page:**
   - `service-catering.mp4`
   - `service-setup.mp4`
   - `service-coordination.mp4`
   - `service-menu.mp4`

   **Menu Page:**
   - `menu-appetizers.mp4`
   - `menu-maincourses.mp4`
   - `menu-desserts.mp4`
   - `menu-beverages.mp4`

   ### Images (Optional but Recommended)
   Add images to `public/media/images/`:
   - `service-*.jpg` - Service images
   - `blog-*.jpg` - Blog post images

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Visit: http://localhost:3000

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
gather-catering/
├── app/
│   ├── [locale]/              # Locale-specific pages
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── services/         # Services page
│   │   ├── menu/             # Menu page
│   │   ├── blog/             # Blog page
│   │   └── contact/          # Contact page
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   └── layout.tsx            # Root layout
├── components/                # React components
├── lib/                       # Utilities & configuration
├── messages/                  # Translation files (en.json, ar.json)
├── public/
│   ├── logos/                # Your logo files
│   └── media/
│       ├── images/           # Image assets
│       └── videos/           # Video assets
└── ...
```

## Features Implemented

✅ **Multilingual Support**: English & Arabic with toggle button  
✅ **Video Hero**: Home page with full-screen video background  
✅ **All Pages**: Home, About, Services, Menu, Blog, Contact  
✅ **Contact Form**: Email integration (sends to contact@gathercatering.ae)  
✅ **SEO Optimized**: UAE market (Dubai & Abu Dhabi focus)  
✅ **Responsive Design**: Works on all devices  
✅ **Creative UI**: Modern design with animations  
✅ **Video Showcase**: Multiple videos with different orientations  

## Language Switching

Users can switch between English and Arabic using the button in the top-right navigation. The site automatically adjusts:
- Text direction (LTR/RTL)
- All content translations
- Navigation and UI elements

## Contact Form

The contact form sends emails to **contact@gathercatering.ae** using the configured SMTP settings. Make sure to:
1. Set up environment variables (see step 2)
2. Test the form after deployment
3. Check spam folder if emails aren't received

## Brand Colors

- **Primary**: #04544A (Dark Teal/Green)
- **Secondary**: #A38A7A (Warm Brown/Beige)

These colors are used throughout the site and can be customized in `tailwind.config.js`.

## SEO Keywords

The site is optimized for:
- Catering Dubai
- Catering Abu Dhabi
- Event catering UAE
- Corporate catering Dubai
- Wedding catering UAE
- International catering Dubai

## Troubleshooting

### Videos not displaying
- Check file paths match exactly
- Ensure video files are in correct format (mp4 recommended)
- Check browser console for errors

### Logos not showing
- Verify logo files are in `public/logos/` folder
- Check file names match exactly (case-sensitive)
- Website will display text fallback if logos are missing

### Contact form not working
- Verify SMTP credentials in `.env.local`
- Check email is not going to spam
- Review server logs for errors

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear `.next` folder and rebuild

## Next Steps

1. Replace video placeholders with actual content
2. Add logo files
3. Customize content in translation files (`messages/en.json` and `messages/ar.json`)
4. Set up production SMTP (recommend using a service like SendGrid or AWS SES)
5. Deploy to hosting platform (Vercel recommended for Next.js)

## Support

For issues or questions, refer to the main README.md file or contact the development team.
