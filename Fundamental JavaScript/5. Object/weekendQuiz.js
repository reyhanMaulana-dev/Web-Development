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
    Quiz 1: Extract the email addresses of all employees.
    Expected Output:
    [
      "alice.johnson@example.com",
      "bob.smith@example.com",
      "carol.martinez@example.com",
      "david.brown@example.com",
      "eva.green@example.com",
      "frank.white@example.com",
      "grace.lee@example.com",
      "hannah.kim@example.com",
      "ian.black@example.com",
      "jasmine.patel@example.com"
    ]
*/

const email = [];
for( const user of employeeDB){
    email.push(user.contactInfo.email);    
}
console.log(email);

/*
  Quiz 2: List the names of all employees who have the skill "JavaScript".
  Expected Output:
  ["Alice Johnson"]
*/

const nameSkill = [];
for( const user of employeeDB){
    for ( const skill of user.skills){
        if( skill === `JavaScript`){
            nameSkill.push(user.name);
        }
    }
}
console.log(nameSkill);

/*
  Quiz 3: How many unique skills are present in the "Marketing" department?
  Expected Output:
  8 // ("SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy", "Copywriting", "Creative Writing", "Editing")
*/

const marketingSkill = [];
for (const user of employeeDB){
    if(user.department === `Marketing`){
        
        for(const skill of user.skills){
            if(!marketingSkill.includes(skill)){
                marketingSkill.push(skill);
            }
        }
    }
}
console.log(marketingSkill);

// Quiz 4: For each employee, combine their name and contactInfo into a new object with properties name and contact. The contact property should include both email and phone.

const employe = [];
for ( const user of employeeDB){
    const dataUser = {};
    dataUser.name = user.name;
    dataUser.contact = user.contactInfo;
    employe.push(dataUser);
}
console.log(employe);

/*
  Quiz 5: Identify the employee with the most skills and provide their name and the number of skills they have.

  Expected Output:
  {
    name: "Bob Smith",
    skillsCount: 6
  }
*/

const opEmployed = {
  name : ` `,
  skillCount : 0,
}

for(const user of employeeDB){
  if(user.skills.length > opEmployed.skillCount){
    opEmployed.skillCount = user.skills.length;
    opEmployed.name = user.name;
  }
}

console.log(opEmployed);
