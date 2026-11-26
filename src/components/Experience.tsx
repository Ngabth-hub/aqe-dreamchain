import Image from "next/image";
import Container from "@/ui/Container";

const gallery = [
  {
    image: "/images/project/lobby1.png",
    title: "Grand Lobby",
    description:
      "Không gian tiếp đón sang trọng với thiết kế hiện đại và tầm nhìn hướng biển.",
  },
  {
    image: "/images/project/room-1.png",
    title: "Luxury Suite",
    description:
      "Không gian nghỉ dưỡng được thiết kế để mang lại sự riêng tư và đẳng cấp.",
  },
  {
    image: "/images/project/hewe-front.png",
    title: "Oceanfront Lifestyle",
    description:
      "Trải nghiệm sống bên bờ biển cùng hệ thống tiện ích chuẩn quốc tế.",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#05070A] py-32">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="uppercase tracking-[0.45em] text-[#D4AF37]">
            The Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            More Than
            <br />
            A Destination
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            Mỗi không gian đều được thiết kế nhằm mang đến trải nghiệm nghỉ dưỡng,
            phong cách sống và giá trị lâu dài.
          </p>

        </div>

        <div className="space-y-16">

          {gallery.map((item, index) => (

            <div
              key={item.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="overflow-hidden rounded-[32px]">
              <Image
  src={item.image}
  alt={item.title}
  width={1200}
  height={800}
  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
/>
              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-gray-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}