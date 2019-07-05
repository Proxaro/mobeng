package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectListRepository extends JpaRepository<ProjectList, Long>
{

    /*@Query("select p.id, p.title, count(*) as total, sum(case when t.archived = true then 1 else 0 end) as finished from ToDo as t, Project as p where t.project = p.id and (p.owner = ?1 and p.archived = false) group by p.title")
    public List<Project> findAllButArchivedByOwner(String owner);*/

    @Query(value="SELECT P.id, P.title, COUNT(TODO_T.id) as not_archived, COUNT(TODO_F.id) as archived " +
        "FROM Project P " +
        "LEFT JOIN TO_DO TODO_F ON P.id = TODO_F.project " +
            "AND TODO_F.archived = FALSE " +
        "LEFT JOIN TO_DO TODO_T ON P.id = TODO_T.project " +
            "AND TODO_T.archived = TRUE " +
        "WHERE P.owner = ?1 " +
        "GROUP BY P.id, P.title", nativeQuery = true)
    public List<ProjectList> findAllButArchivedByOwner(String owner);

}