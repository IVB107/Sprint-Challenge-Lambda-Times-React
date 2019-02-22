import React from 'react';

const withAuthenticate = TopBar => Header => Content => Login => props => {
    return (localStorage.getItem("username") && localStorage.getItem("password") && props.loggedIn === true)
        ? (
            <div>
                <TopBar {...props} />
                <Header {...props} />
                <Content {...props} />
            </div>
        )
        : <Login {...props} />
}

export default withAuthenticate;