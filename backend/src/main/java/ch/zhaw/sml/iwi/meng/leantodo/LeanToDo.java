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

        Project project1 = new Project();
        project1.setTitle("Steuererklärung ausfüllen");
        project1.setOwner("user");
        project1.setArchived(false);
        project1.setDeadline(d);
        projectRepository.save(project1);

        Project project2 = new Project();
        project2.setTitle("Geburtstagsfest planen");
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

        ToDo toDo = new ToDo();
        toDo.setTitle("Steuerbehörde anrufen");
        toDo.setOwner("user");
        toDo.setPrio(4);
        toDo.setDateAb(d);
        toDo.setDateBis(d);
        toDo.setProject(1);
        toDo.setArchived(true);
        toDoRepository.save(toDo);

        ToDo toDo1 = new ToDo();
        toDo1.setTitle("Dokumente sammeln");
        toDo1.setOwner("user");
        toDo1.setPrio(3);
        toDo1.setDateAb(d);
        toDo1.setDateBis(d);
        toDo1.setProject(1);
        toDo1.setArchived(false);
        toDoRepository.save(toDo1);

        ToDo toDo2 = new ToDo();
        toDo2.setTitle("Daten eintragen");
        toDo2.setOwner("user");
        toDo2.setPrio(2);
        toDo2.setDateAb(d);
        toDo2.setDateBis(d);
        toDo2.setProject(1);
        toDo2.setArchived(false);
        toDoRepository.save(toDo2);

        ToDo toDo3 = new ToDo();
        toDo3.setTitle("Beilagen zusenden");
        toDo3.setOwner("user");
        toDo3.setPrio(3);
        toDo3.setDateAb(d);
        toDo3.setDateBis(d);
        toDo3.setProject(1);
        toDo3.setArchived(false);
        toDoRepository.save(toDo3);

        ToDo toDo4 = new ToDo();
        toDo4.setTitle("Location suchen");
        toDo4.setOwner("user");
        toDo4.setPrio(4);
        toDo4.setDateAb(d);
        toDo4.setDateBis(d);
        toDo4.setProject(2);
        toDo4.setArchived(false);
        toDoRepository.save(toDo4);

        ToDo toDo5 = new ToDo();
        toDo5.setTitle("Programm aufstellen");
        toDo5.setOwner("user");
        toDo5.setPrio(1);
        toDo5.setDateAb(d);
        toDo5.setDateBis(d);
        toDo5.setProject(2);
        toDo5.setArchived(false);
        toDoRepository.save(toDo5);

        ToDo toDo6 = new ToDo();
        toDo6.setTitle("Gäste einladen");
        toDo6.setOwner("user");
        toDo6.setPrio(3);
        toDo6.setDateAb(d);
        toDo6.setDateBis(d);
        toDo6.setProject(2);
        toDo6.setArchived(false);
        toDoRepository.save(toDo6);

        ToDo toDo7 = new ToDo();
        toDo7.setTitle("Staubsaugen");
        toDo7.setOwner("user");
        toDo7.setPrio(2);
        toDo7.setArchived(false);
        toDoRepository.save(toDo7);

        ToDo toDo8 = new ToDo();
        toDo8.setTitle("Auto reinigen");
        toDo8.setOwner("user");
        toDo8.setPrio(3);
        toDo8.setArchived(false);
        toDoRepository.save(toDo8);

        ToDo toDo9 = new ToDo();
        toDo9.setTitle("Einkaufen");
        toDo9.setOwner("user");
        toDo9.setPrio(4);
        toDo9.setDateBis(d);
        toDo9.setArchived(false);
        toDoRepository.save(toDo9);

 
    }
}
