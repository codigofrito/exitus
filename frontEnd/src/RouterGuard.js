import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from './auth';

export const RouterGuard = (props) => (
	<Fragment>
		{console.log(Authenticate.UserType())}
		{console.log(props.userTypeAllowed)}
		{Authenticate.isAuthenticated && props.userTypeAllowed.includes(Authenticate.UserType())  ? props.children : <Redirect to={"/"} />}
	</Fragment>

);

//props.userTypeAllowed.includes(Authenticate.UserType())

