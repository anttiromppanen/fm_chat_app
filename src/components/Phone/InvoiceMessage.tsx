/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { MessageType } from "../../types/types";
import Message from "./Message";

function Checkbox({ isCheckboxChecked }: { isCheckboxChecked: boolean }) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor="customStyle"
      >
        <input
          type="checkbox"
          checked={isCheckboxChecked}
          onChange={() => {}}
          className="
          before:content[''] checked:bg-userAppBackgroundColor peer relative h-3 w-3 cursor-pointer appearance-none rounded-full border border-white/30 bg-transparent 
          transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 
          before:rounded-full before:bg-transparent before:opacity-0 
          before:transition-opacity checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
          id="customStyle"
        />
        <span className="text-userLightVioletGradient pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
    </div>
  );
}

function InvoiceMessage({ chatMessage }: { chatMessage: MessageType }) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const { message, amount } = chatMessage;

  return (
    <Message chatMessage={chatMessage} isCheckboxChecked={isCheckboxChecked}>
      <div className="flex items-center justify-between text-white">
        <button
          type="button"
          onClick={() => setIsCheckboxChecked((state) => !state)}
          className="absolute left-0 top-0 z-10 h-full w-full rounded-lg"
          aria-label="toggle invoice paid"
        />
        <div className="flex">
          <Checkbox isCheckboxChecked={isCheckboxChecked} />
          <p className="ml-2 text-orange-100/90 opacity-80">{message}</p>
        </div>
        <p className="text-[13px] font-bold">{`$${amount}`}</p>
      </div>
    </Message>
  );
}

export default InvoiceMessage;
