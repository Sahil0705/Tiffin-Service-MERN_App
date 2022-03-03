import axios from 'axios';

//const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://mycorsproxy-help.herokuapp.com/https://food-service-sahil-api.herokuapp.com/users';
//const usersUrl = 'users';
const contactsUrl = 'https://mycorsproxy-help.herokuapp.com/https://food-service-sahil-api.herokuapp.com/contacts';

const cartUrl = 'https://mycorsproxy-help.herokuapp.com/https://food-service-sahil-api.herokuapp.com/cart';

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
    return await axios.post(`${usersUrl}`, user);
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

export const addCart = async (cart) => {
    console.log("HI ",cart);
    return await axios.post(`${cartUrl}`, cart);
}

export const getallitemsfromCartByEmail = async (emailId) => {
    const user_data = await axios.get(`${cartUrl}allItemsByEmail?emailId=${emailId}`);
    //console.log(user_data.data);
    return user_data.data[0];
}

export const getanItemfromCart = async (_id, emailId, prodId) => {
    const user_data = await axios.get(`${cartUrl}anItem?_id=${_id}&emailId=${emailId}&prodId=${prodId}`);
    return user_data;
}

export const getCart = async () => {
    const user_data = await axios.get(`${cartUrl}`);
    return user_data;
}

export const deleteCart = async (_id,emailId,prodId) => {
    return await axios.delete(`${cartUrl}?_id=${_id}&emailId=${emailId}&prodId=${prodId}`);
}
