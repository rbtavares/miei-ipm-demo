interface Event {
    title: string,
    location?: string,
    startTime?: Date,
    endTime?: Date,
    type: 'test' | 'assignment' | 'other',
    course: string
}

export const events: Event[] = [
    { title: "IPM Lab P6", location: "Room 121 Ed.2", startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "IPM" },
    { title: "IA Lecture", location: "Room 1C Ed.7", startTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "IA" }, 
    { title: "IA Test 2", location: "Room 128", startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "IA" },
    { title: "IPM Project 2 Submission", startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "IPM" },
    { title: "IPM Lab P6", location: "Room 121 Ed.2", startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "IPM" },
    { title: "MPC Lab P9", location: "Room 4.3 Ed.8", startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "MPC" },
    { title: "IPM Test 1", location: "Room 127", startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "IPM" },
    { title: "IA Assignment Submission", startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "IA" },
    { title: "MPC Lab P9", location: "Room 4.3 Ed.8", startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "MPC" },
    { title: "MPC Lecture", location: "Room 1D Ed.7", startTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "MPC" },
    { title: "IPM Lecture", location: "Room 128 Ed.2", startTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "other", course: "IPM" },
    { title: "IA Lab P3", location: "Room 122 Ed.2", startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), type: "other", course: "IA" },
    { title: "IA Test 2", location: "Room 128", startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "IA" },
    { title: "MPC Test 1", location: "Room 127", startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000), type: "test", course: "MPC" },
    { title: "MPC Assignment 1 Submission", startTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), type: "assignment", course: "MPC" },
  ]
