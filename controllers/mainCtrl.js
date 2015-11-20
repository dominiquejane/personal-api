var exports = module.exports = {};

var name = {"name": "Bugs Bunny"},
	location = {"location": "Warner, Bros"},
	occupations = {
		occupations: ["Barber of Seville","Rabbit", "Carrot-eater", "Hole-digger", "Bullet-avoider", "Buck-tooth Winner"]
	},
	hobbies = [
		{
			"name": "Eating carrots",
			"type" : "current"
		},
		{
			"name" : "Running",
			"type" : "past"
		}
	];

var occ = occupations.occupations;


exports.getName = function(req, res) {
	res.json(name);
};

exports.getLocation = function(req, res) {
	res.json(location);
};

exports.getOccupations = function(req, res) {
	var ascend = occ.sort();	
	if (req.query.order === "asc") {
		res.json(ascend);
	}
	else if (req.query.order === "desc") {
		var descend = ascend.reverse();	
		res.json(descend);
	}
	else{
		res.json(occ);
	}
};

exports.getOccupationsLatest = function(req, res) {
	res.json(occ[occ.length-1]);
};

exports.getHobbies = function(req, res) {
	res.json(hobbies);
};

exports.getHobbiesType = function(req, res) {
	for (var i = 0; i < hobbies.length; i++) {
		if (hobbies[i].type === req.params.type) {
			res.json(hobbies[i].name);
		}
	};
};

exports.changeName = function(req, res) {
	name.name = req.body;
	res.json(name.name);
}

exports.changeLocation = function(req, res) {
	location.location = req.body;
	res.json(location.location);
}

exports.addHobby = function(req, res) {
	hobbies.push(req.body);
	res.json(hobbies);
}

exports.addOccupation = function(req, res) {
	occ.push(req.body);
	res.json(occ);
}

exports.getSkills = function(req, res) {
	skillsArray.push(req.body);
}
