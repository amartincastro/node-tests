const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');

  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`)
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => { // done tells mocha to wait until test passes before printing success message
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});

// should verify first and last names are set
// asser that user object includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'here', age: 100};
  var res = utils.setName(user, 'Ariel Castro');

  expect(res).toInclude({
    firstName: 'Ariel',
    lastName: 'Castro'
  })
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Ariel'}).toEqual({name: 'Ariel'});
//   // expect([2,3,4]).toInclude(5);
//   expect({
//     name: 'Ariel',
//     age: '100',
//     location: 'here'
//   }).toInclude({
//     age: '100'
//   })
// });
