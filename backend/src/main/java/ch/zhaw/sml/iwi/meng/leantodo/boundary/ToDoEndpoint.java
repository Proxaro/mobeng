package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ToDoController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;

@RestController
public class ToDoEndpoint {

    @Autowired
    private ToDoController toDoController;

    @RequestMapping(path = "/api/todo", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<ToDo> toDo(Principal principal) {
        return  toDoController.listAllToDos(principal.getName());        
    }

    @RequestMapping(path = "/api/todo", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addToDo(@RequestBody ToDo newToDo, Principal principal) {
        toDoController.persistToDo(newToDo, principal.getName());
    }
    
    @RequestMapping(path = "/api/todo", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateToDo(@RequestBody ToDo toDo, Principal principal) {
        toDoController.updateToDo(toDo, principal.getName());
    }

    @RequestMapping(path = "/api/todo/{id}", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public Optional<ToDo> getToDo(@PathVariable("id") Long toDoID, Principal principal) {
        return toDoController.getToDoById(toDoID);
    }

    /*@RequestMapping(path = "/api/todo/{id}", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public Project getToDo(@PathVariable("todo") Long todoID, Principal principal) {
        return projectController.getById(todoID);
    }*/
}