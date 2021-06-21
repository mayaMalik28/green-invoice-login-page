import { httpService } from './http.service'


export const userService = {
    login,
    logout
}

async function login(data: object) {
    let user = await httpService.post('/account/login', data);
    // let response = await httpService.post('https://api.chucknorris.io/jokes/random', data);
    console.log(user);
    _handleLogin(user);
    return user;
}

function _handleLogin(user:object) {
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
}

async function logout() {
    // TODO: post?
    sessionStorage.clear();
}

//jupiter.d.greeninvoice.co.il/api/v1/account/login