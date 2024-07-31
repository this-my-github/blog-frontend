import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { Authorization, Post, Registration, Users } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

const Main = () => (
	<div>
		<div>Main</div>
		<div>
			<Link to="/post/001">Первый пост</Link>
		</div>
	</div>
);

const Roles = () => <div>Roles</div>;
const Error = () => <div>Error</div>;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/post" element={<div>Новый пост</div>} />
					<Route path="/post/:id" element={<Post />} />

					<Route path="/roles" element={<Roles />} />
					<Route path="/users" element={<Users />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
