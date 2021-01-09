import { IColorMode } from '../../models/colorMode';

export class setColorMode {
  static type = '[ColorMode] Set';

  constructor(
      public payload: IColorMode
      ) 
      {}
}
