
export type playlistType = {
  "collaborative": boolean,
  "description": string,
  "external_urls": {
    "spotify": string
  },
  "followers": {
    "href": string,
    "total": number
  },
  "href": string,
  "id": string,
  "images": [
    {
      "url": string,
      "height": number,
      "width": number
    }
  ],
  "name": string,
  "owner": {
    "display_name": string,
    "external_urls": {
      "spotify": string
    },
    "followers": {
      "href": string,
      "total": number
    },
    "href": string,
    "id": string,
    "images": [
      {
        "url": string,
        "height": number,
        "width": number
      }
    ],
    "type": string,
    "uri": string
  },
  "public": true,
  "snapshot_id": string,
  "tracks": {
    "href": string,
    "items": [
      {}
    ],
    "limit": number,
    "next": string,
    "offset": number,
    "previous": string,
    "total": number
  },
  "type": string,
  "uri": string
}

export type featuredPlaylist = {
  playlists: {
    href: string,
    items: playlistType[]
  }
}

