import { githubApi } from '../api/github/github.api';
import { githubReducer } from '../api/github/github.slice';
import { softHub } from '../api/softHub/github.api';

const gitHuib = githubApi.middleware;

const gitHuisb = softHub.middleware;

export const middlewares = Object.assign(gitHuib, gitHuisb);
