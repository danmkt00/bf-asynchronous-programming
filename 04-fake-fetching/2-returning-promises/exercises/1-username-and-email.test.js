import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * Fetches a user's username and email by their ID.
 *
 * @param {number} [id=1] - The ID of the user to fetch. Defaults to 1.
 * @returns {Promise<string|Error>} A promise that resolves to a formatted string with the user's ID, username, and email,
 * or an error if the fetch fails.
 */

const usernameAndEmail = (id = 1) => {
  return fetchUserById(id)
    .then((user) => `${user.id}. ${user.username}, ${user.email}`)
    .catch((err) => err);
};

// --- test function ---

describe("usernameAndEmail: returns a user's name", () => {
  it("gets user 2's name", () => {
    return usernameAndEmail(2).then((actual) => {
      expect(actual).toEqual('2. Antonette, Shanna@melissa.tv'); // email has been corrected
    });
  });
  it("gets user 3's name", () => {
    return usernameAndEmail(4).then((actual) => {
      expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org'); // email has been corrected
    });
  });
  it("gets user 4's name", () => {
    return usernameAndEmail(7).then((actual) => {
      expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
    });
  });
  it("gets user 8's name", () => {
    return usernameAndEmail(10).then((actual) => {
      expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz'); // email has been corrected
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
