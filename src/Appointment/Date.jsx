"use client";

import React, { useState, useRef, useEffect } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { ChevronDown } from 'lucide-react';

const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const scrollRef = useRef(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Scroll to the selected date
  useEffect(() => {
    if (scrollRef.current && selectedDate) {
      const selectedElement = scrollRef.current.querySelector(`[data-date="${selectedDate.toISOString()}"]`);
      if (selectedElement) {
        const scrollContainer = scrollRef.current;
        const scrollContainerRect = scrollContainer.getBoundingClientRect();
        const selectedElementRect = selectedElement.getBoundingClientRect();

        const scrollLeft = selectedElementRect.left - scrollContainerRect.left + scrollContainer.scrollLeft - (scrollContainerRect.width / 2) + (selectedElementRect.width / 2);
        scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [selectedDate]);

  const handleMonthChange = (event) => {
    setCurrentMonth(new Date(event.target.value));
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Month Selector */}
      <div className="p-2 border-b">
        <div className="relative">
          <select
            value={format(currentMonth, "yyyy-MM")}
            onChange={handleMonthChange}
            className="w-full text-base font-semibold appearance-none bg-transparent p-2  "
          >
            {Array.from({ length: 12 }, (_, i) => addMonths(new Date(), i - 6)).map((date) => (
              <option key={date.toISOString()} value={format(date, "yyyy-MM")}>
                {format(date, "MMMM yyyy")}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Days Grid */}
      <div className="p-2">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-2 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {monthDays.map((day) => (
            <button
              key={day.toISOString()}
              onClick={() => setSelectedDate(day)}
              data-date={day.toISOString()}
              className={`flex-shrink-0 w-16 h-20 mx-1 rounded-lg flex flex-col items-center justify-center
                ${isSameDay(day, selectedDate) 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100 text-gray-700"}`}
              style={{ minWidth: '64px', minHeight: '80px' }} // Ensure buttons have fixed size
            >
              <span className="text-2xl font-bold">{format(day, "d")}</span>
              <span className="text-sm font-medium">{format(day, "EEE")}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
