package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDoRepository;

@Component
public class ToDoController {


    @Autowired
    private ToDoRepository toDoRepository;

    //get all active todos by owner
    public List<ToDo> listAllToDos(String loginName) {
        return toDoRepository.findAllButArchivedByOwner(loginName);
    }

    //get single todo by ID
    public Optional<ToDo> getToDoById(Long toDoID) {
        return toDoRepository.findById(toDoID);
    }

    //create new todo
    public void addToDo(ToDo newToDo, String owner) {
        newToDo.setOwner(owner);
        newToDo.setId(null);
        toDoRepository.save(newToDo);
    }

    //update todo
    public void updateToDo(ToDo toDo, String owner) {
        ToDo orig = toDoRepository.getOne(toDo.getId());
        // Check if the original ToDo was present and that it belonged to the same owner
        if(orig == null || !orig.getOwner().equals(owner)) {
            return;
        }
        // Ok, let's overwrite the existing toDo.
        toDoRepository.save(toDo);
    }
    
}