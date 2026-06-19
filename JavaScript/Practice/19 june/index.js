let isFollowing = false;

function toggleFollow(){

    let button =
    document.getElementById(
        "followBtn"
    );

    if(isFollowing === false){

        button.innerText =
        "Following";

        button.classList.add(
            "following"
        );

        isFollowing = true;
    }

    else{

        button.innerText =
        "Follow";

        button.classList.remove(
            "following"
        );

        isFollowing = false;
    }

}