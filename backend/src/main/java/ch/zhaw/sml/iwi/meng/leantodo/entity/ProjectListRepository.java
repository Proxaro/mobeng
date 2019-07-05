package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectListRepository extends JpaRepository<ProjectList, Long>
{

    @Query(value="SELECT P.id, P.title, TODO.done, COUNT(TODO_T.id) as total " +
        "FROM Project P " +
        "LEFT JOIN (SELECT COUNT(*) as done, TO_DO.project FROM TO_DO WHERE TO_DO.ARCHIVED = TRUE GROUP BY TO_DO.project) TODO ON P.id = TODO.project " +
        "LEFT JOIN TO_DO TODO_T ON P.id = TODO_T.project " +
        "WHERE P.owner = ?1 " +
        "GROUP BY P.id, P.title", nativeQuery = true)
    public List<ProjectList> findAllButArchivedByOwner(String owner);

}