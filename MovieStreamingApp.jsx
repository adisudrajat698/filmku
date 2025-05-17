import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const movies = \[
{
id: 1,
title: "The Matrix",
description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
videoUrl: "[https://download.blender.org/peach/bigbuckbunny\_movies/BigBuckBunny\_320x180.mp4](https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4)"
},
{
id: 2,
title: "Big Buck Bunny",
description: "A large and lovable rabbit deals with three bullying rodents.",
videoUrl: "[https://download.blender.org/peach/bigbuckbunny\_movies/BigBuckBunny\_320x180.mp4](https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4)"
}
];

export default function MovieStreamingApp() {
const \[selectedMovie, setSelectedMovie] = useState(null);
const \[search, setSearch] = useState("");

const filteredMovies = movies.filter(movie =>
movie.title.toLowerCase().includes(search.toLowerCase())
);

return ( <div className="p-6 space-y-4"> <h1 className="text-2xl font-bold">Nonton Film Online</h1>
\<Input
placeholder="Cari judul film..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

```
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredMovies.map((movie) => (
      <Card key={movie.id} onClick={() => setSelectedMovie(movie)} className="cursor-pointer hover:shadow-xl transition">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">{movie.title}</h2>
          <p className="text-sm text-gray-600">{movie.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  {selectedMovie && (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Now Playing: {selectedMovie.title}</h2>
      <video controls className="w-full max-w-3xl rounded-xl shadow-lg">
        <source src={selectedMovie.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )}
</div>
```

);
}

yang ini dinamain filenya apa?
