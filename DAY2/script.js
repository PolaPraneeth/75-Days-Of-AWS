
const employmentTimeline = document.getElementById('employment-timeline');

const employmentData = [
    {
        role: "Software Engineer",
        company: "Company A",
        duration: "2022 - Present",
        description: "Developed web applications using JavaScript, React, and Node.js."
    },
    {
        role: "Intern",
        company: "Company B",
        duration: "2021 - 2022",
        description: "Worked on backend services using Java and Spring Boot."
    }
];

// Dynamically populate employment timeline
employmentData.forEach(entry => {
    const timelineEntry = document.createElement('div');
    timelineEntry.classList.add('timeline-entry');

    const role = document.createElement('h3');
    role.textContent = `${entry.role} at ${entry.company} (${entry.duration})`;

    const description = document.createElement('p');
    description.textContent = entry.description;

    timelineEntry.appendChild(role);
    timelineEntry.appendChild(description);
    employmentTimeline.appendChild(timelineEntry);
});
