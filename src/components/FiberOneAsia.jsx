import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { motion } from "framer-motion";
import globeGif from "../assets/videos/output-onlinegiftools-ezgif.com-crop.gif";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

export default function FiberOneAsia() {
  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onDrag: ({ active, offset: [ox, oy] }) =>
        api({ x: ox, y: oy, rotateX: 0, rotateY: 0, scale: active ? 1.05 : 1 }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.05,
        }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, delta: [, dy] }) => {
        event.preventDefault();
        api.set({ zoom: dy / 200 });
      },
    },
    { target: domTarget, eventOptions: { passive: false } }
  );

  // Prevent browser pinch zoom interference
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  return (
    /* Responsive height and padding */
    <section className="min-h-[20vh] md:h-[30vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-8 md:py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center text-gray-900"
      >
        <motion.div
          initial={{ letterSpacing: "-0.1em", opacity: 0 }}
          animate={{ letterSpacing: "0em", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          // Responsive text layout: flex-wrap on mobile to prevent overflow
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4"
        >
          <h1 className="mx-2 md:mx-4 text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight leading-none">
            FIBER
          </h1>

          {/* 3D animated globe with react-spring + use-gesture */}
          {/* Responsive globe size */}
          <animated.div
            ref={domTarget}
            style={{
              transform: "perspective(600px)",
              x,
              y,
              scale: to([scale, zoom], (s, z) => s + z),
              rotateX,
              rotateY,
              rotateZ,
            }}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 cursor-grab"
          >
            <img
              src={globeGif}
              alt="Spinning Earth"
              className="w-full h-full object-contain drop-shadow-lg select-none"
              draggable={false}
            />
          </animated.div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight leading-none">
            NE
          </h1>
          <h1 className="ml-2 md:ml-4 text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-wide leading-none text-[#0f172a]">
            ASIA
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
