package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDoRepository;

@Component
public class ProjectController {


    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private ToDoRepository toDoRepository;


    public List<Project> listAllProjects(String loginName) {
        return projectRepository.findAllButArchivedByOwner(loginName);
    }

    public Optional<Project> getProjectById(Long projectID) {
        return projectRepository.findById(projectID);
    }

    public void updateProject(Project project, String owner) {
        Project orig = projectRepository.getOne(project.getId());
        // Check if the original Project was present and that it belonged to the same owner
        if(orig == null || !orig.getOwner().equals(owner)) {
            return;
        }
        // Ok, let's overwrite the existing project.
        projectRepository.save(project);
    }

    /*public void persistProject(Project newProject, String owner) {
        newProject.setId(null);
        // We only create empty projects
        newProject.getToDos().clear();
        newProject.setOwner(owner);
        projectRepository.save(newProject);
    }*/

    /*public void addToDo(Long projectId, ToDo toDo, String owner) {
        Project project = projectRepository.getOne(projectId);
        if(project == null || !project.getOwner().equals(owner)) {
            return;
        }  
        // Ensure that JPA creates a new entity
        toDo.setId(null);
        toDo.setOwner(owner);
        project.getToDos().add(toDo);
        projectRepository.save(project);
    }*/
    
}