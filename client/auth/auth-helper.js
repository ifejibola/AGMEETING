

const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false

        if (sessionStorage.getItem('jwt'))
            return JSON.parse(sessionStorage.getItem('jwt'))
        else
            return false
    },

    authenticate(jwt, cb) {
        if (typeof window !== "undefined")
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
    },
    clearJWT(cb) {
        if (typeof window !== "undefined")
            sessionStorage.removeItem('jwt')
        cb()
        //optional

    },
    updateMod(mod, cb) {
        if (typeof window !== "undefined") {
            if (sessionStorage.getItem('jwt')) {
                let auth = JSON.parse(sessionStorage.getItem('jwt'))
                auth.mod = mod
                sessionStorage.setItem('jwt', JSON.stringify(auth))
                cb()
            }
        }
    }
}

export default auth