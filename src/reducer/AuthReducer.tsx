export default function reducer(state: any, action: string) {
    switch (action) {
        case 'login':
            sessionStorage.setItem('isLogged', 'true')
            return true;
        case 'logout':
            sessionStorage.setItem('isLogged', 'false')
            return false;
        default:
            throw new Error();
    }
}