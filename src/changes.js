import generator from './numberGenerator'

export default 
{
    changes: [
    {
      name: 'increment',
      callback: generator.increment
    },
    {
      name: 'decrement',
      callback: generator.decrement
    },
    {
      name: 'random',
      callback: generator.random
    }
  ]
}