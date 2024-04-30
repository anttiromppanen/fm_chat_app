/* eslint-disable jsx-a11y/label-has-associated-control */
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MessageType } from "../../types/types";

function Message({
  children,
  chatMessage,
  isCheckboxChecked,
}: {
  children: ReactNode;
  chatMessage: MessageType;
  isCheckboxChecked?: boolean | undefined;
}) {
  const { sender, type } = chatMessage;
  return (
    <motion.div
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      className={`
        w-auto max-w-[60%] rounded-lg p-[5px] pl-2 shadow-md shadow-slate-200/80
        ${sender === "received" ? "text-userChatOnTheLeftColor bg-purple-500/10" : "text-userChatOnTheRightColor mr-2 self-end bg-white"}
        ${type === "invoice" && "from-userLightMagentaGradient to-userLightVioletGradient relative !max-w-[80%] bg-gradient-to-r !py-2 !pr-4"}
        ${isCheckboxChecked && "opacity-60"}
        ${type === "multimedia" && "max-w-fit !bg-transparent shadow-none"}
        `}
    >
      {children}
    </motion.div>
  );
}

Message.defaultProps = {
  isCheckboxChecked: undefined,
};

export default Message;
