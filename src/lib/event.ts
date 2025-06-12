export interface Event {
  title: string;
  date?: Date;
  details: string;
  registrationUrl?: string;
  locationUrl?: string;
  moreInfoUrl?: string;
  tags: string[];
}