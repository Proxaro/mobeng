package ch.zhaw.sml.iwi.meng.leantodo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Role;
import ch.zhaw.sml.iwi.meng.leantodo.entity.RoleRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDoRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.User;
import ch.zhaw.sml.iwi.meng.leantodo.entity.UserRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectRepository;

@SpringBootApplication
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class LeanToDo implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(LeanToDo.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;
    
    @Autowired
    private ToDoRepository toDoRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    // This is only really relevant for development, where we have different servers for frontend and backend
                    //.allowedOrigins("http://localhost:8100")
                    .allowedOrigins("*")
                    .allowedMethods("GET", "PUT", "POST", "DELETE")
                    // AllowCredentials is necessary, as it sets 'Access-Control-Allow-Credentials'. 
                    // Otherwise Angular's HttpClient will not pass the Cookie back.
                    .allowCredentials(true);
            }
        };
    }

    @Override
    public void run(String... args) throws Exception {
        
        Date d = new Date ();
        
        User u = new User();
        u.setLoginName("user");
        u.setPasswordHash(new BCryptPasswordEncoder().encode("user"));
        
        User u1 = new User();
        u1.setLoginName("test");
        u1.setPasswordHash(new BCryptPasswordEncoder().encode("test"));


        Role r = new Role();
        r.setRoleName("ROLE_USER");
        roleRepository.save(r);
        u.getRoles().add(r);
        userRepository.save(u);
        u1.getRoles().add(r);
        userRepository.save(u1);

        ToDo toDo = new ToDo();
        toDo.setTitle("Task 1");
        toDo.setOwner("user");
        toDo.setPrio(4);
        toDo.setDateAb(d);
        toDo.setDateBis(d);
        toDo.setProject(5);
        toDo.setArchived(false);
        toDoRepository.save(toDo);

        ToDo toDo1 = new ToDo();
        toDo1.setTitle("Task 2");
        toDo1.setOwner("user");
        toDo1.setPrio(3);
        toDo1.setDateAb(d);
        toDo1.setDateBis(d);
        toDo1.setProject(5);
        toDo1.setArchived(false);
        toDoRepository.save(toDo1);

        ToDo toDo2 = new ToDo();
        toDo2.setTitle("Task 3");
        toDo2.setOwner("test");
        toDo2.setPrio(2);
        toDo2.setDateAb(d);
        toDo2.setDateBis(d);
        toDo2.setProject(6);
        toDo2.setArchived(true);
        toDoRepository.save(toDo2);

        ToDo toDo3 = new ToDo();
        toDo3.setTitle("Task 4");
        toDo3.setOwner("test");
        toDo3.setPrio(3);
        toDo3.setDateAb(d);
        toDo3.setDateBis(d);
        toDo3.setProject(7);
        toDo3.setArchived(false);
        toDoRepository.save(toDo3);

        Project project1 = new Project();
        project1.setTitle("Project 1");
        project1.setOwner("user");
        project1.setArchived(false);
        project1.setDeadline(d);
        projectRepository.save(project1);

        Project project2 = new Project();
        project2.setTitle("Project 2");
        project2.setOwner("user");
        project2.setArchived(false);
        project2.setDeadline(d);
        projectRepository.save(project2);

        Project project3 = new Project();
        project3.setTitle("Project 3");
        project3.setOwner("test");
        project3.setArchived(false);
        project3.setDeadline(d);
        projectRepository.save(project3);

        Project project4 = new Project();
        project4.setTitle("Project 4");
        project4.setOwner("test");
        project4.setArchived(false);
        project4.setDeadline(d);
        projectRepository.save(project4);
    }
}
