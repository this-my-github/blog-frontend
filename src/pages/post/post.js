import { useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent, PostFrom } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import styled from 'styled-components';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id]);

	return (
		<div className={className}>
			{isEditing ? (
				<PostFrom post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`;
