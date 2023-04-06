import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from './button';
import { Popup } from './popup';

interface InputFormProps {
  title: string;
  startDate: Date;
  endDate: Date;
  colorEvent: string;
}

export enum Color {
  Minor = '#CDD3F5',
  Medium = '#8191EE',
  Critical = '#FB8878',
}

const DateRangeForm = () => {
  const [formData, setFormData] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormProps>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [error, setError] = useState<JSX.Element | null>(null);

  const onSubmit = async (data: InputFormProps) => {
    try {
      data.startDate = startDate;
      data.endDate = endDate;
      const response = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log(data);
        throw new Error('Failed to submit form data');
      }
      setShowPopup(true);
      setFormData('');
    } catch (error) {
      console.error(error);
      setError(() => (
        <Popup trigger={true} onClose={() => setShowPopup(false)}>
          Failed to submit form data
        </Popup>
      ));
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <form className="flex flex-wrap  justify-center" onSubmit={handleSubmit(onSubmit)}>
          <label className="w-1/2 pb-2 text-center">
            Title:
            <br />
            <input
              className="ml-2 inline-block rounded-md border-2 border-dark-blue px-8 py-1"
              type="text"
              {...register('title', { required: true })}
            />
            {errors.title && <span className="inline-block text-red">Field is required</span>}
          </label>
          <label htmlFor="colorEvent" className="w-1/2 pb-2 text-center">
            Priority:
            <br />
            <select
              className="ml-2 inline-block rounded-md border-2 border-dark-blue px-20 py-1"
              {...register('colorEvent', { required: false })}
              id="colorEvent"
              name="colorEvent"
            >
              <option value={Color.Minor}>Minor</option>
              <option value={Color.Medium}>Medium</option>
              <option value={Color.Critical}>Critical</option>
            </select>
          </label>
          <label className="w-1/2 pb-2 text-center">
            Start Date:
            <DatePicker
              className="ml-2 inline-block rounded-md border-2 border-dark-blue px-8 py-1"
              portalId="root"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              minDate={new Date()}
            />
          </label>
          <label className="w-1/2 pb-2 text-center">
            End Date:
            <DatePicker
              className="ml-2 inline-block rounded-md border-2 border-dark-blue px-8 py-1"
              portalId="root"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              minDate={startDate}
            />
          </label>
          <Button type="submit" variants="mainReverse" size="large">
            Submit
          </Button>
        </form>
      </div>
      {showPopup && (
        <Popup trigger={true} onClose={() => setShowPopup(false)}>
          Form data submitted successfully
        </Popup>
      )}
      {error}
    </>
  );
};

export default DateRangeForm;
