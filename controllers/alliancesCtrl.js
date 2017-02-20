const DAO = require('../models/generalDAO'); 

exports.alliancesView = (req, res) => {
	DAO.getAllAlliances()
	.then((alliances) => {
		res.render('alliances', {
		    title 		: 'Alliances', 
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
  
};

exports.allianceView = (req, res) => {
	DAO.getAllianceById(parseInt(req.params.id))
	.then((alliance) => {
		DAO.getUsersByAlliance(parseInt(req.params.id))
		.then((users) => {
			res.render('oneAlliance', {
			    title 		: 'Alliance', 
			    alliance 	: alliance[0],
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