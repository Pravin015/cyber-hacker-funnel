import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";

export const StickyHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isDiscountActive, setIsDiscountActive] = useState(true);

  useEffect(() => {
    const discountEndDate = new Date();
    discountEndDate.setHours(discountEndDate.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const discountTimeLeft = discountEndDate.getTime() - now;

      if (discountTimeLeft > 0) {
        setIsDiscountActive(true);
        const days = Math.floor(discountTimeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((discountTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((discountTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((discountTimeLeft % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsDiscountActive(false);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <>
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          {/* Left side - Webinar info */}
          <div className="flex items-center gap-2 text-center sm:text-left w-full sm:w-auto justify-center sm:justify-start">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span className="font-semibold">🔥 Live Webinar: Sep 20, 2025</span>
          </div>

          {/* Center - Timer */}
          {isDiscountActive ? (
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <span className="font-medium text-xs sm:text-sm">₹99 Offer Ends In:</span>
              <div className="flex gap-1 bg-black/20 px-2 py-1 rounded">
                <span className="bg-white text-black px-1 rounded text-xs font-bold min-w-[20px] text-center">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-white">:</span>
                <span className="bg-white text-black px-1 rounded text-xs font-bold min-w-[20px] text-center">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-white">:</span>
                <span className="bg-white text-black px-1 rounded text-xs font-bold min-w-[20px] text-center">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center w-full sm:w-auto">
              <span className="font-semibold">⚠️ Price Now: ₹4999</span>
            </div>
          )}

          {/* Right side - Limited seats */}
          <div className="flex items-center gap-2 text-center sm:text-right w-full sm:w-auto justify-center sm:justify-end">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm">Only 50 Seats Left!</span>
          </div>
        </div>
      </div>

      {/* Spacer to prevent overlap with content below */}
    <div className="h-5 xs:h-2 sm:h-1 md:h-2 lg:h-4"></div>
    </>
  );
};