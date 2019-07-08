import React, { Component } from "react";

export default class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    addressone: "",
    addresstwo: "",
    city: "",
    state: "",
    zip: null,
    phone: null,
    email: "",
    npinumber: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      addressone,
      addresstwo,
      city,
      state,
      zip,
      phone,
      email,
      npinumber
    } = this.state;

    if (firstname === "") return;
    if (lastname === "") return;
    if (addressone === "") return;
    if (city === "") return;

    if (state === "") {
      alert("You must fill select a state!");
      return;
    }

    if (zip === null) return;
    if (phone === null) return;
    else if (phone.length != 10) {
      alert("You must enter a valid 10 digit phone number!");
      return;
    }
    if (email === "") return;
    if (npinumber === "") return;
    else if (npinumber.length != 10) {
      alert("Invalid NPI Number.");
      return;
    }

    /*
      Here you would do a request to the backend to store the user using Fetch, Axios, or some other HTTP library.
    */

    alert("Thank you for registering with us!");
  };

  render() {
    return (
      <div className="home">
        <form className="form" action="#" onSubmit={this.onSubmit.bind(this)}>
          <div className="container">
            <h2 className="heading-primary" style={{ margin: "2rem auto" }}>
              Register
            </h2>
            <div className="form-row">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="First Name"
                  id="firstname"
                  name="firstname"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="firstname" className="form__label">
                  First Name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="lastname" className="form__label">
                  Last Name
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Address 1"
                  id="addressone"
                  name="addressone"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="addressone" className="form__label">
                  Address 1
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Address 2"
                  id="addresstwo"
                  name="addresstwo"
                  onChange={this.onChange}
                />
                <label htmlFor="addresstwo" className="form__label">
                  Address 2
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="City"
                  id="city"
                  name="city"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="city" className="form__label">
                  City
                </label>
              </div>

              <div className="form__group">
                <select
                  className="form__select"
                  id="state"
                  name="state"
                  required
                  onChange={this.onChange}
                >
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form__group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Zip Code"
                  id="zip"
                  name="zip"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="city" className="form__label">
                  Zip Code
                </label>
              </div>

              <div className="form__group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="phone" className="form__label">
                  Phone Number
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  placeholder="NPI Number"
                  id="npinumber"
                  name="npinumber"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="npinumber" className="form__label">
                  NPI Number
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form__group">
                <button className="btn btn--blue">Submit Form</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
