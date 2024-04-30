import {
  ChevronLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import profileImg from "../../assets/images/avatar.jpg";
import Messages from "./Messages";

function Phone() {
  const [isOverlayAimationComplete, setIsOverlayAimationComplete] =
    useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="bg-userAppBackgroundColor relative h-[500px] w-64 min-w-64 rounded-[1.75rem] border-[10px] border-white shadow-2xl md:mt-0"
    >
      {/* FIRST MOUNT ANIMATION OVERLAY */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onAnimationComplete={() => setIsOverlayAimationComplete(true)}
        className={`absolute left-0 top-0 z-20 h-full w-full overflow-hidden rounded-2xl bg-black ${isOverlayAimationComplete && "hidden"}`}
      >
        <div className="relative h-full w-full">
          <div className="absolute -top-14 left-0 h-[400px] w-[300px] rounded-bl-full rounded-tl-xl bg-gradient-to-bl from-white to-white/10 opacity-30" />
        </div>
      </motion.div>
      {/* TOP STATUS BAR */}
      <article className="from-userLightVioletGradient/80 to-userLightMagentaGradient/80 relative flex h-[70px] flex-col justify-end overflow-hidden rounded-t-[1.75rem] bg-gradient-to-r from-20% p-3">
        <div className="absolute -top-[22px] left-1/2 mx-auto h-10 w-[55%] -translate-x-1/2 rounded-2xl bg-white shadow-sm" />
        {/* BOTTOM PROFILE INFO BAR */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ChevronLeftIcon className="h-4 w-4 text-white" />
            <img
              src={profileImg}
              alt="Profile"
              className="ml-1 mr-2 h-7 w-7 rounded-full border-[1px] border-white"
            />
            <div>
              <p className="text-[13px] font-semibold text-white opacity-90">
                Samuel Green
              </p>
              <p className="text-userSubheadingColor text-[10px]">
                Available to Walk
              </p>
            </div>
          </div>
          <EllipsisVerticalIcon className="h-4 w-4 text-white" />
        </div>
      </article>
      {/* BOTTOM MESSAGES & SEND NEW TEXT */}
      <Messages isOverlayAnimationComplete={isOverlayAimationComplete} />
    </motion.section>
  );
}

export default Phone;
