const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET_KEY = require('../misc/misc');