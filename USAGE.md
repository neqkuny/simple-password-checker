# Password Strength Checker - Usage Guide

## Overview
A beautiful, responsive password strength checker with real-time validation. Works entirely in the browser with no server required.

## Features
- ✅ Real-time password strength validation
- ✅ Visual strength meter (Weak → Medium → Strong)
- ✅ Clear criteria checklist
- ✅ Show/hide password toggle
- ✅ Fully responsive design
- ✅ No data sent to servers - 100% client-side
- ✅ Modern, accessible UI

## Password Strength Criteria
1. **Minimum 8 characters**
2. **Uppercase letter** (A-Z)
3. **Lowercase letter** (a-z)
4. **Number** (0-9)
5. **Special character** (!@#$%^&*()_+-=[]{}etc.)

## How to Use on Wix or Other Platforms

### Option 1: Embed as Custom Code (Easiest)
1. Build the project: `npm run build`
2. The `dist` folder contains standalone HTML/CSS/JS files
3. Upload these files to your Wix site's file manager
4. Use Wix's "Custom Element" or "Embed Code" to integrate

### Option 2: Extract Vanilla JavaScript Version
The component can be converted to pure HTML/CSS/JS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Strength Checker</title>
    <style>
        /* Add compiled Tailwind CSS here */
    </style>
</head>
<body>
    <div id="password-checker">
        <!-- Component HTML here -->
    </div>
    <script>
        // Vanilla JS logic here
    </script>
</body>
</html>
```

### Option 3: Host on GitHub Pages
1. Push this repo to GitHub
2. Go to Settings → Pages
3. Select source: Deploy from a branch
4. Choose `main` branch and `/dist` folder
5. Your app will be live at `https://yourusername.github.io/repo-name/`

## Transfer to GitHub

### First Time Setup
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Password Strength Checker"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/password-strength-checker.git

# Push to GitHub
git push -u origin main
```

### Update Existing Repo
```bash
git add .
git commit -m "Update password checker"
git push
```

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

The `dist` folder will contain optimized production files.

## Customization

### Colors
Edit `src/index.css` to change the color scheme:
- `--primary`: Main accent color (teal by default)
- `--weak`: Weak password color (red)
- `--medium`: Medium password color (orange)
- `--strong`: Strong password color (green)

### Criteria
Modify `src/components/PasswordStrengthChecker.tsx` to add/remove criteria:
```typescript
const criteria: StrengthCriteria[] = [
  { label: "Your rule", test: (pwd) => /* your test */ },
  // Add more rules...
];
```

## Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Security Note
This tool runs entirely in your browser. No passwords are sent to any server or stored anywhere. It's completely safe for checking password strength.

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/ui components

## License
Free to use for personal and commercial projects.

## Deploy to a static host

If you want to host a static copy of this app on any static host that accepts a ZIP of files, use the included `site/` folder which contains a standalone vanilla JS version:

1. From the project root, create a zip of the `site/` folder with files placed at the archive root (recommended):

```bash
# from project root
cd site
zip -r ../site.zip .
```

2. Upload the generated `site.zip` to your static host (their upload may expect a zip of static files).

3. The host will serve the files at the root — no build step required.

Notes:
- The `site/` folder is intentionally a small, prebuilt vanilla JS version of the password checker so you can upload it directly without running `npm run build`.
- If you'd rather upload the Vite build output, run `npm run build` and upload the contents of the `dist/` folder instead.
