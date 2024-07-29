// import { getUser } from './api';
import {
	authorize,
	logout,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
	// async removeUser(login) {
	// 	const user = await getUser(login);
	// 	await deleteUser(user.id);
	// },
	// async getUsers() {
	// 	return await getUsers();
	// },
	// async setRole(login, newRole) {
	// 	const user = await getUser(login);

	// 	const updatedUser = await updateRole(user.id, newRole);
	// },
};
