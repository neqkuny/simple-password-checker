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
