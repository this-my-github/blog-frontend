import { useNavigate, Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;
`;
const Button = styled.button`
	&:hover {
		cursor: pointer;
	}
	border: none;
	padding: 0;
	background-color: inherit;
`;

const ControlPanelContainer = ({ className, currentUser }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				{currentUser ? (
					<StyledLink to="/login">
						<Icon id="fa-sign-out" />
					</StyledLink>
				) : (
					<StyledLink to="/login">
						{/* <Icon id="fa-sign-in" /> */}
						Войти
					</StyledLink>
				)}
			</RightAligned>
			<RightAligned>
				<Button onClick={() => navigate(-1)}>
					<Icon id="fa-backward" />
				</Button>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="0 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="0 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
