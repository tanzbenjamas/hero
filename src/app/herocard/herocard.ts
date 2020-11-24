export interface Herocards{
  id: number;
  image: string;
  name: string;
  }

export interface HeroData{
  heroes: Herocards[],
  length: number
}
