import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
};

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User ${user.firstName} added to the database.`);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => { 
    users = users.filter((user) => user.id !== req.params.id);

    res.send(`user with id ${req.params.id} has been deleted.`);
};

export const updateUser =  (req,res) => {
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === req.params.id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${req.params.id} has been updated.`)
};