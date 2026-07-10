package com.cognizant.employeemanagementsystem.model;

import jakarta.persistence.*;

@NamedQueries({

@NamedQuery(

name="Employee.findByEmployeeName",

query="SELECT e FROM Employee e WHERE e.name=:name"

),

@NamedQuery(

name="Employee.findAllEmployees",

query="SELECT e FROM Employee e"

)

})
@Entity
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String email;

    @ManyToOne
    @JoinColumn(name="department_id")
    private Department department;

    public Employee() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name=name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email=email;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department=department;
    }

}