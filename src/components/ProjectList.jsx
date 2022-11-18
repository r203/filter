const ProjectList = ({projects}) => {

  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {projects.map((project, index) => {
        return (
          <div
            className="project"
            key={index.toString()}>
              <img src={project.img} alt={project.img} />
            </div>
        )
      })}
    </div>
  )
}


export default ProjectList;