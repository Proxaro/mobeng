package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.User;
import ch.zhaw.sml.iwi.meng.leantodo.entity.UserRepository;


@Component
public class UserController {


    @Autowired
    private UserRepository userRepository;


    public List<User> listAllUsers() {
        return userRepository.listAllUsers();
    }
    
}