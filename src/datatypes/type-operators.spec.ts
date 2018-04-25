describe('Object Types', () => {

	describe('typeof operator', () => {
		// define your answers to make tests pass

		it('defines primitive types precisely', () => {
			expect(typeof 2016).toEqual('number');
			expect(typeof '2016').toEqual( /* YOUR ANSWER HERE */ 'string');
			expect(typeof ('2016' + 1)).toEqual( /* YOUR ANSWER HERE */'string');
			expect(typeof ('2016' - 1)).toEqual( /* YOUR ANSWER HERE */ 'number');
			expect(typeof ('2016' == 2016)).toEqual( /* YOUR ANSWER HERE */ 'boolean');
			expect(typeof ('2016' === 2016)).toEqual( /* YOUR ANSWER HERE */ 'boolean');

			expect(typeof true).toEqual( /* YOUR ANSWER HERE */'boolean' );
			expect(typeof (true + true)).toEqual( /* YOUR ANSWER HERE */'number' );
			expect(typeof true + true).toEqual( /* YOUR ANSWER HERE */ 'booleantrue' );

			var activity = 'training';
			expect(typeof activity).toEqual( /* YOUR ANSWER HERE */ 'string');
			expect(typeof activity.length).toEqual( /* YOUR ANSWER HERE */ 'number');
			expect(typeof activity.split).toEqual( /* YOUR ANSWER HERE */ 'function');
			expect(typeof activity.split('')).toEqual( /* YOUR ANSWER HERE */'object' );
		});

		it('defines complex types not that precisely', () => {
			expect(typeof Math).toEqual( /* YOUR ANSWER HERE */'object' );
			expect(typeof Math.sqrt).toEqual( /* YOUR ANSWER HERE */ 'function');
			expect(typeof Math.PI).toEqual( /* YOUR ANSWER HERE */ 'number');

			var list = [1, 2, 3, 4, 5];
			expect(typeof list).toEqual( /* YOUR ANSWER HERE */ 'object');
			expect(typeof list.length).toEqual( /* YOUR ANSWER HERE */ 'number');
			expect(typeof list[0]).toEqual( /* YOUR ANSWER HERE */ 'number');

			var person = {
				first: "John",
				last: "Lennon"
			}
			expect(typeof person).toEqual( /* YOUR ANSWER HERE */'object' );
			expect(typeof person.first).toEqual( /* YOUR ANSWER HERE */ 'string' );
			expect(typeof person['last']).toEqual( /* YOUR ANSWER HERE */'string' );
			expect(typeof person['last'].length).toEqual( /* YOUR ANSWER HERE */ 'number');
		});

		it('defines instances and constructors rather poorly', () => {
			function Person(first, last){
				this.first = first;
				this.last = last;
			}
			Person.prototype.age = 40;

			var john = new Person("John", "Lennon");
			expect(typeof john).toEqual( /* YOUR ANSWER HERE */'object' );
			expect(typeof (john + '')).toEqual( /* YOUR ANSWER HERE */ 'string');
			expect(typeof Person).toEqual( /* YOUR ANSWER HERE */ 'function');
			expect(typeof john.age).toEqual( /* YOUR ANSWER HERE */'number' );
			expect(typeof Person.prototype).toEqual( /* YOUR ANSWER HERE */ 'object');
			expect(typeof Person.prototype.age).toEqual( /* YOUR ANSWER HERE */'number' );
			expect(typeof john.constructor).toEqual( /* YOUR ANSWER HERE */ 'function');
		});
	});

	describe('instanceof operator', () => {
		// define your answers to make tests pass

		it('checks if operand 1 is a descendant of operand 2', () => {
			function Person(first, last, age?){
				this.first = first;
				this.last = last;
			}
			var john = new Person("John", "Lennon");
			var paul = {
				first: "Paul",
				last: "McCartney"
			};

			expect(john instanceof Object).toEqual( /* YOUR ANSWER HERE */ true );
			expect(paul instanceof Object).toEqual( /* YOUR ANSWER HERE */ true );
			expect(Person instanceof Object).toEqual( /* YOUR ANSWER HERE */ true);
			expect(Object instanceof Object).toEqual( /* YOUR ANSWER HERE */true );

			expect(john instanceof Person).toEqual( /* YOUR ANSWER HERE */ true);
			expect(paul instanceof Person).toEqual( /* YOUR ANSWER HERE */ false);
			expect(Person instanceof Person).toEqual( /* YOUR ANSWER HERE */ false );

			expect(Function instanceof Person).toEqual( /* YOUR ANSWER HERE */ false);
			expect(Function instanceof Object).toEqual( /* YOUR ANSWER HERE */ true);
			expect(Person instanceof Function).toEqual( /* YOUR ANSWER HERE */ true);
			expect(Object instanceof Function).toEqual( /* YOUR ANSWER HERE */ true);
		});
	});

});
