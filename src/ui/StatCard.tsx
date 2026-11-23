import GlassPanel from "@/ui/GlassPanel";

type StatCardProps = {
  title: string;
  description: string;
};

export default function StatCard({
  title,
  description,
}: StatCardProps) {
  return (
    <GlassPanel
      className="
        group
        relative
        min-h-[180px]
        overflow-hidden
        p-6
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]/60
      "
    >

      {/* Gold Light Effect */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#D4AF37]/10
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />


      {/* Content */}
      <div className="relative z-10">

        <h3
          className="
            text-4xl
            font-bold
            tracking-tight
            text-[#D4AF37]
            transition
            duration-500
            group-hover:scale-105
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-3
            leading-7
            text-gray-400
            transition
            duration-500
            group-hover:text-gray-200
          "
        >
          {description}
        </p>


      </div>


      {/* Bottom Gold Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#D4AF37]
          transition-all
          duration-500
          group-hover:w-full
        "
      />


    </GlassPanel>
  );
}