export const Statistics = ({
        good, 
        bad, 
        neutral, 
        total, 
        positivePercentage }) => {
    
    return (
        <ul>
            <li>Good:  {good }</li>
            <li>Neutral:  {neutral}</li>
            <li>Bad:  {bad}</li>
            <li>Total feedback:  {total}</li>
            {good > 0 && <li>Positive feedback:  {positivePercentage }%</li>}
            
        </ul>
        
    )
};
