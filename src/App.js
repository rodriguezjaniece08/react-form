import './App.css';


function App() {
  return (
   <div className="App">
     <fieldset>
      <h2>Sign Up</h2>
      <div className="Field">
        <label>
          First name <sup>*</sup>
        </label>
        <input value="firstName" placeHOLDER = "First name"
        />
      </div>
      <div className="Field">
        <label>Last name</label>
        <input value="lastName" placeholder="Last name"
        />
      </div>
      <div className="Field">
        <label>
          Email address <sup>*</sup>
        </label>
        <input value="email" placeholder="Email address"
        />
      </div>
      <div className="Field">
        <label>
          Password <sup>*</sup>
        </label>
        <input value="password" placeholder="Password"
        />
      </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select value="role">
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button type="submit">
          Create account
        </button>
    </fieldset>
   </div>
  );
}

export default App;
