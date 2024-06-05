import React, { useState } from 'react';
import { Button } from 'reactstrap';

const AccountPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const [showDetails, setShowDetails] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setShippingAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to save?");
    if (confirmed) {
      setConfirmation(true);
      setShowDetails(true);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">My Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={shippingAddress.firstName} onChange={handleChange} required />
        </div>
        {/* Add other form inputs for last name, address, etc. */}
        <Button type="submit" color="primary">Save</Button>
      </form>

      {showDetails && (
        <div className="mt-5">
          <h3>User Details</h3>
          <p>First Name: {shippingAddress.firstName}</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
