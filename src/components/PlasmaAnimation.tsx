"use client";

import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { FrameBounds, Glyph } from "./types";
import { getAnimationFrame } from "./getAnimationFrame";
import { cn } from "@/src/utils/cn";
import { useInterval } from "../utils/useInterval";
import { getLabelsGroups } from "./labelGroups";
import { insertLabelGroup } from "./insertLabelGroup";

const TARGET_FPS = 60;

const loadingLabel: Glyph[] = "FUERST.ONE".split("").map((character) => ({
  character,
  className: "font-bold",
}));

export const PlasmaAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [bounds, setBounds] = useState<FrameBounds | null>(null);
  const [frame, setFrame] = useState<Glyph[][] | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleIsPlaying = useCallback(() => {
    setIsPlaying((isPlaying) => !isPlaying);
  }, []);

  const updateFrame = useCallback(() => {
    if (!bounds) {
      return;
    }
    const nextFrame = getAnimationFrame(bounds);
    for (const labelGroup of getLabelsGroups(isPlaying, toggleIsPlaying)) {
      insertLabelGroup(nextFrame, labelGroup);
    }
    setFrame(nextFrame);
  }, [bounds, isPlaying, toggleIsPlaying]);

  const updateBounds = useCallback(() => {
    if (!containerRef.current) {
      return;
    }
    const boundingRect = containerRef.current.getBoundingClientRect();
    const character = containerRef.current.querySelector("span")!;
    const width = Math.floor(boundingRect.width / character.offsetWidth);
    const height = Math.floor(boundingRect.height / character.offsetHeight);
    setBounds({ width, height });
  }, []);

  // Update bounds on mount and resize
  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(containerRef.current!);
    return () => resizeObserver.disconnect();
  }, [updateBounds]);

  // Update frame when updateFrame changes
  useEffect(() => {
    updateFrame();
  }, [updateFrame]);

  // Update frame in FPS interval if playing
  useInterval(() => {
    if (!isPlaying) {
      return;
    }
    updateFrame();
  }, 1000 / TARGET_FPS);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col items-center justify-center text-md 2xl:text-sm select-none"
    >
      {frame ? (
        frame.map((row, idx) => (
          <pre key={idx}>
            {row.map((props, jdx) => (
              <GlyphCell key={jdx} {...props} />
            ))}
          </pre>
        ))
      ) : (
        <pre className="h-full flex justify-center items-center">
          <div className="-mt-5">
            {loadingLabel.map((props, idx) => (
              <GlyphCell key={idx} {...props} />
            ))}
          </div>
        </pre>
      )}
    </div>
  );
};

const GlyphCell = ({ character, style, className, href, onClick }: Glyph) => {
  const Wrapper = href ? Link : Span;
  return (
    <Wrapper
      style={style}
      className={cn(
        "inline-block w-3 2xl:w-4",
        onClick || href ? "cursor-pointer" : "",
        className
      )}
      aria-hidden={!href && !onClick}
      href={href!}
      onClick={onClick}
    >
      {character}
    </Wrapper>
  );
};

const Span = (props: ComponentPropsWithoutRef<"span">) => <span {...props} />;
