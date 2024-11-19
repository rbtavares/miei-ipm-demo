interface Event {
    title: string,
    location?: string,
    startTime?: Date,
    endTime?: Date,
    type: 'test' | 'assignment' | 'other',
    course: string
}

export const events: Event[] = [
    { title: "IPM Test", location: "Room 101", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "test", course: "IPM" },
    { title: "AI Project Submission", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "AI" },
    { title: "POO Lab", location: "Room 205", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "POO" },
    { title: "Comp Arch Test", location: "Room 103", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "AC" },
    { title: "Databases Presentation", location: "Room 301", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "other", course: "BD" },
    { title: "Data Structures Assignment", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "AED" },
    { title: "Probability Test", location: "Room 102", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "MPC" },
    { title: "SE Project Review", location: "Room 108", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "ES" },
    { title: "OS Class", location: "Room 109", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "SO" },
    { title: "Math Lab", location: "Room 204", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "AMI" },
    { title: "AI Lecture", location: "Room 301", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "IA" },
    { title: "DB Test", location: "Room 305", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "BD" },
    { title: "Web Dev Project", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "CG" },
    { title: "Comp Arch Lab", location: "Room 106", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "AC" },
    { title: "Algorithms Class", location: "Room 202", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "AED" },
    { title: "Data Mining Test", location: "Room 107", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "MD" },
    { title: "SE Class", location: "Room 303", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "ES" },
    { title: "IPM Project Submission", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "IPM" },
    { title: "Probability Lecture", location: "Room 108", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "MPC" },
    { title: "AI Lab", location: "Room 202", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "IA" },
    { title: "DB Project", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "BD" },
    { title: "Web Dev Lab", location: "Room 305", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "CG" },
    { title: "AI Test", location: "Room 102", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "IA" },
    { title: "IPM Seminar", location: "Room 202", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "IPM" },
    { title: "Advanced Algorithms Class", location: "Room 109", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "AED" }
];
