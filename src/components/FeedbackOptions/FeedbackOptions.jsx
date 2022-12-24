export const FeedbackOptions = ({options, handleClick}) => {
    return (
        <ul>
            {options.map((option, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleClick(option)}
                    >{option}
                    </button>
            ))}
        </ul>
    );
};

