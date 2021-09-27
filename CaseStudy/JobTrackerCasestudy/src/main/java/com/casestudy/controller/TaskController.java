package com.casestudy.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.model.Task;
import com.casestudy.repository.TaskRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class TaskController {
	//creating an object for crud repository
	@Autowired
	private TaskRepository repository;
	
	//creating object for mail sender
	@Autowired
	private JavaMailSender emailSender;
	
	//get mapping
	@GetMapping("/tasks")
	public List<Task> getAllTasks(){
		return (List<Task>) repository.findAll();
	}
	
	@GetMapping("/tasks/{userId}")
	public List<Task> getTaskByUserId(@PathVariable Integer userId) {
		List<Task> t=repository.findByOwnerId(userId);
		return t;
	}
	@GetMapping("/adminTasks/{creatorId}")
	public List<Task> getTaskByCreatorId(@PathVariable Integer creatorId) {
		List<Task> t=repository.findByCreatorId(creatorId);
		return t;
	}
	@GetMapping("/allTasks/{taskId}")
	public Task getTaskByTaskId(@PathVariable Integer taskId) {
		Task t=repository.findByTaskId(taskId);
		return t;
	}
	
	//post mapping
	@PostMapping("/tasks")
	public String addTask(@RequestBody Task task) {
		task.setCreatedOn(LocalDateTime.now());
		repository.save(task);
		//sending a mail
		SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("chakradharkintada@gmail.com");
        message.setTo(task.getEmail()); 
        message.setSubject("Task Notification"); 
        message.setText("Hi please login to TMS to check for the new task assigned to you on "+task.getCreatedOn() +" By Admin with userId:"+task.getCreatorId());
        emailSender.send(message);
        System.out.println("Mail sent successfully");
        //returning success message
		return "Task created successfully";
	}
	
	//put mapping
	@PutMapping("/tasks/{taskId}")
	public String updateTask(@PathVariable Integer taskId,@RequestBody Task task) {
		Task task1=repository.findById(taskId).get();
//		task1.setOwnerId(task.getOwnerId());
//		task1.setCreatorId(task.getCreatorId());
//		task1.setDescription(task.getDescription());
//		task1.setName(task.getName());
		//setting only the required fields
		task1.setStatus(task.getStatus());
		task1.setPriority(task.getPriority());
//		task1.setCreatedOn(task.getCreatedOn());
		task1.setStatusChangedOn(LocalDateTime.now());
		task1.setNotes(task.getNotes());
		task1.setIsBookmarked(task.getIsBookmarked());
		repository.save(task1);
		return "Task data updated successfully";
	}
	
	//delete mapping
	@DeleteMapping("/tasks/{taskId}")
	public String deleteTask(@PathVariable Integer taskId) {
		repository.delete(repository.findById(taskId).get());
		return "Task deleted successfully";
	}
}
