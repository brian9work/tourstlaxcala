type Props = {
  textColor?: string;
  subColor?: string;
  borderColor?: string;
};

export default function Logo({
  textColor = "text-white",
  subColor = "text-white/70",
  borderColor = "border-white/60",
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full border-2 ${borderColor} flex items-center justify-center shrink-0`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3L17 15H3L10 3Z" fill="currentColor" className={textColor} />
        </svg>
      </div>
      <div className="leading-tight">
        <p className={`font-bold text-sm tracking-wide ${textColor}`}>Tour Operadora</p>
        <p className={`text-[10px] tracking-[0.2em] uppercase ${subColor}`}>Tlaxcala</p>
      </div>
    </div>
  );
}
