# ADHD Control Website

A comprehensive ADHD resource platform built with React, TypeScript, and Tailwind CSS.

## Deployment Instructions for Vercel

### Option 1: Direct Upload (Simplest)
1. Download the built site files from the `dist/public` folder
2. Go to vercel.com and create account
3. Drag and drop the `dist/public` folder onto Vercel
4. Connect your domain from Porkbun

### Option 2: GitHub Integration (Recommended)
1. Push this code to a GitHub repository
2. Connect GitHub to Vercel
3. Import the repository
4. Vercel auto-detects settings and deploys

## Project Structure
- `/client/src/lib/blog-data.ts` - Add new blog articles here
- `/client/src/pages/` - All website pages
- `/client/src/components/` - Reusable components

## Adding Content
- **Blog Articles**: Edit `blog-data.ts` to add new posts
- **Resources**: Update the resources page
- **Logo**: Replace the Brain icon in Navbar.tsx

## Technologies
- React + TypeScript
- Tailwind CSS
- Vite build system
- Framer Motion animations