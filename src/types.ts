export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  status?: string;
  feedback?: 'positive' | 'negative';
  suggestions?: string[];
  instruction?: string;
}

export interface UserData {
  name: string;
  specialty: string;
  projects: {
    name: string;
    description: string;
  }[];
  family: {
    wife: string;
    son: string;
    daughter: string;
  };
}
