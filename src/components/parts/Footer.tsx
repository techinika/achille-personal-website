import { Briefcase, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Copyright } from "./Copyright";

export const FooterPart = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-[#050505] relative border-t border-white/5"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#fafafa]">
          Let us Collaborate
        </h2>
        <p className="text-[#a1a1aa] mb-12 text-base">
          I value clear and direct communication. Due to the high volume of
          messages, please be straightforward about how we can work together.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-1 bg-[#1f1f1f]/50 border border-[#3b82f6]/20 p-6 hover:border-[#3b82f6]/40 transition-all rounded-lg">
            <Mail className="w-7 h-7 text-[#3b82f6] mx-auto mb-4" />
            <h3 className="text-[#fafafa] font-semibold mb-2">Email</h3>
            <p className="text-sm text-[#a1a1aa] mb-4">
              Preferred method for all inquiries.
            </p>
            <Link
              href="mailto:achille@techinika.com"
              className="text-[#3b82f6] hover:text-[#fafafa] font-medium border-b border-[#3b82f6]/50 hover:border-[#fafafa] pb-1 transition-colors"
            >
              achille@techinika.com
            </Link>
          </div>

          <div className="md:col-span-1 bg-[#1f1f1f]/50 border border-white/10 p-6 hover:border-white/20 transition-all rounded-lg">
            <Briefcase className="w-7 h-7 text-[#fafafa] mx-auto mb-4" />
            <h3 className="text-[#fafafa] font-semibold mb-2">Book a Session</h3>
            <p className="text-sm text-[#a1a1aa] mb-4">
              Consultation, speaking, or training.
            </p>
            <Link
              href="https://agaseke.me/achille_songa/booking"
              target="_blank"
              className="inline-block bg-[#fafafa] text-[#050505] px-5 py-2 text-sm font-medium hover:bg-[#3b82f6] hover:text-white transition-colors rounded-md"
            >
              View Calendar
            </Link>
          </div>

          <div className="md:col-span-1 bg-[#1f1f1f]/50 border border-white/10 p-6 hover:border-white/20 transition-all rounded-lg">
            <Phone className="w-7 h-7 text-green-500 mx-auto mb-4" />
            <h3 className="text-[#fafafa] font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-[#a1a1aa] mb-4">
              Quick coordination only.
            </p>
            <Link
              href="https://wa.me/250780630465"
              className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              +250 780 630 465
            </Link>
          </div>
        </div>

        <Copyright />
      </div>
    </section>
  );
};
