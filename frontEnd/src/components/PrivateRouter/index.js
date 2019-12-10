import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from '../../auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			Authenticate.isAuthenticated() 
				? (
					Authenticate.UserType() == 'moderator' 
						? <Component {...props} />
				        :<Redirect to={{ pathname: '/', state: { from: props.localtion } }} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.localtion } }} />
				)
		}
	/>
);
