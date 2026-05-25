export default function Preloader({ loading }) {
  return (
    <div
      className={`fixed inset-0 bg-dark-900 flex items-center justify-center z-99999 transition-all duration-500 ${
        !loading ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      }`}
    >
      <div className="text-center">
        <div className="font-heading text-4xl text-white tracking-[5px] mb-5">CURVE</div>
        <div className="w-48 h-0.5 bg-dark-800 mx-auto">
          <div
            className="h-full bg-gold-400 origin-left"
            style={{ animation: 'loadingBar 1.8s ease forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}