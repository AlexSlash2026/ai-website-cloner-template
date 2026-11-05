import Image from "next/image";

const guides = [
  { name: "Ирина Николаевна", image: "/new/sites/stolitsa-turfirma-ru/images/pers_bin.jpg" },
  { name: "Татьяна Владимировна", image: "/new/sites/stolitsa-turfirma-ru/images/persgtv.jpg" },
  { name: "Екатерина Савельева", image: "/new/sites/stolitsa-turfirma-ru/images/pers_sea.jpg" },
  { name: "Екатерина Детинина", image: "/new/sites/stolitsa-turfirma-ru/images/pers_dea.jpg" },
];

export function TourGuidesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-12">
          Экскурсоводы турфирмы «Столица»
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="text-center group flex flex-col items-center">
              <div 
                className="relative w-full overflow-hidden mb-4"
                style={{ maxWidth: "150px", aspectRatio: "1/1", borderRadius: "50%" }}
              >
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base font-medium text-gray-900">
                {guide.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}