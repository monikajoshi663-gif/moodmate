import React, { useState, useEffect } from 'react';
import MoodPicker from './components/MoodPicker.jsx';
import MoodList from './components/MoodList.jsx';
import './App.css';

// Key used to store and retrieve our mood list in the browser's localStorage
const LOCAL_STORAGE_KEY = 'moodmate_entries';

function App() {
  // State 1: Currently selected emoji (e.g. '😄' or null if none selected yet)
  const [selectedMood, setSelectedMood] = useState(null);

  // State 2: Short note text input by the user (max 100 characters)
  const [note, setNote] = useState('');

  // State 3: Validation error message (shown when trying to save without picking a mood)
  const [errorMessage, setErrorMessage] = useState('');

  // State 4: List of all saved mood entries.
  // We initialize state by reading existing entries from localStorage.
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Could not load entries from localStorage:', error);
      return [];
    }
  });

  // useEffect Hook: Whenever the 'entries' array changes, update localStorage automatically.
  // This ensures data stays saved after page refresh.
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
      console.error('Could not save entries to localStorage:', error);
    }
  }, [entries]);

  // Handler: When user clicks an emoji button in MoodPicker
  const handleSelectMood = (emoji) => {
    setSelectedMood(emoji);
    // Clear validation error if user had one
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  // Handler: When user types in the note input
  const handleNoteChange = (e) => {
    // Only accept up to 100 characters as specified in the PRD
    const text = e.target.value;
    if (text.length <= 100) {
      setNote(text);
    }
  };

  // Handler: When user clicks the "Save Entry" button
  const handleSaveEntry = (e) => {
    e.preventDefault();

    // Acceptance Criterion: "Save does not work if no emoji is selected (show a simple message)"
    if (!selectedMood) {
      setErrorMessage('Please select a mood emoji before saving!');
      return;
    }

    // Create the new entry object
    const newEntry = {
      id: Date.now().toString(), // unique ID based on current timestamp
      emoji: selectedMood,
      note: note.trim(),
      date: new Date().toISOString()
    };

    // Prepend the new entry to the list so recent entries show up on top
    setEntries([newEntry, ...entries]);

    // Reset input fields and clear any error message
    setSelectedMood(null);
    setNote('');
    setErrorMessage('');
  };

  // Handler: When user clicks the "Delete" button on an entry
  // Acceptance Criterion: "Clicking 'Delete' removes only that entry"
  const handleDeleteEntry = (entryId) => {
    const updatedEntries = entries.filter((entry) => entry.id !== entryId);
    setEntries(updatedEntries);
  };

  return (
    <main className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="header-icon-badge">✨</div>
        <h1 className="app-title">MoodMate</h1>
        <p className="app-subtitle">Daily Mood Tracker for mindful days</p>
      </header>

      {/* Main Logging Card */}
      <section className="mood-card">
        {/* Feature 1: Mood Picker with 5 emojis */}
        <MoodPicker
          selectedMood={selectedMood}
          onSelectMood={handleSelectMood}
        />

        {/* Feature 2: Short note text box (max 100 characters) */}
        <div className="note-section">
          <div className="note-header">
            <label htmlFor="daily-note" className="note-label">
              Add a quick note <span className="optional-tag">(optional)</span>
            </label>
            <span
              className={`char-count ${note.length === 100 ? 'char-limit-reached' : ''}`}
              aria-live="polite"
            >
              {note.length}/100
            </span>
          </div>

          <textarea
            id="daily-note"
            className="note-input"
            rows="3"
            placeholder="What made you feel this way today?"
            value={note}
            onChange={handleNoteChange}
            maxLength={100}
          />
        </div>

        {/* Simple error notification when no emoji is selected */}
        {errorMessage && (
          <div className="error-banner" role="alert">
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Feature 3: Save button */}
        <button
          type="button"
          className="save-btn"
          onClick={handleSaveEntry}
        >
          Save Entry
        </button>
      </section>

      {/* Feature 3: List of saved mood entries */}
      <MoodList
        entries={entries}
        onDeleteEntry={handleDeleteEntry}
      />
    </main>
  );
}

export default App;
