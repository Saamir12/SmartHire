import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

export function useModeration(channel, isHost, isParticipant, user) {
  // 1. Participant: Emit events on suspicious browser actions
  useEffect(() => {
    if (!channel || !isParticipant || !user) return;

    const emitEvent = async (action) => {
      try {
        await channel.sendEvent({
          type: "custom",
          customType: "moderation",
          action,
          candidateName: user?.fullName || user?.firstName || "Candidate",
        });
      } catch (error) {
        console.error("Failed to send moderation event:", error);
      }
    };

    // Detect tab switch or window minimize
    const handleVisibilityChange = () => {
      if (document.hidden) {
        emitEvent("tab_switch");
      }
    };

    // Detect pasting
    const handlePaste = () => {
      emitEvent("paste");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("paste", handlePaste);

    let animationFrameId;
    let videoElement;
    let stream;
    let isDetecting = false;
    let lastAlertTime = 0;

    const startAI = async () => {
      try {
        const model = await cocoSsd.load();
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        videoElement = document.createElement("video");
        videoElement.srcObject = stream;
        videoElement.style.position = "absolute";
        videoElement.style.opacity = "0";
        videoElement.style.pointerEvents = "none";
        document.body.appendChild(videoElement);
        videoElement.play();

        videoElement.onloadeddata = () => {
          detectLoop(model);
        };
      } catch (err) {
        console.error("AI Moderation failed to start:", err);
      }
    };

    const detectLoop = async (model) => {
      if (!isParticipant) return;
      isDetecting = true;

      try {
        if (videoElement.readyState >= 2 && videoElement.videoWidth > 0 && videoElement.videoHeight > 0) {
          const predictions = await model.detect(videoElement);
          
          const persons = predictions.filter(p => p.class === "person");
          const phones = predictions.filter(p => p.class === "cell phone");

          const now = Date.now();
          // Alert max once every 10 seconds to avoid spam
          if (now - lastAlertTime > 10000) {
            if (phones.length > 0) {
              emitEvent("cell_phone");
              lastAlertTime = now;
            } else if (persons.length > 1) {
              emitEvent("multiple_people");
              lastAlertTime = now;
            }
          }
        }
      } catch (err) {
        console.error("Detection error:", err);
      }

      animationFrameId = requestAnimationFrame(() => detectLoop(model));
    };

    startAI();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("paste", handlePaste);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (videoElement) {
        videoElement.pause();
        videoElement.srcObject = null;
        if (videoElement.parentNode) {
          videoElement.parentNode.removeChild(videoElement);
        }
      }
      isDetecting = false;
    };
  }, [channel, isParticipant, user]);

  // 2. Host: Listen for custom events and alert
  useEffect(() => {
    if (!channel || !isHost) return;

    const handleCustomEvent = (event) => {
      if (event.type === "custom" && event.customType === "moderation") {
        const name = event.candidateName;
        const action = event.action;

        if (action === "tab_switch") {
          toast.error(`⚠️ ${name} switched tabs or minimized the window!`, { duration: 5000 });
        } else if (action === "paste") {
          toast.error(`⚠️ ${name} pasted text into the window!`, { duration: 5000 });
        } else if (action === "cell_phone") {
          toast.error(`📱 ${name} might be using a cell phone!`, { duration: 5000 });
        } else if (action === "multiple_people") {
          toast.error(`👥 Multiple people detected in ${name}'s camera!`, { duration: 5000 });
        }
      }
    };

    channel.on("custom", handleCustomEvent);

    return () => {
      channel.off("custom", handleCustomEvent);
    };
  }, [channel, isHost]);
}
