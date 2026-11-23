type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
    center?: boolean;
  };
  
  export default function SectionHeader({
    eyebrow,
    title,
    description,
    center = true,
  }: SectionHeaderProps) {
    return (
      <div
        className={`max-w-3xl ${
          center ? "mx-auto text-center" : ""
        }`}
      >
        <p className="uppercase tracking-[0.45em] text-[#D4AF37]">
          {eyebrow}
        </p>
  
        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-8 leading-8 text-gray-400">
            {description}
          </p>
        )}
      </div>
    );
  }