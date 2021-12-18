let data = [{
    id: 1,
    name: "Starry Night",
    description: "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
    format: "Oil on Canvas",
    artist: "Vincent Van Gogh",
    year: "1899",
    width: "73",
    length: "32",
    created: "2021-12-18 12:14",
    updated: "2021-12-18 12:14",
  },
  {
    id: 2,
    name: "Sunflowers",
    description: "Yellow Sunflowers",
    format: "Oil on Canvas",
    artist: "Vincent Van Gogh",
    year: "1899",
    width: "73",
    length: "60",
    created: "2021-12-18 12:14",
    updated: "2021-12-18 12:14",
  },
  {
    id: 3,
    name: "Self Portrait",
    description: "Ear Cut",
    format: "Oil on Canvas",
    artist: "Vincent Van Gogh",
    year: "1899",
    width: "73",
    length: "40",
    created: "2021-12-18 12:14",
    updated: "2021-12-18 12:14",
  },
];

class Artwork {
  constructor(id, name, format, artist, year, width, length) {
    this.id = id;
    this.name = name;
    this.format = format;
    this.artist = artist;
    this.year = year;
    this.width = width;
    this.length = length;
  }

  static one(id) {
    return data.find((item) => item.id == id);
  }

  static all() {
    return data;
  }

  static add(dataObject) {
    let idArray = data.map((item) => item.id);
    let maxID = Math.max(...idArray);
    let newID = maxID + 1;
    dataObject.id = newID;
    data.push(dataObject);
  }

  static update(id, dataObject) {

    for (let i = 0; i < data.length; i++) {
      let currentItem = data[i];
      if (currentItem.id == id) {
        currentItem = dataObject;
        break;
      }
    }
  }

  static delete(id) {
    let arrayIndexToDelete;
    for (let i = 0; i < data.length; i++) {
      let currentItem = data[i];
      if (currentItem.id == id) {
        arrayIndexToDelete = i;
        break;
      }
    }
    if (typeof arrayIndexToDelete !== 'undefined') {
      data.splice(arrayIndexToDelete, 1);
    }
  }
}

module.exports = Artwork;