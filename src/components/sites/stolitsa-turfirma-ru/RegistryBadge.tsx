import Image from "next/image";

export function RegistryBadge() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Logo/Badge */}
          <div className="text-right">
            <a
              href="https://tourism.gov.ru/operators/show.php?id=102269"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sites/stolitsa-turfirma-ru/images/rosturizm_80.jpg"
                alt="Ростуризм"
                width={200}
                height={80}
                className="inline-block"
              />
            </a>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <a
                href="https://tourism.gov.ru/operators/show.php?id=102269"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Мы в реестре туроператоров
              </a>
            </h2>
            <p className="text-base text-gray-700">
              ООО &quot;Туристская фирма &quot;СТОЛИЦА&quot;
              <br />
              Реестровый номер: РТО 019817
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
