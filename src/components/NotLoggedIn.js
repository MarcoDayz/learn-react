const NotLoggedIn = ({handleClick}) => {

    return (
        <div>
            <h1>YOU ARE NOT LOGGED IN</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default NotLoggedIn;