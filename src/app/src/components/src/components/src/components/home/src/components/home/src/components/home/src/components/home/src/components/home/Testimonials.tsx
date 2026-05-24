import { Star } from "lucide-react";
const testimonials = [
  { quote: "Tierra Roots Acquisitions made selling our house so easy. We got a fair cash offer in less than 24 hours and closed on our timeline.", author: "Sarah M., Patterson, CA" },
  { quote: "No repairs, no showings, no stress. They handled everything and we walked away with cash.", author: "James T., Modesto, CA" },
  { quote: "Professional, honest, and local. I highly recommend Tierra Roots Acquisitions to anyone needing to sell fast.", author: "Lisa P., Turlock, CA" },
];
export default function Testimonials() {
  return (
    <section className="bg-brand-dark py-[18px]">
      <div className="mx-auto max-w-[1014px] px-5">
        <h2 className="text-center text-[28px] font-extrabold tracking-[-0.035em] text-white sm:text-[32px]">What Homeowners Are Saying</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, author }) => (
            <article key={author} className="flex min-h-[250px] flex-col items-center rounded-lg bg-white px-8 py-6 text-center shadow-sm">
              <div className="mb-3 h-[72px] w-[72px] rounded-full border-4 border-brand-soft-bg bg-brand-mid flex items-center justify-center shadow-sm">
                <span className="text-2xl font-extrabold text-white">{author.charAt(0)}</span>
              </div>
              <p className="mb-3 text-[13px] font-bold text-brand-dark">{author}</p>
              <div className="mb-2 flex justify-center gap-0.5 text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="flex-1 text-[14px] leading-6 text-brand-text">&ldquo;{quote}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}