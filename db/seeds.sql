INSERT INTO departments
(name)
VALUES
('Owners'),
('Engineering'),
('Sales');

INSERT INTO roles
(title, salary, department_id)
VALUES
('Owner', 400000, 1),
('Engineering Manager', 120000, 2),
('Engineer', 80000, 2),
('Sales Manager',120000, 3),
('Salesman', 80000, 3);

INSERT INTO employees
(first_name, last_name, role_id, salary, manager_id, department_id)
VALUES
('Robert', 'Martin', 1, 400000, 1, 1),
('Tom', 'Smith', 2, 120000, 1, 2),
('Ken', 'Colly', 3, 80000, 2, 2),
('Roger', 'Mills', 3, 80000, 2, 2),
('Jennifer', 'Hernandez', 4, 120000, 1, 3),
('Casey', 'Morgan', 5, 80000, 5, 3),
('Randy', 'Oregon', 5, 80000, 5, 3)



