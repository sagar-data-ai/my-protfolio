import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
  const resumeUrl = "/resume.pdf";
  window.open(resumeUrl, "_blank");   // open new tab with pdf
  setTimeout(() => {
    window.location.href = "/";       // come back to portfolio
  }, 200); // short delay
}, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-accent">
      <div className="text-center">
        <p className="text-lg">Redirecting to resume...</p>
      </div>
    </div>
  );
}
