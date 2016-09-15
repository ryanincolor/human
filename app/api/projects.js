import projectData from '../../data/projects.json';

export function getProjects() {
  return projectData.projects
}

export function getProject(currentPath) {
  var projects = getProjects();

  for(let i=0; projects.length > i; i++) {
    var project = projectData.projects[i]

    if(project.id == currentPath ) {
      return project = projectData.projects[i];
    }  
  }   
}

export function getNextProject(currentPath) {
  var projects = getProjects();

  for(let i=0; projects.length > i; i++) {
    var project = projectData.projects[i]

    if(project.id == currentPath ) {
      if (projectData.projects[i+1] == undefined) {
        var firstProject = projectData.projects[0];
        return firstProject
      } else {
        var nextProject = projectData.projects[i+1];
        return nextProject
      }
     
    }  
  }  
}
