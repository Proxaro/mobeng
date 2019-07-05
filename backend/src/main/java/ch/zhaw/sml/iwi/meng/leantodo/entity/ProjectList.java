package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import lombok.Data;

@Entity
public class ProjectList {
    
    @Id
    private Long id;
    private String title;
    private Long not_archived;
    private Long archived;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getNot_archived(){
        return not_archived;
    }

    public void setNot_archived(Long not_archived){
        this.not_archived = not_archived;
    }

    public Long getArchived() {
        return archived;
    }

    public void setArchived(Long archived) {
        this.archived = archived;
    }

}