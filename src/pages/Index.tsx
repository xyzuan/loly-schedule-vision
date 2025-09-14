import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTable, { ScheduleEntry } from "@/components/ScheduleTable";
import campusBg from "@/assets/campus-bg.jpg";

const Index = () => {
  // Loly's actual schedule from the uploaded image
  const lolySchedule: ScheduleEntry[] = [
    { day: "Monday", time: "13:20 - 15:00", subject: "Analisis Big Data A", location: "612 - GKB III" },
    { day: "Monday", time: "18:15 - 20:45", subject: "Temu Kembali Citra B", location: "612 - GKB III" },
    
    { day: "Tuesday", time: "11:10 - 14:10", subject: "Temu Kembali Informasi C", location: "208 - GKB I" },
    
    { day: "Wednesday", time: "08:40 - 11:10", subject: "Pra Skripsi G", location: "403 - GKB II" },
    { day: "Wednesday", time: "11:10 - 14:20", subject: "Etika dan Profesi E", location: "401 - GKB II" },
    
    { day: "Thursday", time: "15:30 - 19:05", subject: "Pembelajaran Mesin B", location: "610 - GKB III" },
    
    { day: "Friday", time: "10:20 - 12:00", subject: "Prak. Pembelajaran Mesin B", location: "Lab EF" },
  ];

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
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Loly's Class Schedule
            </h2>
            <p className="text-muted-foreground">
              Your complete academic schedule for this semester
            </p>
          </div>
          
          <ScheduleTable schedule={lolySchedule} />
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