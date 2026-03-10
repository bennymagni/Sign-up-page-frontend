const Login = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, submitData }) => {
    return (
        <form action="" className="form" id="loginForm" onSubmit={submitData}>
            <fieldset className="dataEntry">
                <legend>SignUp</legend>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" name="email" id="emailAddress"  value={emailAddress} placeholder="name@yahoo.com" required onChange={(e) => setEmailAddress(e.target.value)}/>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export default Login