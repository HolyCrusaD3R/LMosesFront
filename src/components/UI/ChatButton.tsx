import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ChatButtonProps = {
  children: ReactNode;
};

export default function ChatButton({ children }: ChatButtonProps) {
  return (
    <Link
      className="
        px-6 py-3 rounded-lg bg-white text-c-primary font-semibold 
        shadow-md hover:shadow-lg transition-all
        flex items-center gap-2
      "
      to={"/chat"}
    >
      {children}
    </Link>
  );
}
