package com.casestudy.model;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer taskId;
	private Integer ownerId;
	private Integer creatorId;
	private String name;
	private String description;
	private String status;
	private String priority;
	private String notes;
	private Boolean isBookmarked;
	private LocalDateTime createdOn;
	private LocalDateTime statusChangedOn;
	private String email;
	
	


	public Task(Integer taskId, Integer ownerId, Integer creatorId, String name, String description, String status,
			String priority, String notes, Boolean isBookmarked, LocalDateTime createdOn, LocalDateTime statusChangedOn,
			String email) {
		super();
		this.taskId = taskId;
		this.ownerId = ownerId;
		this.creatorId = creatorId;
		this.name = name;
		this.description = description;
		this.status = status;
		this.priority = priority;
		this.notes = notes;
		this.isBookmarked = isBookmarked;
		this.createdOn = createdOn;
		this.statusChangedOn = statusChangedOn;
		this.email = email;
	}

	public Task() {
		super();
	}

	public Integer getTaskId() {
		return taskId;
	}
	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}
	public Integer getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(Integer ownerId) {
		this.ownerId = ownerId;
	}
	public Integer getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(Integer creatorId) {
		this.creatorId = creatorId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	public Boolean getIsBookmarked() {
		return isBookmarked;
	}
	public void setIsBookmarked(Boolean isBookmarked) {
		this.isBookmarked = isBookmarked;
	}
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
//		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
		this.createdOn = createdOn;
	}
	public LocalDateTime getStatusChangedOn() {
		return statusChangedOn;
	}
	public void setStatusChangedOn(LocalDateTime statusChangedOn) {
		this.statusChangedOn = statusChangedOn;
	}
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", ownerId=" + ownerId + ", creatorId=" + creatorId + ", name=" + name
				+ ", description=" + description + ", status=" + status + ", priority=" + priority + ", notes=" + notes
				+ ", isBookmarked=" + isBookmarked + ", createdOn=" + createdOn + ", statusChangedOn=" + statusChangedOn
				+ ", email=" + email + "]";
	}

	
	
	
}
