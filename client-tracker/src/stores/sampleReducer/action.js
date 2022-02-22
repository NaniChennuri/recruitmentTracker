import * as Types from './constant';

export const getManagersAction = (values) => ({
    type: Types.FETCH_MANAGERS,
    payload: values,
});

export const getSkillsAction = (values) => ({
    type: Types.FETCH_SKILLS,
    payload: values,
});