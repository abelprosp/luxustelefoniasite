"use client";

import { useContact } from "@/components/providers/ContactProvider";

export function MobileCTA() {
  const { open } = useContact();

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-luxus-black/90 px-4 py-3 backdrop-blur-xl md:hidden">
      <button
        type="button"
        onClick={() => open("default")}
        className="flex h-12 w-full items-center justify-center rounded-full bg-white text-[15px] font-medium text-luxus-black transition active:scale-[0.99]"
      >
        Fale com a Luxus
      </button>
    </div>
  );
}
