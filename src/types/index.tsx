export enum Mood {
  RELAXED = 'relaxed',
  INSPIRED = 'inspired',
  STRESSED = 'stressed',
}

export type MoodIndex = {
  [key in Mood]: number;
};
