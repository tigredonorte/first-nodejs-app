export const routes = {
    '/': { 
        file: './src/index/index.mjs',
        method: 'GET'
    },
    '/users': { 
        file: './src/users/index.mjs',
        method: 'GET'
    },
    '/create-user': { 
        file: './src/users/create-user.mjs',
        method: 'POST'
    },
};