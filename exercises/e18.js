import { minBy } from "./e17";
import { maxBy } from "./e17";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroidNames = data.asteroids;
  let array = asteroidNames.map((item) => item.discoveryYear);

  let yearCount = {};
  let mostYear = array[0];
  let mostCount = 1;

  for (let element of array) {
    if (yearCount[element]) {
      yearCount[element]++;
    } else {
      yearCount[element] = 1;
    }
    if (yearCount[element] > mostCount) {
      mostYear = element;
      mostCount = yearCount[element];
    }
  }

  return mostYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
