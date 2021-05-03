import Api from '..';
import ApiConstants from '../ApiConstants';

export default function loginUser(params) {
    let firstName = params.firstName;
    let lastName = params.lastName;
    let email = params.email;
    let phone = params.phone;
    let password = params.password;
    let loginParams ="first_name="+firstName+"&last_name="+lastName+"&email="+email+"&phone="+phone+"&password="+password ;
    console.log(loginParams);
    return Api(
        ApiConstants.REGISTRATION ,
        loginParams,
        'post',
        null
    );
}
