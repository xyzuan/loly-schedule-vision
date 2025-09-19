import { useState } from "react";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTable, { ScheduleEntry } from "@/components/ScheduleTable";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import campusBg from "@/assets/campus-bg.jpg";

const Index = () => {
  const [viewMode, setViewMode] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  // Loly's actual schedule from the uploaded image
  const lolySchedule: ScheduleEntry[] = [
    {
      day: "Monday",
      time: "13:20 - 15:00",
      subject: "Analisis Big Data A",
      location: "612 - GKB III",
      lecturer: "Yuda Munarko, S.Kom., M.Sc",
    },
    {
      day: "Monday",
      time: "18:15 - 20:45",
      subject: "Temu Kembali Citra B",
      location: "612 - GKB III",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
    {
      day: "Tuesday",
      time: "11:10 - 14:10",
      subject: "Temu Kembali Informasi C",
      location: "208 - GKB I",
      lecturer: "Nur Hayatin, S. ST., M.Kom",
    },
    {
      day: "Wednesday",
      time: "08:40 - 11:10",
      subject: "Pra Skripsi G",
      location: "403 - GKB II",
      lecturer: "Setio Basuki, ST, MT, Ph.D.",
    },
    {
      day: "Wednesday",
      time: "11:10 - 14:20",
      subject: "Etika dan Profesi E",
      location: "401 - GKB II",
      lecturer: "Ir. Galih Wasis Wicaksono, S.Kom. M.Cs.",
    },
    {
      day: "Thursday",
      time: "15:30 - 19:05",
      subject: "Pembelajaran Mesin B",
      location: "610 - GKB III",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
    {
      day: "Friday",
      time: "10:20 - 12:00",
      subject: "Prak. Pembelajaran Mesin B",
      location: "Lab EF",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Loly's Class Schedule
              </h2>
              <p className="text-muted-foreground">
                Your complete academic schedule for this semester
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "horizontal" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("horizontal")}
                className="flex items-center gap-2"
              >
                <LayoutGrid className="w-4 h-4" />
                Cards
              </Button>
              <Button
                variant={viewMode === "vertical" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("vertical")}
                className="flex items-center gap-2"
              >
                <List className="w-4 h-4" />
                List
              </Button>
            </div>
          </div>

          <ScheduleTable schedule={lolySchedule} viewMode={viewMode} />
        </main>

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm">Made with 💖 for Loly's academic success</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
