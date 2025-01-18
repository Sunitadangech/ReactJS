import React, { useState } from 'react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
    bookingDate: '',
    additionalRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    alert('Your booking has been submitted!');
    setFormData({
      name: '',
      email: '',
      carModel: '',
      bookingDate: '',
      additionalRequests: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Car Booking Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Car Model:
          <select
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="" disabled>Select a car</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
          </select>
        </label>
        <label style={styles.label}>
          Booking Date:
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Additional Requests:
          <textarea
            name="additionalRequests"
            value={formData.additionalRequests}
            onChange={handleChange}
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.button}>Book Now</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '15px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '60px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default BookNow;
