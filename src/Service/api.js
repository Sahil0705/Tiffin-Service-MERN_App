import axios from 'axios';

//const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://mycorsproxy-help.herokuapp.com/https://food-service-sahil-api.herokuapp.com/users';
//const usersUrl = 'users';
const contactsUrl = 'https://mycorsproxy-help.herokuapp.com/https://food-service-sahil-api.herokuapp.com/contacts';

export const getallUsers = async () => {
    const user_data = await axios.get(`${usersUrl}`);
    return user_data;
}

export const getUsers = async (_id) => {
    _id = _id || '';
    const user_data = await axios.get(`${usersUrl}/${_id}`);
    return user_data.data[0];
}

export const addUser = async (user) => {
    console.log("I am ",user);
    return await axios.post(`/users`, user);
}

export const deleteUser = async (_id) => {
    return await axios.delete(`${usersUrl}/${_id}`);
}

export const editUser = async (_id, user) => {
    console.log(user);
    return await axios.patch(`${usersUrl}/${_id}`, user)
}

export const getallContacts = async () => {
    const user_data = await axios.get(`${contactsUrl}`);
    return user_data;
}

export const getContacts = async (_id) => {
    _id = _id || '';
    const user_data = await axios.get(`${contactsUrl}/${_id}`);
    return user_data.data[0];
}

export const addContact = async (contact) => {
    console.log("HI ",contact);
    return await axios.post(`${contactsUrl}`, contact);
}

export const deleteContact = async (_id) => {
    return await axios.delete(`${contactsUrl}/${_id}`);
}

export const editContact = async (_id, contact) => {
    console.log(contact);
    return await axios.patch(`${contactsUrl}/${_id}`, contact)
}