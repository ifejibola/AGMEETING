import React, { createContext, useEffect, useState } from 'react';

export const getUser = () => {
    let user = null;
    try {
        const storedData = window.localStorage.getItem('currentUser');
        if (storedData) {
            user = JSON.parse(storedData);
        }
    } catch (e) {
        console.log(e);
    }
    return user;
};

export const storeUser = (user) => {
    window.localStorage.setItem('currentUser', JSON.stringify(user));
};

const UserContext = createContext({
    user: null,
    saveUser: () => {
    }
});

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getUser();

        if (user) {
            setUser(user);
        }
    }, []);

    const saveUser = (newUser) => {
        setUser(newUser);
        storeUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, saveUser }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {

};

export const UserConsumer = UserContext.Consumer;

export default UserContext;