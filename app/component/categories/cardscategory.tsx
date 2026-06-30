import Image from "next/image";

type Props = {
  image: string;
  name: string;
};

export default function CategoryCard({
  image,
  name,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-6">

      <div className="h-40 flex items-center justify-center">

        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
        />

      </div>

      <h3 className="text-center font-semibold text-lg mt-4">

        {name}

      </h3>

    </div>
  );
}