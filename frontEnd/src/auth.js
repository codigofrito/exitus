export const TOKEN_KEY = localStorage;
export const isAuthenticated = () => localStorage.getItem('@exitus-token') !== null;
export const getToken = () => localStorage.getItem('@exitus-token');
export const login = token => {
	localStorage.setItem(TOKEN_KEY, token);
	window.location.reload();
};
export const logout = () => {
	localStorage.removeItem('@exitus-token');
	window.location.reload();
};
