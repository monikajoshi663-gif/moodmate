import React from 'react';
import './MoodPicker.css';

/**
 * The 5 predefined mood choices specified in the PRD:
 * 😄 🙂 😐 😟 😢
 */
const MOODS = [
  { emoji: '😄', label: 'Great' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '😟', label: 'Down' },
  { emoji: '😢', label: 'Sad' }
];

/**
 * MoodPicker Component
 * 
 * Props:
 * - selectedMood: the currently chosen emoji string (e.g. '😄' or null)
 * - onSelectMood: function to update the parent state when a mood is clicked
 */
function MoodPicker({ selectedMood, onSelectMood }) {
  return (
    <div className="mood-picker-container">
      <label className="picker-label">How are you feeling today?</label>
      <div className="emoji-button-group" role="group" aria-label="Select mood">
        {MOODS.map((item) => {
          // Check if this particular emoji is currently selected
          const isSelected = selectedMood === item.emoji;

          return (
            <button
              key={item.emoji}
              type="button"
              className={`emoji-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectMood(item.emoji)}
              title={item.label}
              aria-pressed={isSelected}
              aria-label={`${item.label} (${item.emoji})`}
            >
              <span className="emoji-icon">{item.emoji}</span>
              <span className="emoji-text">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MoodPicker;
