import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ChatButtonProps = {
  children: ReactNode;
};

export default function ChatButton({ children }: ChatButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
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
    } catch (error) {
      //   console.error("Failed to send click event:", error);
    } finally {
      //   Navigate to /chat regardless of request success
      navigate("/chat");
    }
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
