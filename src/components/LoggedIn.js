const LoggedIn = ({handleClick}) => {

    return(
        <div>
            <h1>YOU ARE LOGGED IN</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default LoggedIn;