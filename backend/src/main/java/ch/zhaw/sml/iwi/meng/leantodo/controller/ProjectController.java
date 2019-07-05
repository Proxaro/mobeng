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

    //get all active projects by owner
    public List<Project> listAllProjects(String loginName) {
        return projectRepository.findAllButArchivedByOwner(loginName);
    }

    //get single project by ID
    public Optional<Project> getProjectById(Long projectID) {
        return projectRepository.findById(projectID);
    }

    //update project
    public void updateProject(Project project, String owner) {
        Project orig = projectRepository.getOne(project.getId());
        // Check if the original Project was present and that it belonged to the same owner
        if(orig == null || !orig.getOwner().equals(owner)) {
            return;
        }
        // Ok, let's overwrite the existing project.
        projectRepository.save(project);
    }

    //add new project
    public void addProject(Project newProject) {
        newProject.setId(null);
        newProject.setArchived(false);
        //newProject.getToDos().clear();
        projectRepository.save(newProject);
    }
    
}