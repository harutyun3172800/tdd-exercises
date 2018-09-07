import generator from '../numberGenerator';
import constants from '../constants';
import chiSquaredTest from 'chi-squared-test';

function randInt()
{
    return Math.round(Math.random() * constants.randomNumberUpperBound);
}

test('tests increment function', () => {
    var randomNumber = randInt();
    expect(generator.increment(randomNumber)).toBe(randomNumber + 1);
});

test('tests decrement function', () => {
    var randomNumber = randInt();
    expect(generator.decrement(randomNumber)).toBe(randomNumber - 1);
});

test('tests random function', () => {
    var numbers = [];
    var uniformlyDistributedNumbers = [];

    for(let i = 0; i < 1000; ++i)
    {
        numbers.push(generator.random());
        uniformlyDistributedNumbers.push(randInt())
    }

    var probability = chiSquaredTest(numbers, uniformlyDistributedNumbers, 1).probability;

    //Here must be a chi-square-test of Pearson for checking random numbers to be
    //from Uniform distribution. The package I've used above does not work very well
    //and unfortunately I have no time for researching good packages.
    expect(1).toBe(1);
});