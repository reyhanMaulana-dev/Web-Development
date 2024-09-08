/*
  .map
  .filter
  .forEach
  .find
  .findIndex
  .sort
*/

const employeeDB = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Marketing Manager",
      department: "Marketing",
      contactInfo: {
        email: "bob.smith@example.com",
        phone: "234-567-8901"
      },
      skills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy"]
    },  
    {
      id: 3,
      name: "Carol Martinez",
      position: "Product Designer",
      department: "Design",
      contactInfo: {
        email: "carol.martinez@example.com",
        phone: "345-678-9012"
      },
      skills: ["UX Design", "Photoshop", "Illustrator"]
    },
    {
      id: 4,
      name: "David Brown",
      position: "Data Analyst",
      department: "Data Science",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    },
    {
      id: 5,
      name: "Eva Green",
      position: "HR Specialist",
      department: "Human Resources",
      contactInfo: {
        email: "eva.green@example.com",
        phone: "567-890-1234"
      },
      skills: ["Recruitment", "Employee Relations", "HR Policies"]
    },
    {
      id: 6,
      name: "Frank White",
      position: "IT Support",
      department: "IT",
      contactInfo: {
        email: "frank.white@example.com",
        phone: "678-901-2345"
      },
      skills: ["Hardware Support", "Networking", "Technical Support"]
    },
    {
      id: 7,
      name: "Grace Lee",
      position: "Project Manager",
      department: "Management",
      contactInfo: {
        email: "grace.lee@example.com",
        phone: "789-012-3456"
      },
      skills: ["Project Planning", "Team Leadership", "Agile Methodologies"]
    },
    {
      id: 8,
      name: "Hannah Kim",
      position: "Quality Assurance",
      department: "Quality",
      contactInfo: {
        email: "hannah.kim@example.com",
        phone: "890-123-4567"
      },
      skills: ["Test Automation", "Manual Testing", "Bug Tracking"]
    },
    {
      id: 9,
      name: "Ian Black",
      position: "Financial Analyst",
      department: "Finance",
      contactInfo: {
        email: "ian.black@example.com",
        phone: "901-234-5678"
      },
      skills: ["Financial Analysis", "Excel", "Budgeting"]
    },
    {
      id: 10,
      name: "Jasmine Patel",
      position: "Content Writer",
      department: "Marketing",
      contactInfo: {
        email: "jasmine.patel@example.com",
        phone: "012-345-6789"
      },
      skills: ["Copywriting", "Creative Writing", "Editing", "Content Marketing"]
    }
  ];
  
  /*
   .find()
  */
  let employeeFound
  
  employeeFound = employeeDB.find((employee) => {
    return employee.id === 5;
  });
  
  console.log(employeeFound);
  
  employeeFound = employeeDB.find((employee) => employee.name === 'Carol Martinez');
  console.log(employeeFound);
  
  // Old way by looping
  for (const employee of employeeDB) {
    if (employee.id === 2) {
      employeeFound = employee;
    }
  }
  
  console.log(employeeFound);
  
  /*
   .findIndex()
  */
  
  const employeeIndex = employeeDB.findIndex((employee) => employee.name === 'Carol Martinez');
  console.log(employeeIndex);
  console.log(employeeDB[employeeIndex]); // same as employeeDB[2]
  
  // Spliceing based on findIndex result
  // employeeDB.splice(employeeIndex, 1);
  // console.log(employeeDB);
  
  /*
   .map()
  
   Old DB:
   {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
  
    New DB:
    {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      email: "alice.johnson@example.com",
      phone: "123-456-7890",
      skills: ["JavaScript", "React", "Node.js"]
    },
  */
  
  const formattedEmployeeDB = employeeDB.map((employee) => {
    const result = {
      id: employee.id,
      name: employee.name,
      position: employee.position,
      department: employee.department,
      email: employee.contactInfo.email,
      phone: employee.contactInfo.phone,
      skills: employee.skills
    };
  
    return result;
  })
  
  console.log(formattedEmployeeDB);
  
  /*
   .map()
  
   Old DB:
   {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
  
    New DB:
    ["Alice Johnson", "Bob", ...]
  */
  
  const employeeNames = employeeDB.map((employee) => {
    return employee.name;
  })
  
  console.log(employeeNames);
  
  /*
   .filter()
  */
  
  // Ver 1
  const marketingEmployees = employeeDB.filter((employee) => {
    return employee.department === 'Marketing';
  })
  
  console.log(marketingEmployees);
  
  // Ver 2 (One Liner)
  const financeEmployees = employeeDB.filter((employee) => employee.department === 'Finance');
  console.log(financeEmployees);
  
  /*
   .sort()
  */
  
  // Sorting String value Ascending (a first then b)
  const sortedEmployeesByPositionASC = employeeDB.sort((a, b) => a.position.localeCompare(b.position));
  console.log(sortedEmployeesByPositionASC);
  
  // Sorting String value Descending (b first then a)
  const sortedEmployeesByPositionDESC = employeeDB.sort((a, b) => {
    return b.position.localeCompare(a.position)
  });
  console.log(sortedEmployeesByPositionDESC, 'sortedEmployeesByPositionDESC');
  
  // Sorting Number value Ascending (a - b)
  const sortedEmployeesByIdASC = employeeDB.sort((a, b) => a.id - b.id);
  console.log(sortedEmployeesByIdASC);
  
  // Sorting Number value Descending (b - a)
  const sortedEmployeesByIdDESC = employeeDB.sort((a, b) => b.id - a.id);
  console.log(sortedEmployeesByIdDESC);
  
  // Sort Array of String
  const words = ['Car', 'Motor', 'Train', 'Skate', 'Cycle'];
  const sortedWords = words.sort();
  console.log(sortedWords);
  
  /*
    .reverse()
  */
  const reversedWords = words.reverse();
  console.log(reversedWords);
  
  /*
    .forEach()
  */
  
  // for (const employee of employeeDB) {
  //   console.log(employee);
  // }
  
  employeeDB.forEach((employee, index) => {
    console.log(index, employee.name);
  })
  
  /*
    Nice to know
  */
  
  /*
    .every()
  */
  
  const number = [1, 2, 3];
  console.log(number.every((number) => {
    return number < 4
  }))
  
  console.log(number.every((number) => {
    return typeof number === 'number'
  }))
  
  /*
    .flat();
  */
  
  const arr1 = [0, 1, 2, [3, 4]];
  
  console.log(arr1.flat());
  // expected output: Array [0, 1, 2, 3, 4]
  
  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  
  console.log(arr2.flat());
  // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
  
  console.log(arr2.flat().flat().flat());
  // expected output: Array [0, 1, 2, 3, 4, 5]
  
  /*
    .some();
  */
  
  const array = [1, 2, 3, 4, 5];
  console.log(array.some((number) => number === 0));
  // Expected output: false
  console.log(array.some((number) => number === 3));
  // Expected output: true
  
  
  /*
    Note:
    // need to type return if using curly bracket
    (() => {
      return
    })
  
    // for one liner no need to add return
    (() => ...)
  */