# Akrity.Work

Akrity.Work Blog with Interactive Components
<img alt="Blog Screenshot" src="https://private-user-images.githubusercontent.com/2244813/255956682-ff10799f-a816-4703-b967-c78997e8323d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4MTY2MjEsIm5iZiI6MTc0MjgxNjMyMSwicGF0aCI6Ii8yMjQ0ODEzLzI1NTk1NjY4Mi1mZjEwNzk5Zi1hODE2LTQ3MDMtYjk2Ny1jNzg5OTdlODMyM2QucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjRUMTEzODQxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmFkOTNkZjQxM2MxNzc1YjkxZjllMzAyM2UwNjQwNzNmYjVhMzdkZWJkMzBjY2QxNWRjN2U3NzU3ODJmMzc0YyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Nwv-boBoERnAlJ8bkIjKjZFaKW7U6iCo1bRUmTc7B3I">

## 👋 Welcome!
This blog platform features interactive, social-media-style components that readers can engage with directly. Perfect for technical and non-technical blogs, team updates, or personal journals.

## ✨ Features
- Interactive Components - Flip cards, reactions, task trackers, and more
- Beautiful UI - Clean design with subtle animations
- Fast Performance - Built with Astro for lightning-fast page loads
- Mobile-Friendly - Responsive design works on all devices
- Easy Content Creation - Write in Markdown with special component shortcuts

## 📚 Component Showcase

### Interactive Task Card
Create flip cards that reveal details on hover:

```text
InteractiveTaskCard: Deploy to Production, Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval., 🚀
```

### Meeting Summary
Document team meetings with a structured format:

```text
Meeting: Team Alpha, March 24 2025, Sprint Planning, Defined Q2 roadmap
```

### 🚀 Getting Started
For Content Creators
Write a new post:

Create a new Markdown file in `blog`
Add the required frontmatter (title, description, date)
Start writing your content!
Add interactive components:

Use the component syntax shown above
Components will automatically render when the page loads
Preview your post:

Run `npm run dev` to start the local server
Visit `http://localhost:4321` to see your post

## For Developers

- 1.Setup

### Clone the repository
`git clone https://github.com/yourusername/akrity-blog.git`

### Install dependencies
`npm install`

### Start the development server
`npm run dev`

- 2.Folder Structure
 
```text
├── public/          # Static assets
├── src/
│   ├── components/  # Interactive React components
│   ├── content/     # Blog posts in Markdown
│   ├── layouts/     # Page layouts
│   ├── pages/       # Astro page templates
│   └── plugins/     # Custom plugins (remark-components)
└── package.json
```

## 📝 Creating Content
### Blog Post Format
```text
---
title: 'My Awesome Post'
description: 'A great post about something interesting'
pubDate: 'March 24 2025'
heroImage: '/blog-placeholder-3.jpg'
---

# My Blog Post Title

Regular paragraph text goes here.

Task: Implement user authentication, High, @sarah

Progress: API checks are done, 90%, Waiting on feedback

More content here...

Milestone: 2025-03-17, App Launch, Released v1.0
```

## 📘 Storybook Component Library
We use Storybook to showcase and test our interactive components in isolation. It's a great way to see all available components and how to use them.

### Why Use Storybook?
- Component Preview: See all components without running the full blog
- Interactive Testing: Try different component states and configurations
- Documentation: Find examples and usage guidelines for each component
- Responsive Testing: View components at different screen sizes

### How to use Storybook
- 1.Start Storybook Server:
```text
npm run storybook
```
- 2.View in browser:
- - Open your browser to http://localhost:6006
- - Browse components in the left sidebar
- - Interact with components in the main panel
- - See documentation in the "Docs" tab

- 3.Experiment with controls:
- - Change component properties using the "Controls" panel
- - See real-time updates to the component
- - Copy code snippets for your blog posts

- 4.Find component examples:
- - Each component has multiple examples showing different use cases
- - Use these as templates for your own content

### Adding Components to Storybook
For developers who want to add new components:

- Create a ComponentName.stories.jsx file alongside your component
- Follow the format of existing story files
- Run npm run storybook to see your new component

## 🧞 Commands
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📱 Mobile Support
All components are fully responsive and work great on mobile devices. The interactive elements are designed with touch interfaces in mind.

## 🤔 Need Help?
- For content creators: Check the examples in `example.mdx`
- For developers: `Component` source code is in components
- For component usage: Run Storybook with `npm run storybook`
- For everyone: Open an issue on GitHub with any questions!

## 📣 Feedback
We'd love to hear your thoughts! Please use the reactions at the bottom of each post to let us know what you think.