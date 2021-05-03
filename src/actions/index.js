// export action creators
import * as loginActions from './loginActions';
import * as loadingActions from './loadingActions';
import * as keyActions from './keyActions';
import * as fbActions from './fbActions';
import * as pollActions from './pollActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    loadingActions,
    keyActions,
    fbActions,
    pollActions
);
