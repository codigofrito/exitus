const Authenticate = {
	isAuthenticated: () => localStorage.getItem('TOKEN_KEY') !== null,

	Login: token => {
		localStorage.setItem('TOKEN_KEY', token);
		window.location.reload();
	},

	Logout: () => {
		localStorage.removeItem('user');
		localStorage.removeItem('TOKEN_KEY');
		window.location.reload();
	},

	setCurrentUser: user => {
		localStorage.setItem('user', JSON.stringify(user));
	},

	UserType: () => {
		return JSON.parse(localStorage.getItem('user')).type;
	},
	Token: () => localStorage.getItem('TOKEN_KEY'),
	User: () => localStorage.getItem('user')
};

export default Authenticate;
