import email from "../assets/icon-email.webp";
import x from "../assets/icon-x.png";
import facebook from "../assets/Icon-facebook.webp";
import line from "../assets/line.png";

function Side() {
  return (
    <div className="absolute bg-neutral-400/15 h-full md:w-20 w-16 flex flex-col justify-end items-center backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="ps-48 -rotate-90 mb-4">
          <p className="font-bold text-xl text-center font-mono">MyTinerary</p>
        </div>
        <div className="-rotate-90 ps-14 mb-4">
          <img src={line} alt="Line" className="w-12 h-10" />
        </div>
        <div className="pb-4 transition-transform transform hover:scale-150">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Icon facebook" className="w-6 h-6" />
          </a>
        </div>
        <div className="pb-3 transition-transform transform hover:scale-150">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Icon x" className="w-5 h-5" />
          </a>
        </div>
        <div className="pb-4 transition-transform transform hover:scale-150">
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Icon email" className="w-8 h-8" />
          </a>
        </div>
        <div className="pb-5">
          <p className="font-blacktext-sm text-center font-mono">By</p>
          <p className="font-black text-sm text-center  font-mono">Augusto</p>
        </div>
      </div>
    </div>
  );
}

export default Side;
