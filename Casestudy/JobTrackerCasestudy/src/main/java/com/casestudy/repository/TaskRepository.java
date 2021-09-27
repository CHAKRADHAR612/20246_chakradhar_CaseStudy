package com.casestudy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.casestudy.model.Task;
@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {
	//to get details of tasks by ownerId
	public List<Task> findByOwnerId(Integer owner_id);
	//to get details of tasks by taskId
	public Task findByTaskId(Integer taskId);
	//to get details of tasks by creatorId
	public List<Task> findByCreatorId(Integer creatorId);
}
