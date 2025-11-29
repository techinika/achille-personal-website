export interface SectionProps {
  id: string;
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  alignment?: "left" | "center" | "right";
}
