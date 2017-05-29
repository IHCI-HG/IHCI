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
<<<<<<< HEAD
    major: "",
=======
    academy: "",
>>>>>>> origin/aferica
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
