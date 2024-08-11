import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar />
      <div className="flex-1">{children}</div>{" "}
      {/* Adjusted to flex-1 to take up remaining space */}
    </div>
  );
}
