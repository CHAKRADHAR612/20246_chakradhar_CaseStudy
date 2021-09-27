package com.casestudy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.casestudy.model.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
