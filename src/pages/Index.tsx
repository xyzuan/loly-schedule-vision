import { useState } from "react";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTable, { ScheduleEntry } from "@/components/ScheduleTable";
import ScheduleUploader from "@/components/ScheduleUploader";
import campusBg from "@/assets/campus-bg.jpg";

const Index = () => {
  const [schedule, setSchedule] = useState<ScheduleEntry[]>([]);

  // Sample schedule data for demonstration
  const sampleSchedule: ScheduleEntry[] = [
    { day: "Monday", time: "09:00 AM - 10:30 AM", subject: "Advanced Mathematics", location: "Science Building, Room 301" },
    { day: "Monday", time: "11:00 AM - 12:30 PM", subject: "Physics Lab", location: "Physics Laboratory A" },
    { day: "Monday", time: "02:00 PM - 03:30 PM", subject: "English Literature", location: "Humanities Hall, Room 205" },
    
    { day: "Tuesday", time: "10:00 AM - 11:30 AM", subject: "Organic Chemistry", location: "Chemistry Building, Lab B" },
    { day: "Tuesday", time: "01:00 PM - 02:30 PM", subject: "Computer Programming", location: "Computer Science Center" },
    { day: "Tuesday", time: "03:00 PM - 04:30 PM", subject: "Statistics", location: "Mathematics Building, Room 150" },
    
    { day: "Wednesday", time: "09:30 AM - 11:00 AM", subject: "World History", location: "Liberal Arts Building, Room 401" },
    { day: "Wednesday", time: "02:00 PM - 03:30 PM", subject: "Biology", location: "Life Sciences Building, Room 230" },
    
    { day: "Thursday", time: "08:00 AM - 09:30 AM", subject: "Psychology", location: "Social Sciences Hall, Room 175" },
    { day: "Thursday", time: "11:00 AM - 12:30 PM", subject: "Art History", location: "Fine Arts Center, Room 112" },
    { day: "Thursday", time: "02:00 PM - 03:30 PM", subject: "Philosophy", location: "Philosophy Department, Room 340" },
    
    { day: "Friday", time: "10:00 AM - 11:30 AM", subject: "Environmental Science", location: "Environmental Studies Building" },
    { day: "Friday", time: "01:00 PM - 02:30 PM", subject: "Spanish Language", location: "Language Center, Room 220" },
  ];

  const handleScheduleParsed = (parsedSchedule: ScheduleEntry[]) => {
    setSchedule(parsedSchedule);
  };

  const displaySchedule = schedule.length > 0 ? schedule : sampleSchedule;

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusBg})` }}
      />
      
      <div className="relative z-10">
        <ScheduleHeader />
        
        <main className="container mx-auto px-6 py-12 space-y-12">
          {schedule.length === 0 && (
            <ScheduleUploader onScheduleParsed={handleScheduleParsed} />
          )}
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              {schedule.length > 0 ? "Your Parsed Schedule" : "Sample Schedule Preview"}
            </h2>
            <p className="text-muted-foreground">
              {schedule.length > 0 
                ? "Here's your schedule parsed from the uploaded image" 
                : "This is how your schedule will look once you upload the image"
              }
            </p>
          </div>
          
          <ScheduleTable schedule={displaySchedule} />
          
          {schedule.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setSchedule([])}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Upload a different schedule
              </button>
            </div>
          )}
        </main>
        
        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm">
            Made with 💖 for Loly's academic success
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;