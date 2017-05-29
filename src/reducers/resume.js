const resumeInitialState = {
    finished: {
        baseInfo: false,
        selfIntro: false,
        project: false,
        social: false,
        production: false,
    },

    name: "",
    sex: "",
    eduStartDate: "",
    school: "",
    major: "",
    GPA: "",
    phone: "",
    email: "",

    purpose: "",
    direction: "前端",
    projectExp: [],
    socialExp: [],
}

const resumeReducer = (state = resumeInitialState, action) => {
    switch (action.type) {
        case "aaa":
            return state
        default:
            return state
    }
}

export default resumeReducer
