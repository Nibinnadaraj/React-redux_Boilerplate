import ApiStatus from '../../api';
import ApiConstants from '../ApiConstants';

export default function loginUser(params) {
    return ApiStatus(
        ApiConstants.ADMIN ,
        params,
        'post',
        null
    );
}
