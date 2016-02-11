// Student model

var Student = Backbone.Model.extend({
	defaults: {
		firstname: '',
		lastname: '',
		id: ''
	}
});

// Collection
var Students = Backbone.Collection.extend({});

// Student one

var student1 = new Student({
	firstname: 'Manish',
	lastname: 'Chahar',
	id: '4'
});

// Student two

var student2 = new Student({
	firstname: 'Shashwat',
	lastname: 'Anand',
	id: '2'
});

var students = new Students([student1, student2]);