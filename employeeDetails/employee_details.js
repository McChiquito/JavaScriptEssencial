const employees = [
    { id: 1, name: 'Jhon Doe', age: 30, departament: 'IT', salary: 50000, specialization: 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, departament: 'HR', salary: 4500, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, departament: 'FInance', salary: 60000, specialization: 'Java'},
    { id: 4, name: 'Yahir Zaele', age: 23, departament: 'Developmen', salary: 30000, specialization: 'HTML'},
];

// Función para mostrar todos los empleados
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.departament} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.departament === 'HR');
        const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.departament} $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.departament} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeeDetails').innerHTML = 'no se ha encontrado ningun empleado con esta Id'
    }
}

function findBySpecialization() {
    const foundEmployee = employees.find(emp => emp.specialization === 'HTML');
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.departament}: ${foundEmployee.specialization} - $${foundEmployee.salary}</p>`;        
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'No se econtraron especialistas en ese lenguaje'
    }
}