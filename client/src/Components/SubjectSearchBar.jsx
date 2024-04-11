import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SubjectSearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [showDialog, setShowDialog] = useState(false); // State to manage dialog visibility

  // Define subject lists for different classes
  const classSubjects = {
    "1st": ["English", "Maths", "Science", "Social Studies"],
    "2nd": ["English", "Maths", "Science", "Social Studies"],
    "3rd": ["English", "Maths", "Science", "Social Studies"],
    "4th": ["English", "Maths", "Science", "Social Studies"],
    "5th": ["English", "Maths", "Science", "Social Studies"],
    "6th": ["English", "Maths", "Science", "Social Studies"],
    "7th": ["English", "Maths", "Science", "Social Studies"],
    "8th": ["English", "Maths", "Science", "Social Studies"],
    "9th": ["English", "Maths", "Science", "Social Studies"],
    "10th": ["English", "Maths", "Science", "Social Studies"],
    "11th": ["Physics", "Chemistry", "Biology", "Maths"],
    "12th": ["Physics", "Chemistry", "Biology", "Maths"]
  };

  // Function to handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowDialog(true); // Show dialog when typing starts
  };

  // Function to handle click on subject from dialog
  const handleSelectSubject = (subject) => {
    setInputValue(subject);
    setShowDialog(false); // Close dialog after selecting subject
  };

  // Function to handle click outside the dialog to close it
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  // Function to render subjects in dialog
  const renderSubjects = () => {
    const filteredList = Object.values(classSubjects).flat().filter(subject =>
      subject.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    if (filteredList.length > 0) {
      return (
        <ul style={{ listStyle: 'none', padding: '0', margin: '0', maxHeight: '150px', overflowY: 'auto', width: '100%' }}>
          {filteredList.slice(0, 5).map((subject, index) => (
            <li key={index} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleSelectSubject(subject)}>{subject}</li>
          ))}
        </ul>
      );
    } else {
      return <div>No subjects found</div>;
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'left', marginBottom: '10px', fontSize:'25px', marginLeft:'30px', color: 'white', fontWeight: 'bold' }}>Search for your requirement</div> {/* Text above search bar */}
      <div style={{ position: 'relative', marginLeft: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          style={{
            width: '650px', // Increased width of the search bar
            height: '60px', // Increased height of the search bar
            borderRadius: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            fontSize: '16px' // Increased font size
          }}
          placeholder="What do you want to learn"
          value={inputValue}
          onChange={handleChange}
        />
        {showDialog && (
          <div style={{ position: 'absolute', top: '100%', left: '0', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '5px', zIndex: '999', width: '350px' }}>
            {renderSubjects()}
          </div>
        )}
        {showDialog && <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: '998' }} onClick={handleCloseDialog}></div>}
      </div>
      <div style={{ textAlign: 'left', marginBottom: '10px', fontSize:'25px', marginLeft:'30px', color: 'white', fontWeight: 'bold' }}>
        <button style={{ backgroundColor: '#FF0080', color: '#fff', padding: '10px 20px', borderRadius: '20px', border: 'none', marginRight: '10px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /> {/* Email icon */}
        </button> {/* Email sign button */}
        <span>Drop us an email at offclass@gmail.com</span> {/* Text below search bar */}
      </div>
    </div>
  );
};

export default SubjectSearchBar;
