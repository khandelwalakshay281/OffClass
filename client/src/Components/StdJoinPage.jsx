import React, { useState } from 'react';
// import './StdJoinPage.css'; // Import CSS file for styling

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
	 console.log(files);
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <>
		<div className="form-container">
		<h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', fontSize: "42px", color: "white", textAlign: "center" }}>Student Joining Form</h2>

		  <form onSubmit={handleSubmit}>
			 <div className="form-row">
				<div className="form-field">
				  <label>Email:</label>
				  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
				</div>
				<div className="form-field">
				  <label>Student Name:</label>
				  <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Date of Birth:</label>
				  <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
				</div>
				<div className="form-field">
				  <label>Class:</label>
				  <input type="text" name="class" value={formData.class} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Subjects to Learn:</label>
				  <input type="text" name="subjects" value={formData.subjects} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>School Name:</label>
				  <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>School Board:</label>
				  <input type="text" name="schoolBoard" value={formData.schoolBoard} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Gender:</label>
				  <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Teacher's Gender Preference:</label>
				  <input type="text" name="teacherGenderPreference" value={formData.teacherGenderPreference} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Mobile Number:</label>
				  <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Alternate Phone Number:</label>
				  <input type="text" name="alternatePhoneNumber" value={formData.alternatePhoneNumber} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>House Number:</label>
				  <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Colony:</label>
				  <input type="text" name="colony" value={formData.colony} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Street:</label>
				  <input type="text" name="street" value={formData.street} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>City:</label>
				  <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Tuition Location:</label>
				  <input type="text" name="tuitionLocation" value={formData.tuitionLocation} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Landmark:</label>
				  <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Pincode:</label>
				  <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Father's Name:</label>
				  <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Father's Occupation:</label>
				  <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Mother's Name:</label>
				  <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} />
				</div>
				<div className="form-field">
				  <label>Mother's Occupation:</label>
				  <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Terms and Conditions:</label>
				  <input type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleInputChange} required />
				</div>
				<div className="form-field">
				  <label>Student Photo:</label>
				  <input type="file" name="studentPhoto" onChange={handleInputChange} />
				</div>
			 </div>
			 <div className="form-row">
				<div className="form-field">
				  <label>Student Aadhar:</label>
				  <input type="file" name="studentAadhar" onChange={handleInputChange} />
				</div>
			 </div>
			 <button type="submit">Submit</button>
		  </form>
		</div>
	 </>
  );
};

export default StdJoinPage;
