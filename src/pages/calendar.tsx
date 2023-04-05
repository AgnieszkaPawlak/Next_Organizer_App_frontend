import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useEffect } from 'react';
import DateRangeForm from '@/components/input-form';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Seo } from '@/components/seo';
import { apiData } from '@/lib/apiData';
import { Navbar } from '@/components/navbar';

const localizer = momentLocalizer(moment);

interface Event {
  id: string;
  title: string;
  createDate: Date;
  startDate: Date;
  endDate: Date;
  color?: string;
  colorEvent?: string;
}

const MyCalendar = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  const handleDeleteEvent = async (event: string) => {
    await apiData.delete(`events/${event}`);
  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/events');
        const data = await response.json();

        setAllEvents(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadEvents();
  }, []);

  const handleSelectEvent = (events: Event) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      handleDeleteEvent(events.id);
    }
    console.log(events.id, confirmDelete);
  };

  const eventList = allEvents.map((event) => ({
    id: event.id,
    title: event.title,
    createDate: new Date(event.createDate),
    startDate: new Date(event.startDate),
    endDate: new Date(event.endDate),
    color: event.color,
    colorEvent: event.colorEvent,
  }));

  //?
  if (!eventList) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Seo title="Calendar" />
      <Navbar />
      <div>
        <h1 className="my-2 mx-8 rounded-md bg-primary text-center">Calendar</h1>
        <DateRangeForm />
        <BigCalendar
          onSelectEvent={handleSelectEvent}
          showAllEvents={true}
          selectable
          localizer={localizer}
          defaultView={Views.MONTH}
          views={[Views.DAY, Views.MONTH, Views.AGENDA]}
          defaultDate={new Date()}
          events={eventList}
          startAccessor="startDate"
          endAccessor="endDate"
          style={{ height: '70vh', margin: '50px' }}
          eventPropGetter={(eventList) => {
            const backgroundColor = eventList.colorEvent ? eventList.colorEvent : 'primary-blue';
            const color = eventList.color ? eventList.color : 'black';
            return { style: { backgroundColor, color } };
          }}
        />
      </div>
    </>
  );
};

export default MyCalendar;
export const getServerSideProps = withPageAuthRequired();
