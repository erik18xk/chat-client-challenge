import HTTPClient from '../utils/HTTPClient';

const LoginUser = async (payload) => {
    const uri = `http://localhost:8080/login/`;
    const response = await HTTPClient().postJson(uri, payload);
    if (!response.ok) {
        throw new Error(`Unable to loginIn (${response.status})`);
    }
    const json = await response.json();
    return json
};

const checkAuth = async () => {
    const uri = `http://localhost:8080/profile/`;
    const response = await HTTPClient().get(uri);
    if (!response.ok) {
        return;
    }
    const json = await response.json();
    return json;
}

const sendDtoMessage = async (payload) => {
    const { contactId } = payload;
    const uri = `http://localhost:8080/contacts/${contactId}/send`;
    const response = await HTTPClient().postJson(uri, payload);
    if (!response.ok) {
        return;
    }
    const json = await response.json();
    return json;
}

const getContacts = async () => {
    const uri = `http://localhost:8080/contacts/`;
    const response = await HTTPClient().get(uri);
    const json = await response.json();
    return json;
}

const fetchMessages = async ({ id }) => {
    const uri = `http://localhost:8080/contacts/${id}/history`;
    const response = await HTTPClient().get(uri);
    const json = await response.json();
    return json;
}

export default {
    LoginUser,
    checkAuth,
    getContacts,
    fetchMessages,
    sendDtoMessage,
}