import Container from "../ui/Container";

import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    text: "Orders above $999",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    text: "100% Protected",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    text: "Best Ingredients",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Always Here",
  },
];

export default function Features() {
  return (
    <Container>

      <div className="grid md:grid-cols-4 gap-6 my-12">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4"
            >
              <div className="bg-green-100 p-4 rounded-full">

                <Icon
                  className="text-green-700"
                  size={28}
                />

              </div>

              <div>

                <h4 className="font-bold">

                  {item.title}

                </h4>

                <p className="text-gray-500 text-sm">

                  {item.text}

                </p>

              </div>

            </div>
          );
        })}

      </div>

    </Container>
  );
}