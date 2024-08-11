// src/components/myicons.tsx
import Image from "next/image";

const MuonBrain = () => (
  <Image
    src="/muon_brain.svg"
    alt="Custom Icon"
    width={28} // Adjust width as needed
    height={28} // Adjust height as needed
    className="w-7 h-7" // Adjust className if needed
  />
);

export default MuonBrain;
