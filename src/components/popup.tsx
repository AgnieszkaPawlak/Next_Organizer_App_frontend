import { useState } from 'react';
import { Button } from './button';

type PopupProps = {
  trigger: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export const Popup = ({ trigger, children, onClose }: PopupProps) => {
  const [show, setShow] = useState(trigger);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      {show && (
        <div className=" absolute top-0  right-0 z-10 h-[28%] w-full rounded-md  border bg-black">
          <div className="m-4 pt-6 text-center text-2xl text-white">{children}</div>
          <div className="m-auto py-12 ">
            <Button size="large" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
