interface Notification {
    title: string
    description: string
    /*time: Date*/
    course: string
}

export const notifications: Notification[] = [
    {title: "Profile Update", description: "New document added to your profile. Check it out!", course: "General"},
    {title: "New IPM Learning Material", description: "Lecture notes and reference materials for the latest IPM module have been uploaded.", course: "IPM"},
    {title: "Tuition Fee Payment Reminder", description: "Your tuition fee payment is due. Please go to your profile to make sure to complete the payment on time.", course: "General"},
    {title: "System Maintenance", description: "Our platform will undergo routine maintenance. Expect brief interruptions.", course: "General"},
    {title: "IPM Project 2 Reminder", description: "Your Project 2 submission is due soon. Don't forget to submit before the deadline!", course: "IPM"},
    {title: "Career Fair Invitation", description: "Exciting career opportunities await! Join our upcoming Career Fair and connect with top employers.", course: "General"},
    {title: "IA Test 2 Enrollment", description: "Enrollment for IA Test 2 is now open. Register before the cutoff date.", course: "IA"},
    {title: "New MPC Learning Material", description: "Additional study materials and supplementary content have been added to the course.", course: "MPC"},
    {title: "IPM Test 1 Enrollment", description: "Enrollment for IPM Test 1 is now open. Make sure to register in time.", course: "IPM"},
    {title: "New IA Course Material", description: "Updated lecture slides and additional reading resources are now available.", course: "IA"},
    {title: "MPC Assignment 1 Deadline", description: "Reminder: MPC Assignment 1 is due soon. Review and submit your work.", course: "MPC"},
    {title: "IA Assignment Reminder", description: "Your assignment submission deadline is approaching. Ensure all requirements are met.", course: "IA"},
    {title: "MPC Test 1 Enrollment", description: "Enrollment for MPC Test 1 is now open. Don't miss your chance to register.", course: "MPC"}
]

/*
export const notifications: Notification[] = [
    {title: "Profile Update", description: "New document added to your profile. Check it out!", time: new Date(Date.now()), course: "General"},
    {title: "New IPM Learning Material", description: "Lecture notes and reference materials for the latest IPM module have been uploaded.", time: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), course: "IPM"},
    {title: "Tuition Fee Payment Reminder", description: "Your tuition fee payment is due. Please go to your profile to make sure to complete the payment on time.", time: new Date(Date.now() + 1 * 24 * 60 * 60 * 1100), course: "General"},
    {title: "System Maintenance", description: "Our platform will undergo routine maintenance. Expect brief interruptions.", time: new Date(Date.now() + 1 * 24 * 60 * 60 * 1200), course: "General"},
    {title: "IPM Project 2 Reminder", description: "Your Project 2 submission is due soon. Don't forget to submit before the deadline!", time: new Date(Date.now() + 1 * 24 * 60 * 60 * 1500), course: "IPM"},
    {title: "Career Fair Invitation", description: "Exciting career opportunities await! Join our upcoming Career Fair and connect with top employers.", time: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), course: "General"},
    {title: "IA Test 2 Enrollment", description: "Enrollment for IA Test 2 is now open. Register before the cutoff date.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), course: "IA"},
    {title: "New MPC Learning Material", description: "Additional study materials and supplementary content have been added to the course.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 1200), course: "MPC"},
    {title: "IPM Test 1 Enrollment", description: "Enrollment for IPM Test 1 is now open. Make sure to register in time.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 1700), course: "IPM"},
    {title: "New IA Course Material", description: "Updated lecture slides and additional reading resources are now available.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 2000), course: "IA"},
    {title: "MPC Assignment 1 Deadline", description: "Reminder: MPC Assignment 1 is due soon. Review and submit your work.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 2100), course: "MPC"},
    {title: "IA Assignment Reminder", description: "Your assignment submission deadline is approaching. Ensure all requirements are met.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 2300), course: "IA"},
    {title: "MPC Test 1 Enrollment", description: "Enrollment for MPC Test 1 is now open. Don't miss your chance to register.", time: new Date(Date.now() + 4 * 24 * 60 * 60 * 2350), course: "MPC"}
]
*/