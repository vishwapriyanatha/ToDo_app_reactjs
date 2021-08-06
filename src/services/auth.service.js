const login = (username, password) => {
    if (username === 'vishwapriyanatha@gmail.com' && password === 'Abcd!234') {
        localStorage.setItem("user", JSON.stringify('sdsuidvshasioh'));
        return true;
    }
    return false;

};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    logout,
};