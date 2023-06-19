import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem";


const ProjectList = ({ profile, className }) => {
    return (
      <div className={"portfolio-board " + className.toLowerCase().replaceAll(' ', '-')}>
        {profile.map((item) => <ProjectItem project={item} key={Math.random()}/>)}
      </div>
    )
}

ProjectList.propTypes = {
  profile: PropTypes.array,
  map: PropTypes.func, 
  className: PropTypes.string
}

export default ProjectList;