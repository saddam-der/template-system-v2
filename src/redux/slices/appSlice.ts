import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import themeConfig from '@configs/themeConfig';

export interface AppSliceState {
  themeConfig: typeof themeConfig;
}

const initialState: AppSliceState = {
  themeConfig,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarActive: (state, action: PayloadAction<boolean>) => {
      state.themeConfig.layout.sidebar.isActive = action.payload;
    },
  },
});

export const { setSidebarActive } = appSlice.actions;

export default appSlice.reducer;
