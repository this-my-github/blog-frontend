import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3005/posts')
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && loadedPost.map(transformPost));
