# Certifications Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a Certifications section to the portfolio displaying professional credentials with links to verification pages.

**Architecture:** Create a new `Certifications.tsx` component following the existing section pattern (inline data, Tailwind styling, motion animations). Place it between Skills and Experience in the page layout. Each certification is rendered as a card with title, issuer, date, credential ID, and a verification link.

**Tech Stack:** React, TypeScript, Tailwind CSS, Motion (framer-motion API), Lucide icons

---

### Task 1: Create the Certifications component

**Files:**
- Create: `src/app/components/Certifications.tsx`

**Step 1: Create the component file with certification data and JSX**

```tsx
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const certifications = [
  {
    title: 'Advanced React',
    issuer: 'Meta',
    date: 'Issued Jan 2026',
    credentialId: 'WNB95WZ7R7DY',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/WNB95WZ7R7DY',
  },
  {
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Issued May 2026',
    credentialId: '9rg62dv3vhte',
    verifyUrl: 'https://verify.skilljar.com/c/9rg62dv3vhte',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-azure dark:bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional credentials and accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-azure dark:hover:border-gold"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-azure/10 dark:bg-gold/10 text-azure dark:text-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-azure dark:group-hover:text-gold transition-colors flex-shrink-0"
                    />
                  </div>
                  <p className="text-azure dark:text-gold font-medium text-sm mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {cert.date}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-2 font-mono">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify the file was created correctly**

Run: `cat src/app/components/Certifications.tsx | head -5`
Expected: Shows the import lines

**Step 3: Commit**

```bash
git add src/app/components/Certifications.tsx
git commit -m "feat: add Certifications component with Meta and Anthropic credentials"
```

---

### Task 2: Add Certifications to the page layout

**Files:**
- Modify: `src/app/App.tsx:1-26`

**Step 1: Add the import for Certifications**

Add after line 4 (`import Skills...`):
```tsx
import Certifications from './components/Certifications';
```

**Step 2: Add the component between Skills and Experience**

Change line 19-20 from:
```tsx
        {/* <Projects /> */}
        <Experience />
```
to:
```tsx
        {/* <Projects /> */}
        <Certifications />
        <Experience />
```

**Step 3: Verify the file looks correct**

Run: `cat src/app/App.tsx`
Expected: Shows Certifications imported and placed between Skills and Experience

**Step 4: Commit**

```bash
git add src/app/App.tsx
git commit -m "feat: add Certifications section to page layout"
```

---

### Task 3: Add Certifications to navigation

**Files:**
- Modify: `src/app/components/Navigation.tsx:62-69`

**Step 1: Add the nav item**

Change line 66-67 from:
```tsx
    // { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
```
to:
```tsx
    // { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
```

**Step 2: Verify the nav items look correct**

Run: `grep -A8 'navItems' src/app/components/Navigation.tsx | head -10`
Expected: Shows Certifications in the nav items array

**Step 3: Commit**

```bash
git add src/app/components/Navigation.tsx
git commit -m "feat: add Certifications link to navigation"
```

---

### Task 4: Visual verification

**Step 1: Start the dev server**

Run: `npm run dev`
Expected: Vite dev server starts without errors

**Step 2: Verify in browser**

Open the local URL and check:
- [ ] Certifications section appears between Skills and Experience
- [ ] Both certification cards render with correct titles, issuers, dates, and credential IDs
- [ ] Cards are clickable and open the correct verification URLs in a new tab
- [ ] Navigation includes "Certifications" link and scrolls to the section
- [ ] Dark mode toggle works correctly for the section
- [ ] Responsive layout: cards stack on mobile, side-by-side on larger screens
- [ ] Hover animations work (shadow, border color change, external link icon color)

**Step 3: Final commit if any adjustments were needed**

```bash
git add -A
git commit -m "fix: certifications section adjustments"
```
