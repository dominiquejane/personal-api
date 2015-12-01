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

var skillsArray = [
	{
	  "id": 1,
	  "name": "C++",
	  "experience": "Beginner"
	},
	{
	  "id": 2,
	  "name": "Javascript",
	  "experience": "Intermediate"
	},
	{
	  "id": 3,
	  "name": "AngularJS",
	  "experience": "Intermediate"
	},
	{
	  "id": 4,
	  "name": "NodeJS",
	  "experience": "Advanced"
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
	name.name = req.body.name;
	res.json(name.name);
};

exports.changeLocation = function(req, res) {
	location.location = req.body.location;
	res.json(location.location);
};

exports.addHobby = function(req, res) {
	hobbies.push(req.body);
	res.json(hobbies);
};

exports.addOccupation = function(req, res) {
	occ.push(req.body.occupations);
	res.json(occ);
};

exports.getSkills = function(req, res) {
	var experience = [];
	for (var i = 0; i < skillsArray.length; i++) {
		if (req.query.experience === "Beginner" && skillsArray[i].experience === "Beginner") {
			experience.push(skillsArray[i]);
		}
		else if (req.query.experience === "Intermediate" && skillsArray[i].experience === "Intermediate") {
			experience.push(skillsArray[i]);
		}
		else if (req.query.experience === "Advanced" && skillsArray[i].experience === "Advanced") {
			experience.push(skillsArray[i]);
		}
	}
	if (experience.length === 0) {
		return res.json(skillsArray);
	}
	return res.json(experience);
};

exports.addSkills = function(req, res) {
	skillsArray.push(req.body);
	res.json(skillsArray);
};