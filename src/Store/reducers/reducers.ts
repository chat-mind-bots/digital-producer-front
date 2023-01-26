import { githubApi } from '../api/github/github.api';
import { githubReducer } from '../api/github/github.slice';

const gitHuib = {
  [githubApi.reducerPath]: githubApi.reducer,
  github: githubReducer,
};

export const reducers = Object.assign(gitHuib);
