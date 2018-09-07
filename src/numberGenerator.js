import constants from './constants'

function increment(number)
{
    return number + 1;
}

function decrement(number)
{
    return number - 1;
}

function random()
{
    return Math.round(Math.random() * constants.randomNumberUpperBound);
}

export default
{
    increment,
    decrement,
    random
}