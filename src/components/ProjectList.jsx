const ProjectList = ({ profile }) => {
    return (
      <div className="portfolio-board">
        {profile.list.map(item => <img src={item.img} className={item.category}/>)}
      </div>
    )
}

export default ProjectList;