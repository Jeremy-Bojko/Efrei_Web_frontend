const DB = require('../models/Database'); 

module.exports = {
	getUserById(id) {
		return DB.accessor.query('SELECT * FROM users WHERE id=${id}', 
			{
				id: id
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error; 
			})

	},

	getAllUsers() {
		return DB.accessor.query('SELECT * FROM users')
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error;
			})
	},
	getAllianceById(id) {
		return DB.accessor.query('SELECT * FROM alliances WHERE id=${id}', 
			{
				id: id
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error; 
			})
	},

	getAllAlliances() {
		return DB.accessor.query('SELECT * FROM alliances')
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error;
			})
	},
	
	getUsersByAlliance(alliance_id) { 
		return DB.accessor.query(
			'SELECT * FROM users WHERE alliance_id=${alliance_id}', 
			{
				alliance_id : alliance_id
			})
			.then((users) => {
				return users; 
			})
			.catch((error) => {
				throw error; 
			})
	},

	getCharacterById(id) {
		return DB.accessor.query('SELECT * FROM characters WHERE id=${id}', 
			{
				id: id
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error; 
			})
	},

	getAllCharacters() {
		return DB.accessor.query('SELECT * FROM characters')
			.then((result) => {
				return result;
			})
			.catch((error) => {
				throw error;
			})
	}
}