package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ProjectController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;

@RestController
public class ProjectEndpoint {

    @Autowired
    private ProjectController projectController;

    @RequestMapping(path = "/api/project", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Project> getProjects(Principal principal) {
        return projectController.listAllProjects(principal.getName());
    }
    
    @RequestMapping(path = "/api/project", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateProject(@RequestBody Project project, Principal principal) {
        projectController.updateProject(project, principal.getName());
    }

    @RequestMapping(path = "/api/project/3", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public Project getProject(@RequestParam(name="projectID") Long projectID, Principal principal) {
        return projectController.getOne(Long.valueOf(3));
    }
}