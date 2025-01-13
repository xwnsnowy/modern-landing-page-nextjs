export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <div className="flex flex-none gap-16 text-6xl md:text-7xl font-medium">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex items-center gap-6" key={index}>
              <span className="text-blue-400">&#10038;</span>
              <span>
                Try <span className="text-lime-400">Layers</span> for free
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
