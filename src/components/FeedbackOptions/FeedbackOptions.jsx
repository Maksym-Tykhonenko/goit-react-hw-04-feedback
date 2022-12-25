import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleClick }) => {
    console.log(options)
    return (
        <List>
            {options.map((option, index) => (
                    <Btn
                        key={index}
                        type="button"
                        onClick={() => handleClick(option)}
                    >{option}
                    </Btn>
                    
            ))}
        </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired
};