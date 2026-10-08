import { RequesterCard, type RequesterProp } from "@/components/RequesterCard";
import { CollaborateLogo } from "./_components/CollaborateLogo";
import HeroSection from "./_components/Hero";
import { CalToAction } from "./_components/CTA";
import { DonorSection } from "./_components/DonorSection";
import { EmergencyServiceSection } from "./_components/EmergencyServiceSection";
import RequesterSection from "./_components/RequesterSection";

const requesterData: RequesterProp = {
  id: "ba9c8c13-8758-47de-804b-668a83fa551c",
  patientName: "Al Hasan",
  blood_group: "O_POS",
  unit_required: 12,
  exact_location: "BSMMCH, 1no. gate, 4th floor.",
  expires_at: "2026-09-10T17:00:00.000Z",
  urgency: "EMERGENCY",
  verificationStatus: "VERIFIED",
  request_status: "COMPLETED",
  note: "Bike accident. Need blood urgently. If need money will be paid",
  user_id: "f7a78972-d614-4170-b28a-8dd7f1b07cc1",
  created_at: "2026-09-10T14:01:44.679Z",
  updated_at: "2026-09-11T03:50:32.978Z",
};

const Page = () => {
  return (
    <div>
      <HeroSection />

      <div className="relative mx-auto my-10 grid w-full max-w-7xl px-4 sm:px-6 lg:my-16">
        <h2 className="mb-6 text-center text-primary">
          Our Honourable <span className="text-[#B15A36]">Partners</span>.
        </h2>

        <CollaborateLogo />
      </div>

      <DonorSection />
      <RequesterSection />
      <EmergencyServiceSection />

      <CalToAction />
    </div>
  );
};

export default Page;
