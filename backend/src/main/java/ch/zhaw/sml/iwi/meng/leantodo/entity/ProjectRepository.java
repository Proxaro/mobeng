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

    @Query("SELECT t FROM Project as t WHERE t.owner = ?1 AND t.archived = false")
    public List<Project> findAllButArchivedByOwner(String owner);

}