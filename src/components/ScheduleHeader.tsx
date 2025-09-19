import { Calendar, Clock, MapPin, Heart } from "lucide-react";

const ScheduleHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-header text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-bright/20" />
      <div className="relative container mx-auto px-6 py-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              loly schedule
            </h1>
            <Heart className="w-8 h-8 text-red-300 animate-pulse" />
          </div>

          <p className="text-xl text-primary-foreground/90 max-w-2xl ">
            loly imnidaa personal college schedules ✨
          </p>
        </div>
      </div>
    </header>
  );
};

export default ScheduleHeader;
