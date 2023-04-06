import { Calendar as BigCalendar, momentLocalizer, Views } from 'react-big-calendar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useEffect } from 'react';
import DateRangeForm from '@/components/input-form';
import Modal from 'react-modal';

import { apiData } from '@/lib/apiData';
import { Seo } from '@/components/seo';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/button';

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
  const [events, setEvents] = useState<Event[]>(allEvents);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const loadEvents = async () => {
    try {
      const response = await fetch('http://localhost:3001/events');
      const data = await response.json();
      console.log(data);

      setAllEvents(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadEvents();
  }, [events]);

  const handleDeleteEvent = async () => {
    const eventName = selectedEvent;
    await apiData.delete(`events/${eventName}`);
    setEvents(allEvents);
    setShowDeleteModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleSelectEvent = (events: Event) => {
    setSelectedEvent(events.id);
    setShowDeleteModal(true);
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
      <div className=" h-[calc(100%-20rem)]">
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
          style={{ height: '90%', margin: ' 20px 50px' }}
          eventPropGetter={(eventList) => {
            const backgroundColor = eventList.colorEvent;
            const color = eventList.color ? eventList.color : 'black';
            return { style: { backgroundColor, color } };
          }}
        />
        <Modal
          className="m-auto h-[30vh]  w-[96vw]  rounded-md bg-black "
          isOpen={showDeleteModal}
          onRequestClose={handleCancelDelete}
          contentLabel="Delete Confirmation"
        >
          <p className="s py-6 text-center text-2xl text-white">
            Do you want to delete this event?
          </p>
          <div className="mx-4 flex justify-around gap-8 py-12">
            <Button size="medium" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button size="medium" onClick={handleDeleteEvent}>
              Delete
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MyCalendar;
export const getServerSideProps = withPageAuthRequired();
