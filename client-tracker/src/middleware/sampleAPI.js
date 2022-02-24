import apiRequest from "../utilities/services";
import { API_ENDPOINTS } from '../utilities/url';
import {
    getManagersAction,
    getSkillsAction,
    postSkillsSuccessAction,
    postSkillsAction,
    reviewSkillAction
} from '../stores/sampleReducer/action';

const onSuccessManagers = (managersData, dispatch) => {
    let options = [];
    for (var manager of managersData) {
        let managers = {};
        managers.id = manager.id;
        managers.label = manager.name;
        managers.email = manager.mail;
        managers.value = manager.name.replace(/ /g, "_");
        options.push(managers);
    }
    dispatch(getManagersAction(options));
}

const onSuccessSkills = (skillsData, dispatch) => {
    let options = [];
    for (var skill of skillsData) {
        let skills = {};
        skills.id = skill.id;
        skills.technology = skill.skill;
        skills.oDate = skill.oDate;
        skills.open_positions = skill.oPos;
        skills.interviewed = skill.interviewd;
        skills.shortlist = skill.shortlisted;
        skills.offer = skill.offered;
        skills.Status = skill.posStatus;
        skills.managerId = skill.managerId;
        options.push(skills);
    }
    dispatch(getSkillsAction(options));
}

const onSuccessReviewSkills = (reviewData, dispatch) => {
    let options = [];
    for (var review of reviewData) {
        let reviews = {};
        reviews.id = review.id;
        reviews.open_positions = review.oPos;
        reviews.interviewed = review.interviewd;
        reviews.shortlist = review.shortlisted;
        reviews.offer = review.offered;
        reviews.Status = review.posStatus;
        reviews.managerId = review.skillsId;
        options.push(reviews);
    }
    dispatch(reviewSkillAction(options));
}

export const fetchHiringManagers = (payload) => async (dispatch) => {
    try {
        const res = await apiRequest({
            method: "GET",
            url: API_ENDPOINTS.FETCH_HIRING_MANAGER,
        });
        await onSuccessManagers(res.data.data, dispatch);
    } catch (err) {
        console.log("Error", err);
    }
};

export const fetchSkills = (payload) => async (dispatch) => {
    try {
        const res = await apiRequest({
            method: "GET",
            url: API_ENDPOINTS.FETCH_SKILLS + payload,
        });
        await onSuccessSkills(res.data.data, dispatch);
    } catch (err) {
        console.log("Error", err);
    }
};

export const updateSkills = (payload) => async (dispatch) => {
    try {
        await postSkillsAction();
        await apiRequest({
            method: "PUT",
            url: API_ENDPOINTS.POST_SKILLS,
            data: payload
        });
        await postSkillsSuccessAction();
    } catch (err) {
        console.log("Error", err);
    }
}

export const reviewSkills = (payload) => async (dispatch) => {
    try {
        const res = await apiRequest({
            method: "GET",
            url: API_ENDPOINTS.REVIEW_SKILLS,
            params: { ...payload }
        });

        await onSuccessReviewSkills(res.data.data, dispatch);
    } catch (err) {
        console.log("Error", err);
    }
}
