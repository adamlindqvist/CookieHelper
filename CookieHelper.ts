export default class CookieHelper {

    /**
     * Create cookie.
     * @param name Name of the cookie to create.
     * @param value The cookies value.
     * @param days For how many days the cookie should be stored.
     */
    static create(name: string, value: any, days?: number) {
        let expires = '';

        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    }

    /**
     * Read cookie with a specific name.
     * @param name Name of the cookie to read.
     */
    static read(name: string) {
        let nameEquals = name + '=';
        let cookiesArray = document.cookie.split(';');

        for (let i = 0; i < cookiesArray.length; i++) {
            let cookie = cookiesArray[i];

            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            if (cookie.indexOf(nameEquals) === 0) {
                return cookie.substring(nameEquals.length, cookie.length);
            }
        }

        return null;
    }

    /**
     * Erase specific cookie.
     * @param name Name of the cookie to remove.
     */
    static erase(name: string) {
        CookieHelper.create(name, '', -1);
    }
}
