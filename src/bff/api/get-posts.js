import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedPost) =>
			Promise.all([loadedPost.json(), loadedPost.headers.get('Link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
			links,
		}));

// `http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_per_page=${limit}`,
// .then((loadedPost) => loadedPost.json())
// .then(({ data, last }) => ({
// 	posts: data && data.map(transformPost),
// 	last,
// }));
