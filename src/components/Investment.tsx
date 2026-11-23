import Container from "@/ui/Container";

const items = [
  {
    value: "RWA",
    title: "Real World Assets",
    description:
      "Kết nối tài sản thực với công nghệ blockchain để tăng tính minh bạch và khả năng tiếp cận.",
  },
  {
    value: "Dubai",
    title: "Global Opportunity",
    description:
      "Một trong những thị trường bất động sản và du lịch phát triển năng động trên thế giới.",
  },
  {
    value: "Luxury",
    title: "Premium Hospitality",
    description:
      "Hướng đến trải nghiệm nghỉ dưỡng và dịch vụ đạt tiêu chuẩn quốc tế.",
  },
  {
    value: "AQE",
    title: "Digital Ecosystem",
    description:
      "Xây dựng hệ sinh thái kết nối tài sản thực, công nghệ và cộng đồng toàn cầu.",
  },
];

export default function Investment() {
  return (
    <section className="bg-[#0A0E13] py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.45em] text-[#D4AF37]">
            Investment Highlights
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold text-white">
            Why Dubai.
            <br />
            Why AQE.
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            AQ Estate hướng đến việc kết nối giá trị thực, công nghệ và
            tầm nhìn toàn cầu nhằm tạo nên một hệ sinh thái minh bạch,
            hiện đại và bền vững.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {items.map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-[#11161D] p-10 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50"
            >

              <div className="text-4xl font-extrabold text-[#D4AF37]">
                {item.value}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}