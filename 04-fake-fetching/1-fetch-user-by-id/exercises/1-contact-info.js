import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Contact Info */

// --- declare some callbacks ---

const getContactInfo = (user) => {
  // write me!
  return `${user.id}: ${user.email}, ${user.phone}, ${user.website}`;
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 2');
fetchUserById(2)
  .then((user) => getContactInfo(user))
  // "2: Shana@melissa.tv, 010-692-6593 x09125, anastasia.net"
  .then((contactInfo) => log(contactInfo))
  .catch((err) => error(err));

log('fetching and processing user 5');
fetchUserById(5)
  // "5: Lucio_Hettinger@annie.ca, (254)954-1289, demarco.info"
  .then((user) => getContactInfo(user))
  .then((contactInfo) => log(contactInfo))
  .catch(handleError);

log('fetching and processing user 7');
fetchUserById(7)
  // "Telly.Hoeger@billy.biz, 210.067.6132, elvis.io"
  .then((user) => getContactInfo(user))
  .then((contactInfo) => log(contactInfo))
  .catch(handleError);

log('fetching and processing user 12 (there are only 10 users!)');
// 404
fetchUserById(12)
  // "404"
  .then((user) => getContactInfo(user))
  .then((contactInfo) => log(contactInfo))
  .catch(handleError);

log('= = = =  the call stack is empty  = = = =');
