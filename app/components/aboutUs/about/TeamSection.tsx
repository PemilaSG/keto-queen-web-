const team = [
  { name: "Sara Khan", role: "Founder & CEO" },
  { name: "Ali Raza", role: "Head of Operations" },
  // ... add others
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">MEET THE TEAM</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {team.map((member) => (
          <div key={member.name} className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            {/* Add Social Icons Here */}
          </div>
        ))}
      </div>
    </section>
  );
}