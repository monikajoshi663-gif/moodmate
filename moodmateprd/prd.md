# MoodMate - Daily Mood Tracker (PRD)

## 1. Project Name
MoodMate - Daily Mood Tracker

## 2. Project Purpose
A small practice project to learn React and JavaScript. It lets a user record how they feel each day. This is not a production app.

## 3. Problem Statement
Students find it hard to track their daily mood because most apps are complex and take too much time. Because of this, they do not notice what affects their mood.

## 4. Target Users
College students and beginners who want a very quick way to log their mood.

## 5. Basic Features
1. **Select a mood using emojis**
   - Show 5 emoji buttons: 😄 🙂 😐 😟 😢
   - The user clicks one to select a mood. The selected emoji is highlighted.
2. **Write a short daily note**
   - A small text box for a short note (maximum 100 characters).
3. **Save and delete mood entries**
   - A "Save" button adds the entry (emoji, note, date) to a list.
   - Each entry in the list has a "Delete" button.
   - Entries are saved in localStorage so they stay after a page refresh.

## 6. Technology Stack
- React
- JavaScript
- Vite
- CSS
- localStorage

Do NOT add: backend, login, database, AI integration, or any extra library.

## 7. Acceptance Criteria
- [ ] I can click an emoji and see it highlighted.
- [ ] I can type a short note.
- [ ] Clicking "Save" adds a new entry with emoji, note, and date to the list.
- [ ] "Save" does not work if no emoji is selected (show a simple message).
- [ ] Clicking "Delete" removes only that entry.
- [ ] Entries are still there after refreshing the page.
- [ ] The app runs with `npm run dev` and shows no errors in the browser console.
- [ ] The layout looks fine on both phone and laptop screens.

---

## Instructions for Antigravity AI

Please build this project directly in my workspace. Do not only give instructions.

1. First, inspect the workspace. If a React + Vite project already exists, reuse it. Otherwise, create a new one.
2. Create and edit the needed files and implement all 3 features above. Keep the code simple with function components and useState/useEffect, and add short comments so a beginner can understand it.
3. Use a simple structure, for example:
   - src/components/MoodPicker.jsx
   - src/components/MoodList.jsx
   - src/App.jsx
   - src/App.css
4. Batch related file changes together to reduce interruptions. For routine, low-risk edits and commands I have already authorized, go ahead without asking again, as far as my IDE settings allow.
5. Do not bypass any mandatory security checks or approval requirements.
6. Ask for my explicit approval before any destructive command, deleting unrelated files, exposing secrets, or any other sensitive action.
7. Run the app, test every acceptance criterion above, and fix any errors.
8. At the end, tell me in simple words:
   - how to open the app in my browser (for example, the localhost link from `npm run dev`),
   - which files you created or changed, and
   - a short explanation of how the code works.

This is a small practice project, so keep everything simple.