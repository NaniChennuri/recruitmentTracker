import * as Types from './constant';

export const getManagersAction = (values) => ({
    type: Types.FETCH_MANAGERS,
    payload: values,
});

export const getSkillsAction = (values) => ({
    type: Types.FETCH_SKILLS,
    payload: values,
});

export const postSkillsAction = () => ({
    type: Types.POST_SKILLS,
});

export const postSkillsSuccessAction = () => ({
    type: Types.POST_SKILLS_SUCCESS,
});
