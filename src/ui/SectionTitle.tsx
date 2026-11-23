type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  
  export default function SectionTitle({
    eyebrow,
    title,
    description,
  }: SectionTitleProps) {
    return (
      <div className="mx-auto mb-16 max-w-3xl text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#D4AF37] uppercase">
            {eyebrow}
          </p>
        )}
  
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {description}
          </p>
        )}
      </div>
    );
  }