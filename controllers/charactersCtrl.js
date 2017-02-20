const DAO = require('../models/generalDAO'); 

exports.charactersView = (req, res) => {
	DAO.getAllCharacters()
	.then((characters) => {
		DAO.getAllUsers()
		.then((users) => {
			res.render('characters', {
			    title 		: 'Characters', 
			    characters 	: characters, 
			    users 		: users
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

exports.characterView = (req, res) => {
	DAO.getCharacterById(parseInt(req.params.id))
	.then((character) => {
		DAO.getUserById(character[0].user_id)
		.then((user) => {
			res.render('oneCharacter', {
			    title 		: 'Character', 
			    character 	: character[0], 
			    user 		: user[0]
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
