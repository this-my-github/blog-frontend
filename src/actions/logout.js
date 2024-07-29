import { server } from '../bff';
import { ACTION_TYPE } from './action-type';

export const logout = (userSession) => {
	server.logout(userSession);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
