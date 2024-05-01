// VolunteersAndStaff.js
import React, { useState } from "react";
import "./Volunteers&Staff.css";

const VolunteersAndStaff = () => {
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: "John Doe", role: "Volunteer", experience: "3 years" },
    { id: 2, name: "Jane Smith", role: "Volunteer", experience: "2 years" },
    // Add more volunteers here...
  ]);

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      role: "Staff",
      department: "Administration",
    },
    {
      id: 2,
      name: "Bob Williams",
      role: "Staff",
      department: "Veterinary Services",
    },
    // Add more staff here...
  ]);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    experience: "",
  });

  const handleAddMember = () => {
    if (newMember.role === "Volunteer") {
      setVolunteers([
        ...volunteers,
        { ...newMember, id: volunteers.length + 1 },
      ]);
    } else if (newMember.role === "Staff") {
      setStaff([...staff, { ...newMember, id: staff.length + 1 }]);
    }
    setNewMember({ name: "", role: "", experience: "" });
    alert(`${newMember.role} ${newMember.name} added successfully!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  return (
    <div className="volunteers-and-staff-container">
      <div className="volunteers">
        <h2>Volunteers</h2>
        <ul>
          {volunteers.map((volunteer) => (
            <li key={volunteer.id}>
              <strong>Name:</strong> {volunteer.name}
              <br />
              <strong>Role:</strong> {volunteer.role}
              <br />
              <strong>Experience:</strong> {volunteer.experience}
            </li>
          ))}
        </ul>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <ul>
          {staff.map((staffMember) => (
            <li key={staffMember.id}>
              <strong>Name:</strong> {staffMember.name}
              <br />
              <strong>Role:</strong> {staffMember.role}
              <br />
              <strong>Department:</strong> {staffMember.department}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-member-form">
        <h2>Add New Member</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={handleChange}
        />
        <label>Role:</label>
        <select name="role" value={newMember.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Staff">Staff</option>
        </select>
        <label>Experience/Department:</label>
        <input
          type="text"
          name="experience"
          value={newMember.experience}
          onChange={handleChange}
        />
        <button onClick={handleAddMember}>Add Member</button>
      </div>
    </div>
  );
};

export default VolunteersAndStaff;
