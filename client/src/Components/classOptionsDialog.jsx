import React from 'react';

const ClassOptionsDialog = ({ isOpen, onClose, onSelect }) => {
  const classOptions = [
    'Class KG',
    'Class 1st',
    'Class 2nd',
    'Class 3rd',
    'Class 4th',
    'Class 5th',
    'Class 6th',
    'Class 7th',
    'Class 8th',
    'Class 9th',
    'Class 10th',
    'Class 11th',
    'Class 12th',
    'Hobby Classes',
    'Others',
    'Spoken English',
    'Computers',
  ];

  return (
    <div className={`class-options-dialog ${isOpen ? 'open' : ''}`}>
      <div className="class-options-dialog-content">
        <ul>
          {classOptions.map((option, index) => (
            <li key={index} onClick={() => onSelect(option)}>{option}</li>
          ))}
        </ul>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ClassOptionsDialog;
