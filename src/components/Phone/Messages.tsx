/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence } from "framer-motion";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import messagesJSON from "../../data/messages.json";
import { MessageType } from "../../types/types";
import InvoiceMessage from "./InvoiceMessage";
import TextMessage from "./TextMessage";
import MultimediaMessage from "./MultimediaMessage";

function Messages({
  isOverlayAnimationComplete,
}: {
  isOverlayAnimationComplete: boolean;
}) {
  const { messages } = messagesJSON;
  const [messagesState, setMessagesState] = useState<MessageType[]>(
    messages.map((message: any) => ({
      ...message,
      type: message.type as "message" | "multimedia" | "invoice",
    })),
  );
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!isOverlayAnimationComplete) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 10000);
      return () => clearTimeout(timer);
    }
    return scrollToBottom();
  }, [messagesState, isOverlayAnimationComplete]);

  const handleSendNewMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const maxId = Math.max(...messagesState.map((x) => x.id));
    const newMessage: MessageType = {
      id: maxId + 1,
      message: inputValue,
      sender: "sent",
      type: "message",
      amount: undefined,
    };
    setMessagesState((state) => state.concat(newMessage));
    setInputValue("");
  };

  return (
    <article className="h-[calc(100%-70px)] w-full p-3 pb-[42px] text-[9px]">
      <div className="scrollbar-thin flex h-full flex-col gap-y-2 overflow-y-scroll pb-3">
        <AnimatePresence initial={false}>
          {messagesState.map((x) => {
            if (x.type === "message")
              return <TextMessage chatMessage={x} key={x.id} />;
            if (x.type === "invoice")
              return <InvoiceMessage chatMessage={x} key={x.id} />;
            return <MultimediaMessage chatMessage={x} key={x.id} />;
          })}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      <div className="relative h-8 w-full rounded-full">
        <form onSubmit={handleSendNewMessage} className="flex h-full w-full">
          <input
            type="text"
            name="messageInput"
            id="messageInput"
            placeholder="Type a message..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="placeholder:text-userPlaceholderTextColor focus:outline-userLightMagentaGradient w-full rounded-full pl-5 pr-12 text-[12px]"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black"
            aria-label="send message"
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </form>
      </div>
    </article>
  );
}

export default Messages;
