const UserOwner = require('../models/ownerModel');
const Pet = require('../models/petModel');

async function addUserAndPet(req, res) {
    const userData = {
        firstName: req.body.firstName[0],
        lastName: req.body.lastName[0],
        email: req.body.email[0],
        password: req.body.password[0],
        phone: req.body.phone[0],
      };

  const petData = {
    type: req.body.type,
    race: req.body.race,
    name: req.body.name,
    age: req.body.age,
    sexe: req.body.sexe,
    sterilisation: req.body.sterilisation,
    ententeChats: req.body.ententeChats,
    ententeChiens: req.body.ententeChiens,
  };
  console.log('User data:', userData);
  console.log('Pet data:', petData);

  try {
    const newUser = new UserOwner(userData);
    const savedUser = await newUser.save();

    const newPet = new Pet({ ...petData, owner: savedUser._id });
    const savedPet = await newPet.save();

    savedUser.pets.push(savedPet._id);
    await savedUser.save();

    res.status(201).json({ message: 'User and pet registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user and pet', error: err });
  }
}

async function login(req, res) {
  try {
    const user = await UserOwner.findOne({ firstName: req.body.name });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.password !== req.body.password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err });
  }
}

module.exports = {
  addUserAndPet,login
};