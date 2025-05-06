import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * Retrieves the contact information (email, phone, website) of a user by ID.
 *
 * @param {number} [id=1] - The ID of the user to fetch. Defaults to 1.
 * @returns {Promise<string[]|Error>} A promise that resolves to an array containing the user's
 * email, phone and website, or an error if the fetch fails.
 */

const contactInfo = (id = 1) => {
  return fetchUserById(id)
    .then((user) => {
      const data = [];

      data.push(user.email);
      data.push(user.phone);
      data.push(user.website);

      return data;
    })
    .catch((err) => err);
};

// --- test function ---

describe("contactInfo returns a specific user's contact info", () => {
  it("gets user 3's info", () => {
    return contactInfo(3).then((actual) => {
      expect(actual).toEqual([
        'Nathan@yesenia.net',
        '1-463-123-4447',
        'ramiro.info',
      ]);
    });
  });
  it("gets user 5's info", () => {
    return contactInfo(5).then((actual) => {
      expect(actual).toEqual([
        'Lucio_Hettinger@annie.ca',
        '(254)954-1289',
        'demarco.info',
      ]);
    });
  });
  it("gets user 7's info", () => {
    return contactInfo(7).then((actual) => {
      expect(actual).toEqual([
        'Telly.Hoeger@billy.biz',
        '210.067.6132',
        'elvis.io',
      ]);
    });
  });
  it("gets user 9's info", () => {
    return contactInfo(9).then((actual) => {
      expect(actual).toEqual([
        'Chaim_McDermott@dana.io',
        '(775)976-6794 x41206',
        'conrad.com',
      ]);
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
