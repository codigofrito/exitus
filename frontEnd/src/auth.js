export const TOKEN_KEY = localStorage;
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem('user');
export const login = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
	window.location.reload();
};

export const setCurrentUser = user => {
	localStorage.setItem('user', JSON.stringify(user));
};
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
	window.location.reload();
};
