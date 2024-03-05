export const getUser = async (id) => {
    let user = {};
    const response = await fetch(
        "https://themesis-guardian.onrender.com/api/v1/users/getUser/" + id,
        {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => response.json())
        .then((data) => {
            user = data;
        });
    return user;
};