interface Event {
    title: string,
    location?: string,
    startTime?: Date,
    endTime?: Date
}

export const events: Event[] = [
    { title: "Math Test", location: "Room 101", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "AI Project Submission", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "OOP Lab", location: "Room 205", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "Comp Arch Test", location: "Room 103", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Databases Presentation", location: "Room 301", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Data Structures Assignment", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Probability Test", location: "Room 102", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "SE Project Review", location: "Room 108", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "OS Class", location: "Room 109", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Math Lab", location: "Room 204", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "AI Lecture", location: "Room 301", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "DB Test", location: "Room 305", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Web Dev Project", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Comp Arch Lab", location: "Room 106", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "Algorithms Class", location: "Room 202", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Data Mining Test", location: "Room 107", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "SE Class", location: "Room 303", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Math Homework", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Probability Lecture", location: "Room 108", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "AI Lab", location: "Room 202", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "DB Project", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Web Dev Lab", location: "Room 305", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "OS Lab", location: "Room 106", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "SE Assignment", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) },
    { title: "Math Review", location: "Room 101", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 90 * 60 * 1000) },
    { title: "Comp Arch Review", location: "Room 204", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) },
    { title: "AI Assignment", location: "Online", startTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000), endTime: new Date(Date.now() + Math.random() * 16 * 60 * 60 * 1000 + 60 * 60 * 1000) }
];
