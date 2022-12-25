import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
        good, 
        bad, 
        neutral, 
        total, 
        positivePercentage }) => {
    
    return (
        <List>
            <ListItem>Good: {good }</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
            <ListItem>Total feedback: {total}</ListItem>
            {good > 0 && <ListItem>Positive feedback: {positivePercentage }%</ListItem>}
            
        </List>
        
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}