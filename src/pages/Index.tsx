import campusBg from "@/assets/campus-bg.jpg";
import xylolys1 from "@/assets/xylolys-1.png";
import xylolys2 from "@/assets/xylolys-2.png";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTable, { ScheduleEntry } from "@/components/ScheduleTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Heart,
  LayoutGrid,
  List,
  MapPin,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [viewMode, setViewMode] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [showTodayWidget, setShowTodayWidget] = useState(true);
  const [currentTextIndex1, setCurrentTextIndex1] = useState(0);
  const [currentTextIndex2, setCurrentTextIndex2] = useState(0);

  // Cute spirit texts for Xylolys 1
  const spiritTexts1 = [
    { title: "Semangat sayang! 💖", subtitle: "Loly pasti bisa kok! ✨" },
    { title: "Loly cantik! 🌸", subtitle: "Punyaaa mas jodyyy! ✨" },
    { title: "Semangat belajar habuuu! 📚", subtitle: "Mas jodyy hereee! 💝" },
  ];

  // Cute spirit texts for Xylolys 2
  const spiritTexts2 = [
    { title: "Fighting Loly! 🌟", subtitle: "Kamu hebat banget! 💪" },
    {
      title: "Tetap semangat sayanggg! 🌈",
      subtitle: "Mas jodyy besidee you always! 💖",
    },
  ];

  // Rotate texts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex1((prev) => (prev + 1) % spiritTexts1.length);
      setCurrentTextIndex2((prev) => (prev + 1) % spiritTexts2.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [spiritTexts1.length, spiritTexts2.length]);

  // Helper function to create date for this week
  const createTimeForDay = (dayName: string, timeString: string): Date => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const targetDay = days.indexOf(dayName);

    const now = new Date();
    const currentDay = now.getDay();
    const daysToAdd = (targetDay - currentDay + 7) % 7;

    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + daysToAdd);

    const [hours, minutes] = timeString.split(":").map(Number);
    targetDate.setHours(hours, minutes, 0, 0);

    return targetDate;
  };

  // Helper function to get today's day name
  const getTodayName = (): string => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };

  // Helper function to format time range
  const formatTimeRange = (startTime: Date, endTime: Date): string => {
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  // Helper function to get subject color
  const getSubjectColor = (subject: string) => {
    const colors = [
      "bg-primary/20 text-primary border-primary/30",
      "bg-accent-bright/20 text-accent-bright border-accent-bright/30",
      "bg-success/20 text-success border-success/30",
      "bg-warning/20 text-warning border-warning/30",
      "bg-secondary/40 text-secondary-foreground border-secondary/60",
    ];

    const hash = subject.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return colors[Math.abs(hash) % colors.length];
  };

  // Loly's actual schedule from the uploaded image
  const lolySchedule: ScheduleEntry[] = [
    {
      day: "Monday",
      startTime: createTimeForDay("Monday", "13:20"),
      endTime: createTimeForDay("Monday", "15:00"),
      subject: "Analisis Big Data A",
      location: "612 - GKB III",
      lecturer: "Yuda Munarko, S.Kom., M.Sc",
    },
    {
      day: "Monday",
      startTime: createTimeForDay("Monday", "18:15"),
      endTime: createTimeForDay("Monday", "20:45"),
      subject: "Temu Kembali Citra B",
      location: "612 - GKB III",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
    {
      day: "Tuesday",
      startTime: createTimeForDay("Tuesday", "11:10"),
      endTime: createTimeForDay("Tuesday", "14:10"),
      subject: "Temu Kembali Informasi C",
      location: "208 - GKB I",
      lecturer: "Nur Hayatin, S. ST., M.Kom",
    },
    {
      day: "Wednesday",
      startTime: createTimeForDay("Wednesday", "11:10"),
      endTime: createTimeForDay("Wednesday", "14:20"),
      subject: "Etika dan Profesi E",
      location: "401 - GKB II",
      lecturer: "Ir. Galih Wasis Wicaksono, S.Kom. M.Cs.",
    },
    {
      day: "Thursday",
      startTime: createTimeForDay("Thursday", "15:30"),
      endTime: createTimeForDay("Thursday", "19:05"),
      subject: "Pembelajaran Mesin B",
      location: "610 - GKB III",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
    {
      day: "Friday",
      startTime: createTimeForDay("Friday", "07:00"),
      endTime: createTimeForDay("Friday", "09:30"),
      subject: "Pra Skripsi G",
      location: "611 - GKB III",
      lecturer: "Setio Basuki, ST, MT, Ph.D.",
    },
    {
      day: "Friday",
      startTime: createTimeForDay("Friday", "10:20"),
      endTime: createTimeForDay("Friday", "12:00"),
      subject: "Prak. Pembelajaran Mesin B",
      location: "Lab EF",
      lecturer: "Ir. Yufis Azhar, S.Kom., M.Kom.",
    },
  ];

  // Get today's schedule
  const todayName = getTodayName();
  const todaysSchedule = lolySchedule.filter(
    (entry) => entry.day.toLowerCase() === todayName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Background Image Overlay */}
      <div
        className="fixed inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusBg})` }}
      />

      {/* Cute Floating Today's Schedule Widget - Bottom Center */}
      {showTodayWidget && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md animate-in slide-in-from-bottom-full duration-500">
          <Card className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 border-2 border-pink-200 dark:border-pink-800 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
                  <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-spin" />
                </div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Today's Classes ✨
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTodayWidget(false)}
                className="h-6 w-6 p-0 hover:bg-pink-100 dark:hover:bg-pink-900 rounded-full"
              >
                <X className="w-4 h-4 text-pink-600" />
              </Button>
            </div>

            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 rounded-full">
                <Calendar className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                  {todayName} 💖
                </span>
              </div>
            </div>

            {todaysSchedule.length > 0 ? (
              <div className="space-y-3">
                {todaysSchedule.map((entry, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/70 dark:bg-black/20 rounded-lg border border-pink-200/50 dark:border-pink-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                      <Badge
                        className={`${getSubjectColor(
                          entry.subject
                        )} font-medium text-xs`}
                      >
                        {entry.subject}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-pink-700 dark:text-pink-300 mb-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-medium">
                        {formatTimeRange(entry.startTime, entry.endTime)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-pink-600 dark:text-pink-400 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{entry.location}</span>
                    </div>

                    <div className="text-xs text-pink-500 dark:text-pink-400 font-medium">
                      👩‍🏫 {entry.lecturer}
                    </div>
                  </div>
                ))}
                <div className="text-center text-xs text-pink-600 dark:text-pink-400 font-medium">
                  You got this, Loly! 🌟💪
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-sm font-medium text-pink-700 dark:text-pink-300 mb-1">
                  No classes today!
                </p>
                <p className="text-xs text-pink-600 dark:text-pink-400">
                  Time to relax and recharge! ✨
                </p>
              </div>
            )}
          </Card>
        </div>
      )}

      <div className="relative z-10">
        <ScheduleHeader />

        {/* Cute Show Today Button */}
        {!showTodayWidget && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
            <Button
              onClick={() => setShowTodayWidget(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Today's Classes ✨</span>
              </div>
            </Button>
          </div>
        )}

        {/* Cute Xylolys Characters at Bottom - Absolute Position */}
        <div className="fixed bottom-8 right-6 z-40">
          <div className="flex justify-center items-end gap-8">
            {/* Xylolys 1 with Animated Bubble Chat */}
            <div
              className="relative animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            >
              <div className="relative mb-4">
                {/* Speech Bubble - Above Avatar */}
                <div className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 rounded-2xl p-4 shadow-lg border-2 border-pink-300 dark:border-pink-600 relative max-w-xs transform transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-700 dark:text-pink-200 mb-1 animate-pulse">
                      {spiritTexts1[currentTextIndex1].title}
                    </div>
                    <div className="text-sm text-pink-600 dark:text-pink-300">
                      {spiritTexts1[currentTextIndex1].subtitle}
                    </div>
                  </div>
                  {/* Bubble tail pointing down to avatar */}
                  <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-pink-300 dark:border-t-pink-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={xylolys1}
                  alt="Xylolys 1 giving encouragement"
                  className="w-24 h-24 object-contain filter drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Xylolys 2 with Animated Bubble Chat */}
            <div
              className="relative animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "3s" }}
            >
              <div className="relative mb-4">
                {/* Speech Bubble - Above Avatar */}
                <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-2xl p-4 shadow-lg border-2 border-purple-300 dark:border-purple-600 relative max-w-xs transform transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-700 dark:text-purple-200 mb-1 animate-pulse">
                      {spiritTexts2[currentTextIndex2].title}
                    </div>
                    <div className="text-sm text-purple-600 dark:text-purple-300">
                      {spiritTexts2[currentTextIndex2].subtitle}
                    </div>
                  </div>
                  {/* Bubble tail pointing down to avatar */}
                  <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-purple-300 dark:border-t-purple-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={xylolys2}
                  alt="Xylolys 2 giving spirit"
                  className="w-24 h-24 object-contain filter drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Floating Hearts and Stars around characters */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-4 -left-6 text-pink-400 animate-pulse">
              <Heart className="w-5 h-5" />
            </div>
            <div
              className="absolute -top-6 -right-6 text-yellow-400 animate-spin"
              style={{ animationDuration: "4s" }}
            >
              <Star className="w-5 h-5" />
            </div>
            <div className="absolute top-1/2 -left-8 text-purple-400 animate-bounce">
              <Sparkles className="w-4 h-4" />
            </div>
            <div
              className="absolute top-1/3 -right-8 text-pink-300 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <Heart className="w-4 h-4" />
            </div>
            <div
              className="absolute -bottom-2 left-1/2 text-yellow-300 animate-spin"
              style={{ animationDelay: "1s", animationDuration: "6s" }}
            >
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Global Floating Hearts and Stars Across Entire Screen */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
          {/* Top corners and edges */}
          <div className="absolute top-4 left-4 text-pink-500 animate-pulse">
            <Heart className="w-8 h-8 opacity-70" />
          </div>
          <div
            className="absolute top-8 right-8 text-yellow-500 animate-spin"
            style={{ animationDuration: "5s" }}
          >
            <Star className="w-7 h-7 opacity-60" />
          </div>
          <div
            className="absolute top-16 left-1/4 text-purple-400 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Sparkles className="w-6 h-6 opacity-50" />
          </div>
          <div
            className="absolute top-12 right-1/3 text-pink-400 animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            <Heart className="w-6 h-6 opacity-60" />
          </div>

          {/* Middle section - left and right */}
          <div
            className="absolute top-1/4 left-2 text-yellow-400 animate-spin"
            style={{ animationDuration: "7s" }}
          >
            <Star className="w-9 h-9 opacity-40" />
          </div>
          <div
            className="absolute top-1/3 right-4 text-purple-500 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            <Sparkles className="w-7 h-7 opacity-70" />
          </div>
          <div
            className="absolute top-1/2 left-8 text-pink-300 animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <Heart className="w-8 h-8 opacity-50" />
          </div>
          <div
            className="absolute top-2/3 right-2 text-yellow-300 animate-spin"
            style={{ animationDelay: "1.5s", animationDuration: "6s" }}
          >
            <Star className="w-6 h-6 opacity-60" />
          </div>

          {/* Center area */}
          <div
            className="absolute top-1/3 left-1/3 text-purple-300 animate-bounce"
            style={{ animationDelay: "2.5s" }}
          >
            <Sparkles className="w-5 h-5 opacity-30" />
          </div>
          <div
            className="absolute top-1/2 right-1/3 text-pink-400 animate-pulse"
            style={{ animationDelay: "5s" }}
          >
            <Heart className="w-7 h-7 opacity-40" />
          </div>
          <div
            className="absolute top-2/3 left-1/2 text-yellow-400 animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <Star className="w-6 h-6 opacity-50" />
          </div>

          {/* Bottom area */}
          <div
            className="absolute bottom-1/4 left-6 text-pink-500 animate-pulse"
            style={{ animationDelay: "3.5s" }}
          >
            <Heart className="w-9 h-9 opacity-60" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/4 text-purple-400 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Sparkles className="w-8 h-8 opacity-70" />
          </div>
          <div
            className="absolute bottom-16 right-1/4 text-yellow-500 animate-spin"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          >
            <Star className="w-7 h-7 opacity-50" />
          </div>
          <div
            className="absolute bottom-8 left-1/3 text-pink-300 animate-pulse"
            style={{ animationDelay: "4.5s" }}
          >
            <Heart className="w-6 h-6 opacity-40" />
          </div>

          {/* Extra floating elements for more intensity */}
          <div
            className="absolute top-1/5 left-1/5 text-purple-500 animate-bounce"
            style={{ animationDelay: "6s" }}
          >
            <Sparkles className="w-4 h-4 opacity-30" />
          </div>
          <div
            className="absolute top-3/4 right-1/5 text-yellow-300 animate-spin"
            style={{ animationDelay: "3s", animationDuration: "9s" }}
          >
            <Star className="w-5 h-5 opacity-40" />
          </div>
          <div
            className="absolute top-1/6 right-1/2 text-pink-500 animate-pulse"
            style={{ animationDelay: "7s" }}
          >
            <Heart className="w-5 h-5 opacity-50" />
          </div>
          <div
            className="absolute bottom-1/5 right-1/6 text-purple-300 animate-bounce"
            style={{ animationDelay: "4s" }}
          >
            <Sparkles className="w-6 h-6 opacity-60" />
          </div>

          {/* Corner intensifiers */}
          <div
            className="absolute top-2 left-2 text-yellow-500 animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <Star className="w-4 h-4 opacity-30" />
          </div>
          <div
            className="absolute top-2 right-2 text-pink-400 animate-pulse"
            style={{ animationDelay: "8s" }}
          >
            <Heart className="w-4 h-4 opacity-40" />
          </div>
          <div
            className="absolute bottom-2 left-2 text-purple-400 animate-bounce"
            style={{ animationDelay: "5s" }}
          >
            <Sparkles className="w-4 h-4 opacity-50" />
          </div>
          <div
            className="absolute bottom-2 right-2 text-yellow-400 animate-spin"
            style={{ animationDelay: "6s", animationDuration: "7s" }}
          >
            <Star className="w-4 h-4 opacity-30" />
          </div>
        </div>

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

        <footer className="text-center py-8 mb-32">
          <p className="text-sm text-muted-foreground bg-white/70 dark:bg-black/70 rounded-full px-4 py-2 inline-block backdrop-blur-sm border border-pink-200 dark:border-pink-700">
            Made with 💖 from jodyyy for Lolyyy
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
