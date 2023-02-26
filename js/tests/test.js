import {BonusTests} from "./Actors/BonusTests.js"
import {DTests} from "./DirectionTest.js"

let tests = {
    ...BonusTests(),
    ...DTests(),
};

let testCase;

try {
    for (testCase in tests) {
        let test = tests[testCase];
        test();
        console.log(testCase + ' succseeded');
    }
} catch (error) {
    console.log('ERROR in ' + testCase + ': ' + error);
    console.log(error);
    process.exit(1);
}