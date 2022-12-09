import React from "react";

var name = "";
var length = 0;
var path = "";

function CreateMusicTrack()
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
        path = getFilePath(e);
   }
    const FetchSend = () =>
    {
        console.log(name);
        console.log(length);
        console.log(path);
        fetch("https://localhost:7113/api/Track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          length: length,
          path: path,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          window.location.reload(false);
        });
    };

    return (
        <>
             <form>
                <p>
                    Add music track:
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
            <button variant="primary" onClick={() => FetchSend()}>
              Add Track
            </button>
        </>
    )
}

function getFilePath(e)
{
    var file = e.target.files[0].mozFullPath;
    console.log(file);
    return file;
}

export default function () {
    return <CreateMusicTrack />;
}