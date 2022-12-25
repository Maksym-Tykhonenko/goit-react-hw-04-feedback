import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

export const Notification = ({ message, children }) => {
    return (
        <>
            <Title>{message}</Title>
            {children}
        </>
    )
};

Notification.propTypes = {
    message: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),])
}