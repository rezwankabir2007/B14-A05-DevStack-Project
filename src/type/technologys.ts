export interface Itechnologys {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}