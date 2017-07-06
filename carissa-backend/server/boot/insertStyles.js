module.exports = function(app) {

	var jsonArr = require('../styles.json');

	var Styles = app.models.Styles;

	Styles.destroyAll();

	Styles.upsert(jsonArr, function(err, data){
				if(err){
					return console.log(err);
				}	
		console.log("Styles inserted successfully");
	});

	
};
