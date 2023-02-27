const express = require("express");
const router = express.Router();
const { authenticate } = require('../utility/token')
const { registerUser } = require('../controller/register')
const { loginUser } = require('../controller/login')
const { users } = require('../controller/users');
const { updateCustomer } = require("../controller/updateCustomer");
const { deleteCustomer } = require("../controller/deleteCustomer");
const { logoutUser } = require("../controller/logout");

router.post('/register', authenticate, registerUser)
router.post('/login', loginUser)
router.get('/users', authenticate, users);
router.put('/update', authenticate, updateCustomer)
router.delete("/delete", authenticate, deleteCustomer);
router.post('/logout', authenticate, logoutUser)


module.exports = router;