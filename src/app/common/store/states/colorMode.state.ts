import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IColorMode } from '../../models/colorMode';
import { setColorMode } from '../action/colorMode.action';

export class ColorModeStateModel {
  colorMode?: IColorMode;
}

@State<ColorModeStateModel>({
  name: 'colorMode',
  defaults: {
    colorMode: {
      isDarkMode: false,
    },
  },
})
@Injectable()
export class ColorModeState {
  @Selector()
  static getColorMode(state: ColorModeStateModel) {
    return state.colorMode;
  }

  @Action(setColorMode)
  add(
    { getState, patchState }: StateContext<ColorModeStateModel>,
    { payload }: setColorMode
  ) {
    const state = getState();
    patchState({
      colorMode: {
        isDarkMode: payload.isDarkMode,
      },
    });
  }
}
