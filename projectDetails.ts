
import tesda from "src/assets/tesda.png";
import kopilism from "src/assets/kopilism.png";
import sage from "src/assets/sage.png";
import sis from "src/assets/sis.png";
import cpu from "src/assets/cpu.png";
import kpop from "src/assets/kpop.png";

export const projectDetails = {
  tesda: {
    title: "NCIII JAVA",
    img: tesda,
    content: `This certificate represents my completion of the NC III in Java Programming, issued by TESDA.

It's more than just a credential—it's a milestone in my journey as a developer. It reflects the foundational knowledge and practical skills I gained in object-oriented programming, application development, and software design.

Receiving this certification reinforced my passion for clean, efficient code and strengthened my confidence as both a freelancer and a tech enthusiast. It’s a badge of dedication, discipline, and the drive to keep growing in the field of software development.`,
  },
  sis: {
    title: "Student Info System",
    img: sis,
    content: `The Student Info System (SIS) is a native desktop application for academic institutions to manage student records.

It features:
- Admin login with secure authentication
- Dynamic data tables using PostgreSQL
- User-friendly interface for managing student data
- CRUD operations for students, courses, and grades
- Responsive UI for desktop
- Data visualization for performance tracking
- Export options for reports

Built using JAVA GUI for the frontend, Java for backend, and PostgreSQL for database and authentication. Designed for efficiency and scalability in handling institutional data.`,
  },
  kopilism: {
    title: "Kopilism App",
    img: kopilism,
    content: `Kopilism is a mobile coffee ordering app designed for cafés and small coffee businesses.

Key features:
- QR code scanning for contactless ordering
- Role-based login (admin, employee, customer)
- Inventory tracking with automated stock alerts
- Order history and status monitoring

Built using Flutter for cross-platform compatibility and Firebase for real-time backend and cloud storage. The app also includes analytics for product trends and seasonal demand forecasting.`,
  },
  sage: {
    title: "Sage AI",
    img: sage,
    content: `Sage AI is an interactive, text-based RPG powered by artificial intelligence.

Players can explore fantasy worlds, talk to characters, and make decisions that shape the story—powered by OpenAI's GPT API.

Tech Stack:
- React for dynamic interfaces
- Tailwind CSS for smooth styling
- Express.js for API handling
- GPT-4 for AI responses
- https://text-adventure-six.vercel.app/

Each playthrough feels unique thanks to real-time AI prompts, offering a balance between classic RPG and emergent storytelling.`,
  },
  "kpop": {
    title: "K-Express",
    img: kpop,
    content: `A website dedicated to Kpop enthusiasts.

Created with:
- HTML5 and CSS3 for structure and styling and JS for interactivity.
- https://kexpress.vercel.app/

Features:
- User-Friendly Interface
  Clean and intuitive design for easy navigation across the website.

- K-News Section
  Latest updates about Kpop groups, idols, concerts, awards, and industry trends.

- K-Music Videos Archive
  A curated collection of music videos from various Kpop artists.

- K-Companies Directory
  Detailed profiles of major Kpop entertainment companies and their artists.

- Search Functionality (if applicable)
  Quickly find specific groups, idols, or companies.

- Responsive Design
  Accessible across different devices including phones, tablets, and desktops.

Designed as an educational game to demonstrate how digital signals affect movement, score calculation, and game logic. Ideal for beginners exploring both web and hardware simulation.`,
  },
  cpu: {
    title: "Dual Core CPU Simulator",
    img: cpu,
    content: `This project is a visual simulator of a 16-bit dual-core CPU, created for academic and demonstration purposes.

Key Features:
- Instruction fetching and execution
- Dual-thread simulation across two cores
- Simulated OS terminal with basic shell commands
- Visualization of registers, memory access, and control units

Built using Logisim Evolution, it's a deep dive into how CPUs work at a fundamental level, helping students understand architecture beyond theory.`,
  },
};
