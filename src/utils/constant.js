let path = "https://d-aggregate.com/Alphageekbackend/api";

// login api, a post request
export const LOGIN = `/login`;

// login api, a post request
export const REGISTER = `/create-user`; 

// login api, a post request
export const VERIFY_CODE = `/verifycode`; 


// countries api, a get request
export const  GET_ALL_COUNTRIES = `${path}/countries`; 


// states api, a post request
export const  GET_STATES = `${path}/state`; 


// LGAs api, a post request
export const  GET_LGAs = `${path}/lga`; 

//banks api, a get request
export const GET_BANKS = `${path}/bank`;

//educations api, a get request
export const GET_EDUCATIONS = `${path}/education`

//outlet_type api, a get request
export const GET_OUTLET = `${path}/outlet_type`

//outlet_channel api, a get request
export const GET_OUTLETCHANNEL = `${path}/outlet_channel`

//update_profile api, a post request
export const UPDATE_PROFILE = `/update-profilee`

//profile api, a get request
export const PROFILE = `/profile`

//logout api, a post request
export const LOGOUT = `/weblogout`

//createweboutlet api, a post request
export const CREATE_WEB_OUTLET = `/createweboutlet`

//forgotpassword api, a post request
export const FORGOT_PASSWORD = `/forgotpassword`

//reset password api, a post request
export const RESET_PASSWORD = `/resetpassword`

//get outlets by user api, a get request
export const USER_OUTLETS = `/useroutlets`

//create schedule api, a post request
export const CREATE_SCHEDULE =`/create_schedule`

//editoutlet api, a get request
export const EDIT_OUTLET =`/editweboutlet`


