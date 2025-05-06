import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * Checks if the user with the given ID works at the specified workplace.
 *
 * @param {number} id - The ID of the user to fetch.
 * @param {string} workPlace - The name of the company to compare with the user's workplace.
 * @returns {Promise<boolean|Error>} A promise that resolves to true if the user works at the specified workplace,
 * false otherwise, or an error if the fetch fails.
 */

const userWorksAt = (id, workPlace) => {
  return fetchUserById(id)
    .then((user) => user.company.name)
    .then((company) => company === workPlace)
    .catch((err) => err);
};

// --- test function ---

describe('userWorksAt checks if a user works at a specific company', () => {
  it('user 4 does work at Robel-Corkery', () => {
    return userWorksAt(4, 'Robel-Corkery').then((actual) => {
      expect(actual).toEqual(true);
    });
  });
  it('user 4 does not work at Romaguera-Jacobson', () => {
    return userWorksAt(4, 'Romaguera-Jacobson').then((actual) => {
      expect(actual).toEqual(false);
    });
  });
  it('user 6 does work at Considine-Lockman', () => {
    return userWorksAt(6, 'Considine-Lockman').then((actual) => {
      expect(actual).toEqual(true); // Correct value is true not false
    });
  });
  it('user 7 does not work at John Groups', () => {
    return userWorksAt(7, 'John Groups').then((actual) => {
      expect(actual).toEqual(false);
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
