// Define the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

// Create two individual Video instances and call watch()
const video1 = new Video("The Art of Coding", "Alice", 300);
video1.watch();

const video2 = new Video("Intro to JavaScript", "Bob", 450);
video2.watch();

// Bonus: Array of video data
const videoData = [
  { title: "How to Cook Pasta", uploader: "ChefJohn", time: 600 },
  { title: "Gaming Highlights", uploader: "GamerGuy", time: 1200 },
  { title: "Daily Vlog #1", uploader: "VloggerJane", time: 900 },
  { title: "Learn CSS Grid", uploader: "DevDude", time: 750 },
  { title: "Bike Tricks", uploader: "BMXBro", time: 500 }
];

// Loop through the array and create Video instances
videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  video.watch();
});
