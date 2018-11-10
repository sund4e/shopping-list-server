import User from '../../src/models/User';
import { randomInt } from '../helpers/utils';

describe('User', () => {
  test('can be constructed', async () => {
    const name = 'HappyUser';
    const email = 'some@email.com';
    const googleId = randomInt();
    const user = await User.query().insert({ name, email, googleId });

    expect(user.id).not.toBeNull();
    expect(user.name).toEqual(name);
    expect(user.email).toEqual(email);
    expect(user.googleId).toEqual(googleId);
  });

  test('doesn\'t allow duplicate google ids', async () => {
    const googleId = randomInt();
    await User.query().insert({
      email: 'some@email.com',
      googleId,
      name: 'HappyUser'
    });

    return expect(
      User.query().insert({
        email: 'another@email.com',
        googleId,
        name: 'DulicateUser'
      })
    ).rejects.toThrow();
  });
});
