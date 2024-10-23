import type { ICardImage } from './ICardImage';
import type { ISet } from './ISet';
import type { ITCGPlayer } from './ITCGPlayer';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  type: string;
  set: ISet;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
}
