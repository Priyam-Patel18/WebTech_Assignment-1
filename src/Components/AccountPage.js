import React, { useState } from 'react';
import { Col} from 'reactstrap';
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

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

  const [showForm, setShowForm] = useState(true);
  const [ confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to save?");
    if (confirmed) {
      setConfirmation(true);
      setShowForm(false);
    }
  };

  const handleEdit = () => {
    setShowForm(true);
  };

  return (
    <div className="container mt-4">
      {showForm ? (
       <Card className="border-primary shadow mt-4 border-0">  {/* Added border-0 class */}
       <CardBody className="bg-light text-center">
         <CardTitle tag="h5" className="text-primary">My Account</CardTitle>
         <Form onSubmit={handleSubmit} style={{ border: 'none' }}>
            <FormGroup row>
              <Label for="firstName" sm={2} className="col-form-label">First Name</Label>
              <Col sm={10}>
                <Input type="text" id="firstName" name="firstName" value={shippingAddress.firstName} onChange={handleChange} required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={2} className="col-form-label">Last Name</Label>
              <Col sm={10}>
                <Input type="text" id="lastName" name="lastName" value={shippingAddress.lastName} onChange={handleChange} required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="addressLine1" sm={2} className="col-form-label">Address Line 1</Label>
              <Col sm={10}>
                <Input type="text" id="addressLine1" name="addressLine1" value={shippingAddress.addressLine1} onChange={handleChange} required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="addressLine2" sm={2} className="col-form-label">Address Line 2</Label>
              <Col sm={10}>
                <Input type="text" id="addressLine2" name="addressLine2" value={shippingAddress.addressLine2} onChange={handleChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="city" sm={2} className="col-form-label">City</Label>
              <Col sm={4}>
                <Input type="text" id="city" name="city" value={shippingAddress.city} onChange={handleChange} required />
              </Col>
              <Label for="state" sm={2} className="col-form-label">State</Label>
              <Col sm={4}>
                <Input type="text" id="state" name="state" value={shippingAddress.state} onChange={handleChange} required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="postalCode" sm={2} className="col-form-label">Postal Code</Label>
              <Col sm={4}>
                <Input type="text" id="postalCode" name="postalCode" value={shippingAddress.postalCode} onChange={handleChange} required />
              </Col>
              <Label for="country" sm={2} className="col-form-label">Country</Label>
              <Col sm={4}>
                <Input type="text" id="country" name="country" value={shippingAddress.country} onChange={handleChange} required />
              </Col>
            </FormGroup>
            <Button type="submit" color="primary" className="mx-auto d-block">Save</Button>
          </Form>
        </CardBody>
      </Card>
      
      
      ) : (
        <Card className="shadow mt-4 border-0 mx-auto" style={{ maxWidth: "500px" }}>
    <CardBody className="bg-light text-muted"> {/* Light background, muted text */}
      <CardTitle tag="h5" className="text-center text-primary">User Details</CardTitle>
      <div className="row">
        <div className="col-md-6"> {/* Left column for details */}
          <p><strong>First Name:</strong> {shippingAddress.firstName}</p>
          <p><strong>Last Name:</strong> {shippingAddress.lastName}</p>
          <p><strong>Address Line 1:</strong> {shippingAddress.addressLine1}</p>
          <p><strong>Address Line 2:</strong> {shippingAddress.addressLine2}</p>
        </div>
        <div className="col-md-6"> {/* Right column for details */}
          <p><strong>City:</strong> {shippingAddress.city}</p>
          <p><strong>State:</strong> {shippingAddress.state}</p>
          <p><strong>Postal Code:</strong> {shippingAddress.postalCode}</p>
          <p><strong>Country:</strong> {shippingAddress.country}</p>
        </div>
      </div>
      <Button color="primary" className="mt-3 float-right" onClick={handleEdit}>Edit</Button> {/* Maintained button style */}
    </CardBody>
  </Card>
      )}
    </div>
  );
};

export default AccountPage;