INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Human Resources") ;
INSERT INTO role (title, salary, department_id)
VALUES ("Web Developer",100000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer",120000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer",150000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Technology Officer",200000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Development Rep",60000,2);
INSERT INTO role (title, salary, department_id) 
VALUES ("Account Executive",85000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Director",120000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Vice President - Sales",160000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Revenue Officer",200000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("IT Analyst",90000,4);
INSERT INTO role (title, salary, department_id)
VALUES ("IT Manager",130000,4);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance Operations Analyst",80000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance Operations Manager",120000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant",95000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Controller",140000,5);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Analyst",80000,6);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager",120000,6);
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Human Resources Officer",180000,6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("No", "Manager",0);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Old", "McDonald",2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Princess",1,2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Lisa-Marie", "Pressly",6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Theodore", "Johnson",12);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Chris", "Holy",14);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Martin", "Lawrence",16);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("George", "Jefferson",20);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "Log",19,8);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jose", "Espinosa",24);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Walsh",23,10);