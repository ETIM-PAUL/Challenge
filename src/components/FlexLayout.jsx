import PropTypes from 'prop-types';

const FlexLayout = ({className, children}) => {
    return (
        <div className={`flex gap-12 section-wrapper items-center relative ${className}`}>
            {children}
        </div>
    )
}

FlexLayout.propTypes = {
    customClass: PropTypes.string,
    children: PropTypes.node
}

export default FlexLayout;