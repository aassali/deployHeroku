const {
  expect,
} = require('chai');
const deleteUserPrivateKeys = require('./deleteUserPrivateKeys');

describe('helpers > deleteUserPrivateKeys', () => {
  it('should remove password', () => {
    const user = {
      email: 'plop@gmail.com',
      password: 12345,
    };

    expect(deleteUserPrivateKeys(user)).to.deep.equal({
      email: 'plop@gmail.com',
    });
  });
});
