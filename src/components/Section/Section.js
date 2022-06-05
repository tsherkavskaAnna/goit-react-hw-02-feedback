import PropTypes from "prop-types";

const Section = ({title, children}) => (
    <>
    <h2>{title}</h2>
    {children}
    </>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;