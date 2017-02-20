const DAO = require('../models/generalDAO'); 

exports.usersView = (req, res) => {
	DAO.getAllUsers()
	.then((users) => {
		DAO.getAllAlliances()
		.then((alliances) => {
			res.render('users', {
			    title 		: 'Users', 
			    users 		: users, 
			    alliances 	: alliances
			});
		})
		.catch((error) => {
			res.status(500)
			.json({
				status 	: 'Error', 
				error 	: error
			})
		})
	})
	.catch((error) => {
		res.status(500)
		.json({
			status 	: 'Error', 
			error 	: error
		})
	})
  
};

exports.userView = (req, res) => {
	DAO.getUserById(parseInt(req.params.id))
	.then((user) => { 
		DAO.getAllianceById(user[0].alliance_id)
		.then((alliance) => {
			res.render('oneUser', {
			    title 	 : 'Users', 
			    user 	 : user[0], 
			    alliance : alliance[0]
			});
		})
		.catch((error) => {
			res.status(500)
			.json({
				status 	: 'Error', 
				error 	: error
			})
		})
	})
	.catch((error) => {
		res.status(500)
		.json({
			status 	: 'Error', 
			error 	: error
		})
	})
  
};
