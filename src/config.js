const config = {};

config.jwt = {
    secret: process.env.SECRET || 'supersecret'
}

export default config;