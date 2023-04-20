export function emailValidation(pEmail) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pEmail.match(emailRegex) ? true : false;
}