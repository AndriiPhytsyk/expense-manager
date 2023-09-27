// localStorageService.js

// Set an item in local storage
export const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error setting item in local storage:", error);
    }
};

// Get an item from local storage
export const getLocalStorageItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error("Error getting item from local storage:", error);
        return null;
    }
};

// Remove an item from local storage
export const removeLocalStorageItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing item from local storage:", error);
    }
};
