import Image from "next/image";

const guides = [
  {
    name: "Ирина Николаевна",
    image: "/sites/stolitsa-turfirma-ru/images/pers_bin.jpg",
  },
  {
    name: "Татьяна Владимировна",
    image: "/sites/stolitsa-turfirma-ru/images/persgtv.jpg",
  },
  {
    name: "Екатерина Савельева",
    image: "/sites/stolitsa-turfirma-ru/images/pers_sea.jpg",
  },
  {
    name: "Екатерина Детинина",
    image: "/sites/stolitsa-turfirma-ru/images/pers_dea.jpg",
  },
];

export function TourGuidesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Экскурсоводы турфирмы &quot;Столица&quot;
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  width={150}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800"
                dangerouslySetInnerHTML={{ __html: guide.name }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
