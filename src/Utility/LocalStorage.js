const LocalStorage = {
    getUser: function () {
        if (typeof window === 'undefined') return null;
        const user = JSON.parse(window.localStorage.getItem("user"));
        return user || null;
    },

    setUser: function (user) {
        if (typeof window === 'undefined') return false;
        try {
            window.localStorage.setItem("user", JSON.stringify(user));
            const User = JSON.parse(window.localStorage.getItem("user"));
            return !!User;
        } catch (e) {
            console.error(e);
            return false;
        }
    },

    deleteUser: function () {
        if (typeof window === 'undefined') return false;
        window.localStorage.removeItem("user");
        return true;
    },

    setData: function (key, data) {
        if (typeof window === 'undefined') return false;
        window.localStorage.setItem(key, JSON.stringify(data));
        return true;
    },

    getData: function (key) {
        if (typeof window === 'undefined') return null;
        return window.localStorage.getItem(key);
    },

    deleteData: (key) => {
        if (!key) return false;
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }
};

export default LocalStorage;
