import React from "react";


var allTracks;
const FetchGetAll = () =>
{
    fetch("https://localhost:7113/api/Track", {
            headers: {
              Accept: "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
        allTracks = data;
    });
};
FetchGetAll();

function ShowAllMusicTracks()
{
    const DeleteTrack = (id) =>
    {
        if (id != null) {
            fetch("https://localhost:7113/api/Track?id=" + id, { method: "DELETE" }).then(
              () => window.location.reload(false)
            );
          }
    };
    console.log(allTracks);
    return (
        
        allTracks.map((track) => (
            <div style={{border: 'solid'}}>
            <p>
                {track.name} : {track.length}
            </p>
            <button onClick={() => DeleteTrack(track.id)}>
                Delete
            </button>
            <br/>
            </div>
        ))
    );
}

export default function () {
    return <ShowAllMusicTracks />;
}