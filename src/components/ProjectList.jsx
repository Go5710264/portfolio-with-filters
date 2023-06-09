import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem";


const ProjectList = ({ profile }) => {
    return (
      <div className="portfolio-board">
        {profile.map((item) => <ProjectItem project={item} key={Math.random()}/>)}
      </div>
    )
}

ProjectList.propTypes = {
  profile: PropTypes.array,
  map: PropTypes.func
}

export default ProjectList;