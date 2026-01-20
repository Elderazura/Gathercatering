import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0E564C] flex items-center justify-center">
      <Image
        src="/Load.gif"
        alt="Loading"
        width={160}
        height={160}
        priority
        unoptimized
      />
    </div>
  );
}
