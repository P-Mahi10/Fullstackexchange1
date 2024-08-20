import { useState } from 'react'

const Voteselect = (props) => {
  const highestVoteCount = Math.max(...props.all)
  const indx = props.all.indexOf(highestVoteCount)
  const highest = props.anectodes[indx]
  if (highestVoteCount === 0 ){
    return(
      <>
      no vote has been placed
      </>
    )
  }
  return(
    <>
    {highest}
      <p>has {highestVoteCount} votes</p>
    </>
  )
}

const App = () => {
  const [votes,setVotes] = useState(Array(7).fill(0))
  const [prev, setprev] = useState(1000)
  const [selected , setselect] = useState(0)
  

  const anectodes = [

    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'

  ]

  const select = () => {
    while(true){
      const x = Math.floor(Math.random()*7)
      console.log(x)
      console.log(prev)
      if ( x != prev){
        setselect(x)
        setprev(x)
        break
      }
    }
  }

  const Votecount = () => {
    const newvote = [...votes]
    newvote[selected] += 1
    setVotes(newvote)
    console.log(votes)
  }

  return (
    <div>
      <h2>Anectode of the day</h2>
      {anectodes[selected]}
      <p>this anectode has {votes[selected]} votes</p>
      <p>
        
        <button onClick = {() => Votecount()} >
          votes
        </button>
        <button onClick = {() => select()}>
          next anectode
        </button>

      </p>
      <h2>Anectode with the most votes</h2>
      <Voteselect anectodes = {anectodes} all = {votes} />
      
    </div>
  )
}
 


export default App
