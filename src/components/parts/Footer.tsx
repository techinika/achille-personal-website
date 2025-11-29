import { Briefcase, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Copyright } from "./Copyright";

export const FooterPart = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black relative border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Let us Collaborate
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          I value clear and direct communication. Due to the high volume of
          messages, please be straightforward about how we can work together.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-1 bg-blue-600/10 border border-blue-600/30 p-8 hover:bg-blue-600/20 transition-all">
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-sm text-gray-400 mb-4">
              Preferred method for all inquiries.
            </p>
            <Link
              href="mailto:achille@techinika.com"
              className="text-blue-400 hover:text-white font-semibold border-b border-blue-400 hover:border-white pb-1"
            >
              achille@techinika.com
            </Link>
          </div>

          <div className="md:col-span-1 bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-all">
            <Briefcase className="w-8 h-8 text-gray-300 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Book a Session</h3>
            <p className="text-sm text-gray-400 mb-4">
              Consultation, speaking, or training.
            </p>
            <Link
              href="https://calendar.app.google/BwtpDCv6tCtmtXgX9"
              target="_blank"
              className="inline-block bg-white text-black px-6 py-2 font-bold hover:bg-gray-200 transition-colors"
            >
              View Calendar
            </Link>
          </div>

          <div className="md:col-span-1 bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-all">
            <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-400 mb-4">
              Quick coordination only.
            </p>
            <Link
              href="https://wa.me/250780630465"
              className="text-gray-300 hover:text-white"
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
