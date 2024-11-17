interface Notification {
    title: string
    description: string
    time: Date
}

export const notifications: Notification[] = [
    { title: "Assignment Due", description: "Your Math assignment is due tomorrow.", time: new Date("2024-11-15T08:30:00Z") },
    { title: "Lecture Recording Available", description: "The recording for 'Data Structures and Algorithms' is now available.", time: new Date("2024-11-14T16:45:00Z") },
    { title: "Exam Schedule Released", description: "The final exam schedule for this semester has been released.", time: new Date("2024-11-13T14:00:00Z") },
    { title: "Group Meeting Reminder", description: "You have a group meeting for the 'Software Engineering' project at 3 PM.", time: new Date("2024-11-12T09:20:00Z") },
    { title: "New Research Paper", description: "A new paper on 'AI in Education' has been added to the library.", time: new Date("2024-11-11T13:10:00Z") },
    { title: "Course Material Update", description: "New materials for 'Calculus II' are available in the course resources.", time: new Date("2024-11-10T18:05:00Z") },
    { title: "Weekly Class Feedback", description: "Submit your weekly feedback for 'Database Systems'.", time: new Date("2024-11-09T08:00:00Z") },
    { title: "Project Submission Reminder", description: "Your 'Web Development' project is due in three days.", time: new Date("2024-11-08T12:45:00Z") },
    { title: "Library Book Due", description: "The book 'Introduction to Machine Learning' is due tomorrow.", time: new Date("2024-11-07T15:30:00Z") },
    { title: "New Discussion Post", description: "A new discussion topic on 'Quantum Computing' has been posted.", time: new Date("2024-11-06T10:00:00Z") },
    { title: "Seminar Registration Open", description: "Register for the upcoming seminar on 'Blockchain Applications'.", time: new Date("2024-11-05T20:15:00Z") },
    { title: "Grade Posted", description: "Your grade for 'Operating Systems' midterm exam has been posted.", time: new Date("2024-11-04T09:30:00Z") },
    { title: "Scholarship Opportunity", description: "Apply now for the 'Research Excellence' scholarship.", time: new Date("2024-11-03T14:40:00Z") },
    { title: "Lab Session Cancelled", description: "Today's lab session for 'Physics I' has been cancelled.", time: new Date("2024-11-02T11:50:00Z") },
    { title: "Research Symposium", description: "Attend the Annual Research Symposium on November 20th.", time: new Date("2024-11-01T21:00:00Z") },
    { title: "Advisor Meeting Scheduled", description: "Your academic advisor meeting is scheduled for next week.", time: new Date("2024-10-31T13:35:00Z") },
    { title: "Workshop Invitation", description: "Join the workshop on 'Advanced Data Analytics' this Friday.", time: new Date("2024-10-30T17:15:00Z") },
    { title: "Course Evaluation", description: "Provide feedback for 'Introduction to Programming' course.", time: new Date("2024-10-29T10:25:00Z") },
    { title: "Student Council Election", description: "Vote for the new Student Council representatives.", time: new Date("2024-10-28T15:10:00Z") },
    { title: "Research Grant Deadline", description: "Submit your application for the 'Innovation Grant' by Friday.", time: new Date("2024-10-27T09:55:00Z") },
    { title: "Tutor Session Available", description: "A new tutoring session for 'Linear Algebra' is open for registration.", time: new Date("2024-10-26T14:45:00Z") },
    { title: "Internship Opportunity", description: "Apply for the 'Data Science Internship' by the end of this month.", time: new Date("2024-10-25T18:30:00Z") },
    { title: "Syllabus Update", description: "The syllabus for 'Discrete Mathematics' has been updated.", time: new Date("2024-10-24T12:20:00Z") },
    { title: "Guest Lecture", description: "Attend the guest lecture on 'Cybersecurity Trends' tomorrow.", time: new Date("2024-10-23T16:55:00Z") },
    { title: "Career Fair Registration", description: "Register for the upcoming Career Fair to connect with employers.", time: new Date("2024-10-22T11:10:00Z") }
]