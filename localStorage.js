console.log("========== localStorage ==========");
/* =====================================================
   Task 1
   Save a theme preference and read it back
===================================================== */

localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log("Theme : ", theme);

const missingKey = localStorage.getItem("language");
console.log("Missing key : ", missingKey); // null

/* =====================================================
   Task 2
   Store an object using JSON.stringify
===================================================== */

const user = {
    id : 101 , 
    profile : {
        name : "Nikhil",
        city : "Lucknow",
    }
};

localStorage.setItem("user" , JSON.stringify(user));

const parsedUser = JSON.parse(
    localStorage.getItem("user")
);

console.log(
    "Nested property : ",
    parsedUser.profile.city
);

/* =====================================================
   Task 3
   Enumerate keys
===================================================== */

console.log("All localStorage keys : ");

for(let i = 0 ; i < localStorage.length ; i++){
    const key = localStorage.key(i);

    console.log(
        `${i+1}.`,
        key,
        "=>",
        localStorage.getItem(key)
    );
}

localStorage.clear();

console.log(
    "Length after clear : ",
    localStorage.length
);