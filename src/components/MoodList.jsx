import React from 'react';
import './MoodList.css';

/**
 * Helper function to format date timestamps into a clean, readable string
 * e.g., "Oct 10, 2026, 7:30 AM"
 */
function formatDate(isoString) {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    return isoString;
  }
}

/**
 * MoodList Component
 * 
 * Props:
 * - entries: Array of mood objects [{ id, emoji, note, date }]
 * - onDeleteEntry: function called with entry.id to remove a single entry
 */
function MoodList({ entries, onDeleteEntry }) {
  // If the user hasn't saved any moods yet, show an encouraging empty state
  if (!entries || entries.length === 0) {
    return (
      <div className="mood-list-empty">
        <p className="empty-icon">📝</p>
        <p className="empty-title">No mood entries yet</p>
        <p className="empty-subtext">Pick an emoji above and record your day!</p>
      </div>
    );
  }

  return (
    <div className="mood-list-container">
      <div className="list-header">
        <h3 className="list-title">Your Mood History</h3>
        <span className="entry-count-badge">
          {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
        </span>
      </div>

      <ul className="entries-list" aria-label="Mood entries list">
        {entries.map((entry) => (
          <li key={entry.id} className="entry-card">
            <div className="entry-emoji-badge" aria-hidden="true">
              {entry.emoji}
            </div>

            <div className="entry-details">
              <span className="entry-date">{formatDate(entry.date)}</span>
              <p className="entry-note">
                {entry.note ? entry.note : <em className="no-note">No note added</em>}
              </p>
            </div>

            {/* Delete button removes ONLY this specific entry by its id */}
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDeleteEntry(entry.id)}
              aria-label={`Delete entry from ${formatDate(entry.date)}`}
              title="Delete this entry"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodList;
