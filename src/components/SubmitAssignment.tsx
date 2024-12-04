import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet";
import { Textarea } from "./ui/textarea";

interface AssignmentSubmissionProps {
  title: string;
  onSubmit: (file: File, comments: string) => void;
}

const AssignmentSubmission: React.FC<AssignmentSubmissionProps> = ({ 
  title, 
  onSubmit 
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [comments, setComments] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (file) {
      onSubmit(file, comments);
    } else {
      alert('Please select a file to submit');
    }
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Submit Assignment: {title}</SheetTitle>
        <SheetDescription>
          Upload your assignment file directly from your computer.
        </SheetDescription>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-center w-full">
            <label 
              htmlFor="dropzone-file" 
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg 
                  className="w-10 h-10 mb-3 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop (*)
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {file ? `Selected: ${file.name}` : 'Any file types allowed'}
                </p>
              </div>
              <Input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="gap-2">
            <Textarea
              placeholder="Additional comments or instructions for the assignment"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <Button 
            onClick={handleSubmit} 
            disabled={!file}
            className="bg-black text-white hover:bg-black"
          >
            Confirm Submission
          </Button>
        </div>
      </SheetHeader>
    </SheetContent>
  );
};

export default AssignmentSubmission;