import PropTypes from 'prop-types';

const ProjectItem = (props) => {
    return <img src={props.project.img} className={props.project.category} />
}

ProjectItem.propTypes ={
    project: PropTypes.object,
    img: PropTypes.string,
    category: PropTypes.string
}

export default ProjectItem