import ChatButton from "../UI/ChatButton";

export default function WelcomeSection() {
  return (
    <div
      className="
        w-full h-[60vh] flex flex-col items-center justify-center text-center
        bg-gradient-to-r from-c-primary to-c-alternative
        text-white px-4
      "
    >
      <div className="flex items-center justify-center mb-6">
        <div
          className="
            w-20 h-20 rounded-full bg-blue-500/30 
            flex items-center justify-center
          "
        >
          {/* Icon */}
          <span className="text-4xl">🎓</span>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-3">Welcome to LMoses</h1>

      <p className="max-w-xl text-white/90 leading-relaxed">
        Your AI-powered assistant for everything related to Kutaisi
        International University. Search for syllabuses, scholarships, personnel
        information, and get instant answers about GPAs and more.
      </p>

      <div className="mt-8">
        <ChatButton>💬 Chat with AI Assistant</ChatButton>
      </div>
    </div>
  );
}
