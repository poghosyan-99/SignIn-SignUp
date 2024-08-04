// export const sendRequest = () => {
//     const sendRequestGet = async (url) => {
//         const result = await fetch(url);
//         const jsonRes = await result.json();
//         return jsonRes;
//     }

//     const sendRequestPost = async (url, userData) => {
//         const result = await fetch(url, {
//             method: "Post",
//             headers: {
//                 "Content=Type":"application/json"
//             },
//             body:JSON.stringify(userData),
//         })
//         return result.json();
//     }

//     const sendRequestDelete = async (url) => { 
//         const result = await fetch(url, {
//             method: "DELETE",
//             headers: {
//                 "Content=Type":"application/json"
//             },
//         })
//         return result.json();
//     }

//     return {sendRequestGet, sendRequestPost, sendRequestDelete};
// }









export const sendRequest = () => {
    const sendRequestGet = async (url) => {
        const result = await fetch(url);
        const jsonRes = await result.json();
        return jsonRes;
    }

    const sendRequestPost = async (url, userData) => {
        const result = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(userData),
        })
        return result.json();
    }

    const sendRequestDelete = async (url) => { 
        const result = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",  
            },
        })
        return result.json();
    }

    return { sendRequestGet, sendRequestPost, sendRequestDelete };
}
