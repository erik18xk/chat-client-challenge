const getDefaultHeaders = () => ({ 'Accept': 'application/json' });

const _fetch = async (uri, params) => {

    const result = await fetch(uri, {
        cache: 'no-store',
        credentials: 'include',
        ...params,
        headers: new Headers({ ...params.headers })
    });
    return result;
};

const HTTPClient = () => ({
    get: async (uri, headers = {}, skipDefaultHeaders) => {
        return await _fetch(uri, {
            method: 'GET',
            headers: skipDefaultHeaders ? {...headers} : {...getDefaultHeaders(), ...headers}
        });
    },
    post: async (uri, body, headers = {}) => {
        return await _fetch(uri, {
            method: 'POST',
            headers: {
                ...getDefaultHeaders(),
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                ...headers
            },
            body
        });
    },
    postJson: async (uri, body, headers = {}) => {
        return await _fetch(uri, {
            method: 'POST',
            headers: {
                ...getDefaultHeaders(),
                'Content-Type': 'application/json;charset=UTF-8',
                ...headers
            },
            body: JSON.stringify(body)
        });
    },
});

export default HTTPClient;
