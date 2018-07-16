import { getApi } from './Api';

export const endpoint = 'http://localhost:3004/posts';
export const POSTS_GET_REQUEST = 'posts/POSTS_GET_REQUEST';
export const POSTS_GET_SUCCESS = 'posts/POSTS_GET_SUCCESS';
export const POSTS_GET_FAILURE = 'posts/POSTS_GET_FAILURE';

export const fetchPosts = () => {
	return getApi([POSTS_GET_REQUEST, POSTS_GET_SUCCESS, POSTS_GET_FAILURE], endpoint);
};