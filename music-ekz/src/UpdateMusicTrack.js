import React from "react";


var name = "";
var length = 0;
var path = "";

function UpdateMusicTrack()
{
    const ChangeName = (e) =>
   {
        name = e.target.value;
   }
   const ChangeLength = (e) =>
   {
        length = e.target.value;
   }
   const ChangePath = (e) =>
   {
        path = e.target.value;
   }
   const FetchUpdate = () =>
   {
    fetch(
        "https://localhost:7113/api/Track?id=" + window.location.pathname.slice(20),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
              name: name,
              info: length,
              rating: path,
          }),
        }
      ).then((res) => {
        window.location.reload(false);
      });
   }
   return (
    <>
        <form>
            <p>
                Update music track:
            </p>
            <label>Name
                <input type="text" onChange={(e) => ChangeName(e)} />
            </label>
            <br/>
            <label>Length
                <input type="text" onChange={(e) => ChangeLength(e)} />
            </label>
            <br/>
            <label>Track
                <input type="file" onChange={(e) => ChangePath(e)} />
            </label>
            <br/>
        </form>
            <button variant="primary" onClick={() => FetchUpdate()}>
              Update Track
            </button>
    </>
   )
}

export default function () {
    return <UpdateMusicTrack />;
}