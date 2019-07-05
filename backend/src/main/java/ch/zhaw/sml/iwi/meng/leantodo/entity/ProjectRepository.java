package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>
{
    public List<Project> findByOwner(String owner);

    public Optional<Project> findById(Long id);

    @Query("select p.id, p.title, count(*) as total, sum(case when t.archived = true then 1 else 0 end) as finished from ToDo as t, Project as p where t.project = p.id and (p.owner = ?1 and p.archived = false) group by p.title")
    public List<Project> findAllButArchivedByOwner(String owner);

}