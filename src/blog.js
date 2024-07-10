import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Content = styled.div`
	padding: 120px 0;
	text-align: center;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Main = () => <div>Main</div>;

const Login = () => <div>Login</div>;
const Register = () => <div>Register</div>;

const Post = () => <div>Post</div>;
const Roles = () => <div>Roles</div>;
const Users = () => <div>Users</div>;
const Error = () => <div>Error</div>;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Link to="/users">Пользователи</Link>
				<Link to="/posts">Посты</Link>
				<Link to="/roles">Роли</Link>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/post" element={<Post />} />
					<Route path="/posts/:postId" element={<Post />} />

					<Route path="/roles" element={<Roles />} />
					<Route path="/users" element={<Users />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</Content>

			<Footer />
		</AppColumn>
	);
};
