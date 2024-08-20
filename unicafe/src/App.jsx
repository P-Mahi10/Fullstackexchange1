import { useState } from 'react'

const Button = (props)=>{
  return(
  
    <button onClick={props.click}>
      {props.text}
    </button>
    
  )
}

const StatisticLine = (props) =>{
  return(
    <tr>
			<td>{props.text}</td>
			<td>:{props.value}</td>
		</tr>
  )
}



const Statistic  = (props) =>{
  const all = props.clicks[0] + props.clicks[1] + props.clicks[2]
  const positive = (props.clicks[0]/all) * 100
  if(all === 0){
    return(
      <tr>
        Give input to show statistics 
      </tr>
    )
  }
  return(
    <>
      <StatisticLine text='good' value={props.clicks[0]} />
      <StatisticLine text='neutral' value={props.clicks[1]} />
      <StatisticLine text='bad' value={props.clicks[2]} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={all/3} />
      <StatisticLine text='positive' value={positive} isPercentage = {true}/>
    </>
  )
}



const App = () => {
  
  const [good,setgood] = useState(0)
  const [neutral,setneutral] = useState(0)
  const [bad,setbad] = useState(0)
  
    
  
   
  return (
    
    <div>
      <table>
        <tbody>
          <tr>
            <th>
               Give Feedback
            </th>
          </tr>
          <Button click = {() => setgood(good+1)} text = 'good'/>
          <Button click = {() => setneutral(neutral+1)} text = 'neutral'/>
          <Button click = {() => setbad(bad+1)} text = 'bad'/>
          <tr>
            <th>
              Statistics
            </th>
          </tr>
          <Statistic clicks = {[good,neutral,bad]} />
        </tbody>
      </table>
    </div>
  )
}

export default App