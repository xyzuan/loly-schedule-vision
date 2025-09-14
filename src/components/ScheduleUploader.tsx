import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileImage, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScheduleUploaderProps {
  onScheduleParsed: (schedule: any[]) => void;
}

const ScheduleUploader = ({ onScheduleParsed }: ScheduleUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    try {
      // Here you would implement the actual image parsing logic
      // For now, we'll show a placeholder message
      toast({
        title: "Image Uploaded!",
        description: "Please share the schedule details so I can parse and display them properly.",
      });
      
      // Placeholder schedule data
      const sampleSchedule = [
        { day: "Monday", time: "09:00 AM", subject: "Mathematics", location: "Room 101" },
        { day: "Monday", time: "11:00 AM", subject: "Physics", location: "Lab A" },
        { day: "Tuesday", time: "10:00 AM", subject: "Chemistry", location: "Lab B" },
        { day: "Wednesday", time: "02:00 PM", subject: "English Literature", location: "Room 205" },
        { day: "Thursday", time: "09:00 AM", subject: "Computer Science", location: "Computer Lab" },
        { day: "Friday", time: "01:00 PM", subject: "History", location: "Room 301" },
      ];
      
      onScheduleParsed(sampleSchedule);
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="p-8 bg-gradient-card shadow-card text-center">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
            <FileImage className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Upload Schedule Image
          </h3>
          <p className="text-muted-foreground mt-2">
            Upload your schedules.jpeg file to automatically parse and display your college schedule
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          <span>
            Make sure locations are marked with *** in your image for proper parsing
          </span>
        </div>
        
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="schedule-upload"
            disabled={isUploading}
          />
          <label htmlFor="schedule-upload">
            <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <span className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Processing..." : "Choose Image"}
              </span>
            </Button>
          </label>
        </div>
      </div>
    </Card>
  );
};

export default ScheduleUploader;