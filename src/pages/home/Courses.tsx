import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Course, courses } from "@/data/Courses";
import { cn, getPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Bell, Check, ChevronsUpDown, CirclePlus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CourseCard {
  name: string
  abbrev: string
  info: string
  ects: number
  hasNotifications?: boolean
}

const RegisterCourse = ( {coursesRegistered, setCoursesRegistered, setRegisteredInCourses} : 
  {coursesRegistered: Course[], 
    setCoursesRegistered: React.Dispatch<React.SetStateAction<Course[]>>,
    setRegisteredInCourses: React.Dispatch<React.SetStateAction<boolean>>} ) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const handleRegisterClick = (name: string) => {
    if (!name) {
      toast("Please select a course before registering.")
      return
    }
    toast(`Registered for ${name}.`) 
    setDialogOpen(false);
    setRegisteredInCourses(true);
    setCoursesRegistered(coursesRegistered.map((c) =>
      c.name === name ? {
        name: c.name,
        abbrev: c.abbrev,
        description: c.description,
        info: c.info,
        professor: c.professor,
        coordinater: c.coordinater,
        id: c.id,
        ects: c.ects,
        enrolled: true,
      } : c   
    ));
    setValue("")
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button><CirclePlus /> Register</Button>
        </DialogTrigger>
  
        <DialogContent className='max-w-sm'>
          <DialogHeader>
            <DialogTitle className='text-3xl mb-1'>Register</DialogTitle>
            <DialogDescription className='text-lg'>Select a course to enroll.</DialogDescription>
          </DialogHeader>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
                >
                {value? coursesRegistered.find((course) => course.name === value)?.name: "Select course..."}
                  <ChevronsUpDown className="ml-2 h-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search course..." />
                  <CommandList>
                    <CommandEmpty>No course found.</CommandEmpty>
                    <CommandGroup>
                      {coursesRegistered.map((course) => (
                        course.enrolled ? <div></div> : <CommandItem
                          key={course.name}
                          value={course.name}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === course.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {course.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button className="drop-shadow-md bg-white mt-1" variant="default" onClick={() => handleRegisterClick(value)} aria-label="Register for course">
              Register
            </Button>
          </DialogContent>
        </Dialog>
  )
}

const CourseCard = ({ name, abbrev, info, ects, hasNotifications = false }: CourseCard) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/20 flex h-full px-3 py-2 rounded-lg cursor-pointer" 
    onClick={() => navigate(getPath(`/course/${encodeURIComponent(name)}`))}>

      {/* Course Info */}
      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h1 className=" text-xl font-medium">{name}</h1>
          <h3 className="text-xs opacity-70">{abbrev} &mdash; {ects} ECTS</h3>
        </div>
        <p className="text-sm">{info}</p>
      </div>

      {/* Notifications & Arrow */}
      <div className="h-full flex flex-col justify-center gap-2 text-white/60">
        <div className="relative">
          {hasNotifications &&
            <span className="absolute top-[-4px] right-[-1px] flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-white/80"></span>
            </span>
          }
          <Bell />
        </div>

        <ArrowRight />
      </div>

    </div>
  )
}

const Courses = ({ setRegisteredInCourses }: { setRegisteredInCourses: React.Dispatch<React.SetStateAction<boolean>> }) => {
  
  const [coursesRegistered, setCoursesRegistered] = useState(courses);

  return (
  <div className="relative flex-1">
    <div className="absolute h-full w-full card fscroll flex flex-col gap-4 p-4">

    <div className='flex justify-between'>
      {/* Card Header */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="header"
      >
        Courses
      </motion.h1>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay: 0.9 }}>
      <RegisterCourse coursesRegistered={coursesRegistered} setCoursesRegistered={setCoursesRegistered} setRegisteredInCourses={setRegisteredInCourses}/>
      </motion.div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-3 text-white overflow-y-auto pr-1">
        {coursesRegistered.map((item, index) => (
          !item.enrolled ? (
            <></>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              key={index}
            >
              <CourseCard
                name={item.name}
                abbrev={item.abbrev}
                info={item.info}
                ects={item.ects}
                hasNotifications={index % 2 == 0}
              />
            </motion.div>
          )
        ))}
      </div>

    </div>
  </div>
)};

export default Courses;