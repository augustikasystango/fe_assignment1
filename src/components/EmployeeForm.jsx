import { useState } from "react";
import "./EmployeeForm.css";
const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    designation: "",
    gender: "",
  });
  const validateForm = (formData) => {
    let valid = true;
    let newErrors = { name: "", email: "", designation: "", gender: "" };
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.designation) {
      newErrors.designation = "Designation is required";
      valid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateForm(formData)) alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      designation: "",
      gender: "",
    })
  };
  return (
    <div className="employee-form">
      <form onSubmit={handleSubmit} aria-describedby="form-instructions" >
        <p id="form-instructions">Please enter employee details:</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-describedby={errors.name ? "name-error" : ""}
        />
        {errors.name && (
          <span id="name-error" role="alert" style={{ color: "red" }} className="error">
            {errors.name}
          </span>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-describedby={errors.email ? "email-error" : ""}
        />
        {errors.email && (
          <span id="email-error" role="alert" style={{ color: "red" }} className="error">
            {errors.email}
          </span>
        )}
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
          aria-describedby={errors.designation ? "designation-error" : ""}
        />
        {errors.designation && (
          <span id="designation-error" role="alert" style={{ color: "red" }} className="error">
            {errors.designation}
          </span>
        )}

        <fieldset>
          <legend>Select your gender</legend>
          <label htmlFor="female">Female</label>
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
          <label htmlFor="male">Male</label>
          <input
            id="male"
            name="gender"

            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
          <input
            id="other"
            name="gender"
            type="radio"
            value="other"

            onChange={handleChange}
            checked={formData.gender === "other"}

          />
          {errors.gender && (
            <span id="gender-error" role="alert" style={{ color: "red" }}
              className="error">
              {errors.gender}
            </span>
          )}
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
