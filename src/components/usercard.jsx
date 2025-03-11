import React from "react";

const UserCard = () => {
  // Static User Data
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1234567890";
  const address = "123 Main Street, New York, USA";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    margin: "20px auto",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default UserCard;
