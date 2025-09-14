import { Calendar, Clock, MapPin, Heart } from "lucide-react";

const ScheduleHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-header text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-bright/20" />
      <div className="relative container mx-auto px-6 py-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-300 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Loly's Schedule
            </h1>
            <Heart className="w-8 h-8 text-red-300 animate-pulse" />
          </div>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Your beautifully organized college schedule, made with love ✨
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Weekly Overview</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Time Management</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Location Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ScheduleHeader;