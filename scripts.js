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
//var students = new Students();

// View for one student

var StudentView = Backbone.View.extend({
	model: new Student(),
	tagName: 'tr',
	initailize: function() {
		this.template($('students-list-template').html());
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

// View for student collection
var StudentsView = Backbone.View.extend({
	model: students,
	el: $('.students-list'),
	initailize: function() {
		this.model.on('add', this.render, this);
	},

	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(student){
			self.$el.append((new StudentView({model: student})).render().$el);
		});
		return this;
	}
});

var studentsView = new StudentsView();

$(document).ready(function(){
	$('.add-student').on('click', function() {
		var student = new Student({
			firstname: $('.firstname-input').val(),
			lastname: $('.lastname-input').val(),
			id: $('.id-input').val(),
		});
		console.log(student.toJSON());
		$('.firstname-input').val('');
		$('.lastname-input').val('');
		$('.id-input').val('');
		students.add(student);
		console.log(students.toJSON());
	});
});