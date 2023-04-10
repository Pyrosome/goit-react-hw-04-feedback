import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',    
              }}>
            {options.map((key) => (
                <button style={{
                    backgroundColor: 'white',
                    width: '80px',
                    borderRadius: '10px',
                }}
                    
                    key={key} type="button" onClick={() => onLeaveFeedback(key)}>{FormatLetter(key)}</button>
            ))}    

        </div>
    )
}

function FormatLetter(key) {
  return key[0].toUpperCase() + key.slice(1);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
