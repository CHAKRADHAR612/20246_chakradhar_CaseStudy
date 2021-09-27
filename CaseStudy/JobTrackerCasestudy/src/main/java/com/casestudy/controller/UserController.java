package com.casestudy.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.model.User;
import com.casestudy.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
	//creating crud repository object
	@Autowired
	private UserRepository repository;
	
	//get mapping
	@GetMapping("/myusers")
	public List<User> getAllUsers(){
		return (List<User>) repository.findAll();
	}
	
	@GetMapping("/myusers/{user_id}")
	public User getUser(@PathVariable Integer user_id){
		User user=repository.findById(user_id).get();
		return  user;
	}
	
	//post mapping
	@PostMapping("/myusers")
	public String regUser(@RequestBody User user) {
		user.setCreated_on(LocalDateTime.now());
		repository.save(user);
		return "User registered successfully";
	}
	
	//put mapping
	@PutMapping("/myusers/{user_id}")
	public String regUser(@PathVariable Integer user_id,@RequestBody User user) {
		User user1=repository.findById(user_id).get();
		user1.setUser_name(user.getUser_name());
		user1.setPassword(user.getPassword());
		user1.setEmail(user.getEmail());
		user1.setFirst_name(user.getFirst_name());
		user1.setLast_name(user.getLast_name());
		user1.setMobile_no(user.getMobile_no());
		user1.setRole(user.getRole());
		user1.setDob(user.getDob());
		user1.setCreated_on(LocalDateTime.now());
		repository.save(user1);
		return "User Data updated successfully";
	}
	
	//delete mapping
	@DeleteMapping("/myusers/{user_id}")
	public String deleteUser(@PathVariable Integer user_id) {
		repository.delete(repository.findById(user_id).get());
		return "User deleted successfully";
	}
}
