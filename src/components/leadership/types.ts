export interface Member {
  name: string;

  position: string;

  location: string;

  expertise: string[];

  experience: string;

  quote: string;

  image: string;

  linkedin?: string;

  email?: string;
}


export interface LeadershipTeam {
  department: string;

  role: string;

  description: string;

  members: Member[];
}