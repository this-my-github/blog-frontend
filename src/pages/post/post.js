import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent, PostFrom } from './components';
import { useServerRequest } from '../../hooks';
import { RESET_POST_DATA, loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
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
