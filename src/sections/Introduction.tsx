import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl text-center font-medium mt-6"></div>
        <div>
          <span>You creative process deserves better.</span>
          <span className="text-primary-foreground">{text}</span>
          <span className="text-lime-400 block">
            That&apos;s why we built Layers.
          </span>
        </div>
      </div>
    </section>
  );
}
