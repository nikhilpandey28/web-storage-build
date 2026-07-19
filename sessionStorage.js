console.log("========== sessionStorage ==========");

/* =====================================================
   Task 1
===================================================== */

sessionStorage.setItem("currentStep" , "2");
const draft = {
    title : "Learning Web Storage",
    content : "EPAM Practice"
};

sessionStorage.setItem(
    "draft",
    JSON.stringify(draft)
);

console.log(
    "Current Step : ",
    sessionStorage.getItem("currentStep")
);

const parsedDraft = JSON.parse(
    sessionStorage.getItem("draft")
);

console.log(
    "Draft Title : ",
    parsedDraft.title
);

/* =====================================================
   Task 2
===================================================== */

localStorage.setItem("course" , "Javascript");

console.log(
    "sessionStorage course : ",
    sessionStorage.getItem("course")
);

/* =====================================================
   Task 3
===================================================== */

/*
sessionStorage is useful for storing temporary,
tab-specific information.

Example:
A multi-step registration form.

If the user refreshes the page,
their progress is restored.

If they close the tab,
the progress is automatically removed.

This prevents stale form data from remaining
for future visits.
*/