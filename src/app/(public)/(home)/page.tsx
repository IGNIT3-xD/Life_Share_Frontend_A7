import { DonorCard, type DonorProps } from "@/components/DonorCard";
import { CollaborateLogo } from "./_components/CollaborateLogo";
import HeroSection from "./_components/Hero";
import { RequesterCard, type RequesterProp } from "@/components/RequesterCard";
import { EmergencyServiceCard, EmergencyServiceProp } from "@/components/EmergencyServiceCard";
import { CalToAction } from "./_components/CTA";

const donorData: DonorProps = {
  id: "65de081e-c239-4c8f-85ca-1b39a5b47994",
  email: "tester_donor@lifeshare.com",
  blood_group: "A_POS",
  location: "Anywhere in Dhaka",
  age: 24,
  availability: "ON_HOLD",
  weightKg: "75",
  height: "165",
  donorStatus: "VERIFIED",
  totalDonations: 2,
  lastDonationDate: "2026-09-10T18:39:28.339Z",
  created_at: "2026-09-05T16:18:01.906Z",
  updated_at: "2026-09-10T18:39:28.339Z",
  userId: "712140d5-b873-4437-84f6-2c8d280c9f96",
  user: {
    id: "712140d5-b873-4437-84f6-2c8d280c9f96",
    name: "Tester Donor",
    email: "tester_donor@lifeshare.com",
    phone: "01912345678",
    address: "Narayanganj 1421, Dhaka, Bangladesh",
    gender: "MALE",
    profile_pic:
      "https://res.cloudinary.com/dn4zumqvq/image/upload/v1788716172/tzk4gkril7lystx4oza5.jpg",
    profile_pic_public_id: "tzk4gkril7lystx4oza5",
    role: "DONOR",
    auth_provider: "CREDENTIAL",
    email_verified: true,
    is_active: true,
    is_blocked: false,
    created_at: "2026-09-05T16:18:01.906Z",
    updated_at: "2026-09-06T17:36:37.561Z",
  },
};

const requesterData: RequesterProp = {
  "id": "ba9c8c13-8758-47de-804b-668a83fa551c",
  "patientName": "Al Hasan",
  "blood_group": "O_POS",
  "unit_required": 12,
  "exact_location": "BSMMCH, 1no. gate, 4th floor.",
  "expires_at": "2026-09-10T17:00:00.000Z",
  "urgency": "EMERGENCY",
  "verificationStatus": "VERIFIED",
  "request_status": "COMPLETED",
  "note": "Bike accident. Need blood urgently. If need money will be paid",
  "user_id": "f7a78972-d614-4170-b28a-8dd7f1b07cc1",
  "created_at": "2026-09-10T14:01:44.679Z",
  "updated_at": "2026-09-11T03:50:32.978Z"
};

const emergencyServiceData: EmergencyServiceProp = {
  "id": "0e9cc7c7-ceb6-4054-a2ce-3b4390cf8f1a",
  "service_name": "Emergency Ambulance Service",
  "service_category": "EMERGENCY_AMBULANCE",
  "service_status": "ACTIVE",
  "description": "24/7 emergency ambulance service with trained medical staff.",
  "price": "3000",
  "service_image": "https://res.cloudinary.com/dn4zumqvq/image/upload/v1789100699/vmfziaxhrxhrgu95c7lx.jpg",
  "service_image_public_id": "vmfziaxhrxhrgu95c7lx",
  "availability": "24/7",
  "hospital_id": "7eb8599f-d244-49e4-bca4-7e7dc2dfd228",
  "created_at": "2026-09-11T04:24:58.822Z",
  "updated_at": "2026-09-11T04:58:48.684Z"
}

const Page = () => {
  return (
    <div>
      <HeroSection />

      <div className="relative mx-auto my-10 grid w-full max-w-5xl px-4 lg:my-16">
        <h2 className="mb-6 text-center text-primary">
          Our Honourable{" "}
          <span className="text-[#B15A36]">Partners</span>.
        </h2>

        <CollaborateLogo />
      </div>

      <DonorCard data={donorData} />

      <RequesterCard data={requesterData} />

      <EmergencyServiceCard data={emergencyServiceData} />

      <CalToAction />
    </div>
  );
};

export default Page;
