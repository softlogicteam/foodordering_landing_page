import React, { useState } from "react";
import { FAQS } from "../data/mockData";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getWhatsAppUrl, WA_DISPLAY_NUMBER } from "../utils/contact";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Questions
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base">
            Jawaban lengkap untuk pertanyaan teknis maupun operasional mengenai penerapan CafeOrder di kafe Anda.
          </p> */}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-brand-500/50 shadow-lg shadow-brand-500/5"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-xl border transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-500/20 border-brand-500/30 text-brand-400 rotate-180"
                        : "bg-slate-800/80 border-slate-700 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Ingin Menggunakan Sistem atau Konsultasi Kafe?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Hubungi kami via WhatsApp di{" "}
                <strong className="text-emerald-400 font-mono">
                  {WA_DISPLAY_NUMBER}
                </strong>{" "}
                untuk demo dan diskusi kebutuhan outlet Anda.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Tanya Sistem & Setup Kafe")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>Chat WhatsApp ({WA_DISPLAY_NUMBER})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
