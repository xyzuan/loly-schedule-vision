import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, MapPin, BookOpen } from "lucide-react";

export interface ScheduleEntry {
  day: string;
  time: string;
  subject: string;
  location: string;
}

interface ScheduleTableProps {
  schedule: ScheduleEntry[];
  viewMode?: 'horizontal' | 'vertical';
}

const getSubjectColor = (subject: string) => {
  const colors = [
    "bg-primary/20 text-primary border-primary/30",
    "bg-accent-bright/20 text-accent-bright border-accent-bright/30",
    "bg-success/20 text-success border-success/30",
    "bg-warning/20 text-warning border-warning/30",
    "bg-secondary/40 text-secondary-foreground border-secondary/60",
  ];
  
  const hash = subject.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return colors[Math.abs(hash) % colors.length];
};

const ScheduleTable = ({ schedule, viewMode = 'horizontal' }: ScheduleTableProps) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  if (viewMode === 'vertical') {
    return (
      <Card className="overflow-hidden bg-gradient-card shadow-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Day</TableHead>
              <TableHead className="font-semibold">Time</TableHead>
              <TableHead className="font-semibold">Subject</TableHead>
              <TableHead className="font-semibold">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((entry, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="font-medium">{entry.day}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{entry.time}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <Badge className={`${getSubjectColor(entry.subject)} font-medium`}>
                      {entry.subject}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{entry.location}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }

  // Horizontal card view (default)
  return (
    <div className="space-y-6">
      {days.map(day => {
        const daySchedule = schedule.filter(entry => 
          entry.day.toLowerCase().includes(day.toLowerCase().slice(0, 3))
        );
        
        if (daySchedule.length === 0) return null;
        
        return (
          <Card key={day} className="p-6 bg-gradient-card shadow-card hover:shadow-float transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-primary" />
              {day}
            </h3>
            
            <div className="grid gap-4">
              {daySchedule.map((entry, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {entry.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-1">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <Badge className={`${getSubjectColor(entry.subject)} font-medium`}>
                      {entry.subject}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {entry.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ScheduleTable;