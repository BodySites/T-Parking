import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PopupForms =
  | 'AddChapterForm'
  | 'AddTopicForm'
  | 'AddWebinarForm'
  | 'AddVideoLessonForm'
  | 'AddQuestionForm';

interface ActiveFormState {
  activeForm: PopupForms | '';
}

const initialState: ActiveFormState = {
  activeForm: '',
};

const mockSlice = createSlice({
  name: 'popupForms',
  initialState,
  reducers: {
    open(state, action: PayloadAction<PopupForms>) {
      state.activeForm = action.payload;
    },
    close: (state) => {
      state.activeForm = '';
    },
  },
});

export const { open, close } = mockSlice.actions;
export default mockSlice.reducer;
