const resumeInitialState = {
    name: "",
    sex: "",
    eduStartDate: "",
    academy: "",
    GPA: "",
    phone: "",
    email: "",

    purpose: "",
    direction: "前端",
    projectExp: [],
    socialExp: [],
}

const resume = (state = resumeInitialState, action) => {
    switch (action.type) {
        case "aaa":
            return state
        default:
            return state
    }
}

export default resume
