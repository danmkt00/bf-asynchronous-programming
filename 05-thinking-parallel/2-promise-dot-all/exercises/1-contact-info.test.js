import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 * Fetches user data in parallel and returns an array of introduction strings.
 *
 * @param {number[]} ids - An array of user IDs.
 * @returns {Promise<string[]>} A promise that resolves to an array of introductions like "6: Hello, my name is ...".
 */

const getIntros = async (ids = []) => {
  const users = await Promise.all(ids.map((id) => fetchUserById(id)));
  return users.map((user) => `${user.id}: Hello, my name is ${user.name}`);
};

// --- --- tests --- ---

describe('getIntros: returns an array of user introductions', () => {
  it('gets intros for 6', async () => {
    const actual = await getIntros([6]);
    expect(actual).toEqual(['6: Hello, my name is Mrs. Dennis Schulist']);
  });
  it('gets intros for 8, 6, 4', async () => {
    const actual = await getIntros([8, 6, 4]);
    expect(actual).toEqual([
      '8: Hello, my name is Nicholas Runolfsdottir V',
      '6: Hello, my name is Mrs. Dennis Schulist',
      '4: Hello, my name is Patricia Lebsack',
    ]);
  });
  it('gets intros for 4, 7, 5, 6', async () => {
    const actual = await getIntros([4, 7, 5, 6]);
    expect(actual).toEqual([
      '4: Hello, my name is Patricia Lebsack',
      '7: Hello, my name is Kurtis Weissnat',
      '5: Hello, my name is Chelsey Dietrich',
      '6: Hello, my name is Mrs. Dennis Schulist',
    ]);
  });
  it('gets intros for no one', async () => {
    const actual = await getIntros([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');
