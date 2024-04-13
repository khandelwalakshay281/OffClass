import React, { useState } from 'react';
import validator from "validator";
import ClassOptionsDialog from './classOptionsDialog';
import "../designComponents/classOptionsDialog.css"

const StdJoinPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    studentName: '',
    dob: '',
    class: '',
    subjects: '',
    schoolName: '',
    schoolBoard: '',
    gender: '',
    teacherGenderPreference: '',
    mobileNumber: '',
    alternatePhoneNumber: '',
    houseNumber: '',
    colony: '',
    street: '',
    city: '',
    tuitionLocation: '',
    landmark: '',
    pincode: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    termsAgreement: false,
    studentPhoto: null,
    studentAadhar: null,
  });


  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [classOptionsOpen, setClassOptionsOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email is valid
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Check if name contains only alphabetical characters and is at most 20 characters long
    if (!validateName(formData.studentName)) {
      setNameError('Name should only contain alphabetical characters and must be at most 20 characters long.');
      return;
    }

    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let inputValue = value;

    if (type === 'checkbox') {
      inputValue = checked;
    } else if (type === 'file') {
      inputValue = files[0];
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    // Clear name error if input is valid
    setNameError('');
  };

  const handleClassInputClick = () => {
	setClassOptionsOpen(true);
 };

 const handleSelectClassOption = (option) => {
	setFormData((prevData) => ({
	  ...prevData,
	  class: option,
	}));
	setClassOptionsOpen(false);
 };

 const handleCloseClassOptions = () => {
	setClassOptionsOpen(false);
 };

  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  const validateName = (name) => {
    return /^[a-zA-Z]+$/.test(name) && name.length <= 20;
  };

  return (
    <>
      <div className="form-container">
        <h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: "42px", color: "white", textAlign: "center" }}>Student Joining Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Email:</label>
              <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} required style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Student Name:</label>
              <input type="text" name="studentName" placeholder="Enter student name" value={formData.studentName} onChange={handleInputChange} required style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Date of Birth:</label>
              <input type="date" name="dob" placeholder="Enter date of birth" value={formData.dob} onChange={handleInputChange} required style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Class:</label>
              <input type="text" name="class" placeholder="Enter class" value={formData.class} onChange={handleInputChange}  onClick={handleClassInputClick} required style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
				  <ClassOptionsDialog isOpen={classOptionsOpen} onClose={handleCloseClassOptions} onSelect={handleSelectClassOption} />

            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Subjects to Learn:</label>
              <input type="text" name="subjects" placeholder="Enter subjects" value={formData.subjects} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>School Name:</label>
              <input type="text" name="schoolName" placeholder="Enter school name" value={formData.schoolName} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>School Board:</label>
              <input type="text" name="schoolBoard" placeholder="Enter school board" value={formData.schoolBoard} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Gender:</label>
              <input type="text" name="gender" placeholder="Enter gender" value={formData.gender} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Teacher's Gender Preference:</label>
              <input type="text" name="teacherGenderPreference" placeholder="Enter teacher's gender preference" value={formData.teacherGenderPreference} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Mobile Number:</label>
              <input type="text" name="mobileNumber" placeholder="Enter mobile number" value={formData.mobileNumber} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Alternate Phone Number:</label>
              <input type="text" name="alternatePhoneNumber" placeholder="Enter alternate phone number" value={formData.alternatePhoneNumber} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>House Number:</label>
              <input type="text" name="houseNumber" placeholder="Enter house number" value={formData.houseNumber} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Colony:</label>
              <input type="text" name="colony" placeholder="Enter colony" value={formData.colony} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Street:</label>
              <input type="text" name="street" placeholder="Enter street" value={formData.street} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>City:</label>
              <input type="text" name="city" placeholder="Enter city" value={formData.city} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Tuition Location:</label>
              <input type="text" name="tuitionLocation" placeholder="Enter tuition location" value={formData.tuitionLocation} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Landmark:</label>
              <input type="text" name="landmark" placeholder="Enter landmark" value={formData.landmark} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Pincode:</label>
              <input type="text" name="pincode" placeholder="Enter pincode" value={formData.pincode} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Father's Name:</label>
              <input type="text" name="fatherName" placeholder="Enter father's name" value={formData.fatherName} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Father's Occupation:</label>
              <input type="text" name="fatherOccupation" placeholder="Enter father's occupation" value={formData.fatherOccupation} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Mother's Name:</label>
              <input type="text" name="motherName" placeholder="Enter mother's name" value={formData.motherName} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Mother's Occupation:</label>
              <input type="text" name="motherOccupation" placeholder="Enter mother's occupation" value={formData.motherOccupation} onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
		  <div className="form-row">
            <div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Student Photo:</label>
              <input type="file" name="studentPhoto" onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
				<div className="form-field">
              <label style={{ color: 'white', fontWeight: 'bold' }}>Student Aadhar:</label>
              <input type="file" name="studentAadhar" onChange={handleInputChange} style={{ color: 'black', backgroundColor: 'white', borderRadius: '5px', border: '1px solid black', padding: '5px' }} />
            </div>
          </div>
          <div className="form-row">         
				<div className="form-field">
				<label style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', width: '150px' }}>
					Terms and Conditions:
				   <input type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleInputChange} required />
				</label>            
            </div>
          </div>
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', cursor: 'pointer', padding: '10px', borderRadius: '5px', border: 'none', marginTop: '20px' }}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default StdJoinPage;
