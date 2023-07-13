const ADD_ISSUES = 'homeStore/ADD_ISSUES' as const;

export const addIssues = <T extends Issue>(issue: T[]) => {
  return {
    type: ADD_ISSUES,
    payload: issue,
  };
};

const initialState: HomeStoreState = {
  issues: [],
};

export default function homeStore(state: HomeStoreState = initialState, action: HomeStoreAction) {
  switch (action.type) {
    case ADD_ISSUES:
      return { issues: [...state.issues, ...action.payload] };
    default:
      return state;
  }
}

type HomeStoreState = {
  issues: Issue[];
};
type HomeStoreAction = ReturnType<typeof addIssues>;
interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
}

interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  state: string;
  title: string;
  description: string;
  creator: User;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  due_on: string | null;
}

interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}

export interface Issue {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: User;
  labels: Label[];
  assignee: User | null;
  assignees: User[];
  milestone: Milestone | null;
  locked: boolean;
  active_lock_reason: string | null;
  comments: number;
  pull_request: PullRequest;
  closed_at: null | string;
  created_at: string;
  updated_at: string;
  closed_by: User;
  author_association: string;
  state_reason: string | null;
}