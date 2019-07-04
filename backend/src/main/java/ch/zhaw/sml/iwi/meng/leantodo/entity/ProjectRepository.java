package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>
{
    public List<Project> findByOwner(String owner);

    //@Query("SELECT t FROM Project as t WHERE t.id = ?1")
    //@Query
    public Optional<Project> findById(Long id);

    @Query("SELECT t FROM Project as t WHERE t.owner = ?1 AND t.archived = false")
    public List<Project> findAllButArchivedByOwner(String owner);

    //public List<Project> findByOwnerAndArchivedFalse(String owner);
}