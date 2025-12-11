import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type ChatButtonProps = {
  children: ReactNode;
};

export default function ChatButton({ children }: ChatButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const alreadySent = Cookies.get("lmoses-click-sent");

    if (!alreadySent) {
      try {
        fetch(
          "https://lmoses20251208164123-dhe7ekevh0c4gxgc.canadacentral-01.azurewebsites.net/api/clicks",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ timestamp: new Date().toISOString() }),
          }
        );

        // Save cookie so we don't send again
        Cookies.set("lmoses-click-sent", "true", { expires: 365 });
      } catch (error) {
        // silent fail is OK
      }
    }

    // Navigate immediately no matter what
    navigate("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className="
        px-6 py-3 rounded-lg bg-white text-c-primary font-semibold 
        shadow-md hover:shadow-lg transition-all
        flex items-center gap-2 cursor-pointer
      "
    >
      {children}
    </button>
  );
}
