import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ConsentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("lmoses-consent");
    if (consent !== "accepted") {
      setShowPopup(true);
      document.body.style.overflow = "hidden"; // prevent scrolling
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("lmoses-consent", "accepted", { expires: 365 }); // store for 1 year
    setShowPopup(false);
    document.body.style.overflow = "auto"; // restore scrolling
  };

  const handleDecline = () => {
    // redirect to blank page if they decline
    window.location.href = "about:blank";
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">LMoses Public Policy</h2>
        <p className="mb-6 text-left text-sm leading-relaxed">
          Welcome to <strong>LMoses</strong>, your AI-powered assistant for
          Kutaisi International University. We want to inform you that we
          collect **data on when specific buttons are clicked** in order to
          improve our services and provide better user experiences. No personal
          information is collected without your consent. By clicking{" "}
          <strong>Accept</strong>, you agree to this data collection. If you do
          not agree, clicking&nbsp;<strong>Decline</strong> will close this
          page.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-c-primary text-white rounded-lg font-semibold hover:bg-c-alternative transition"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
