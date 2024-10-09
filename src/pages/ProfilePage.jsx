import React, { useContext, useState } from 'react';
import "../styles/profilepage.css"
import { existUserContext } from '../context/UserContext';

const ProfilePage = () => {
 const {existUser, setExistUser}=useContext(existUserContext)

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(existUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValues({ ...formValues, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExistUser(formValues);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setFormValues(existUser);
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <img src={existUser.avatar} alt="Avatar" className="avatar" />

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Avatar:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {existUser.name}</p>
          <p><strong>Address:</strong> {existUser.address}</p>
          <p><strong>Phone Number:</strong> {existUser.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
