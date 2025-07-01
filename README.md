# Cosmic Echoes 🌌
*A Journey Across Time & Space*

An immersive, interactive web experience that takes users on a journey through the cosmos, from the Big Bang to the present day. Explore our solar system, track celestial events, and become a space explorer through engaging simulations and educational content.

https://cosmic-echoes-nine.vercel.app/

## Features

### Interactive Solar System
- **3D Solar System Visualization**: Explore planets with orbital animations
- **Planetary Information Panels**: Click on any celestial body for detailed information
- **Real-time Moon Phases**: Track the current lunar cycle
- **Live Astronomical Data**: Sunrise, sunset, moonrise, and moonset times

### Cosmic Timeline
- **Big Bang to Present**: Journey through 13.8 billion years of cosmic evolution
- **Interactive Timeline**: Animated visual representations of major cosmic events
- **Educational Content**: Learn about stellar formation, galaxy creation, and the birth of our solar system

### Astronomical Tools
- **Historical Events Search**: Look up space events by date
- **Eclipse & Transit Tracker**: Monitor upcoming celestial events
- **Constellation Viewer**: Explore tonight's visible constellations
- **Planetary Position Tracker**: Real-time planetary visibility data

### Space Explorer Training
- **Career Path Simulator**: Explore different space-related careers
- **Mission Control Simulator**: Interactive space mission scenarios
- **Training Modules**: Complete courses in space physics, navigation, survival, and communication
- **Achievement System**: Unlock badges as you progress through your space journey
- **Progress Tracking**: Level up from Cosmic Cadet to Stellar Navigator

### Visual Experience
- **Cosmic Gallery**: Curated collection of stunning space imagery
- **Animated Backgrounds**: Parallax scrolling with space-themed visuals
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Engaging visual effects throughout the experience

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics**: Three.js (r128)
- **External APIs**: 
  - Astronomical data APIs for real-time information
  - Location services for personalized sky data
- **Responsive Framework**: Custom CSS Grid and Flexbox
- **Animation Libraries**: CSS animations and JavaScript transitions

## Project Structure

```
cosmic-echoes/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       ├── main.js         # Core JavaScript functionality
└── package.json               # Local image assets (if any)
```

## Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for external resources and APIs

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cosmic-echoes.git
   cd cosmic-echoes
   ```

2. **Open in browser**
   ```bash
   # Simple HTTP server (Python 3)
   python -m http.server 8000
   
   # Or use Node.js
   npx http-server
   
   # Or simply open index.html in your browser
   ```

3. **Visit the application**
   Open `http://localhost:8000` in your web browser

### Configuration

Edit `assets/js/config.js` to customize:
- API endpoints for astronomical data
- Location settings
- Animation preferences
- Feature toggles

## Key Sections

### 1. Hero Section
- Dynamic countdown to next year
- Live planetary visibility count
- Current moon phase display

### 2. Solar System Explorer
- Interactive 3D solar system model
- Clickable planets with detailed information
- Animated orbital mechanics

### 3. Historical Events
- Date-based event search functionality
- Curated database of significant space milestones

### 4. Cosmic Timeline
- Visual journey from Big Bang to present
- Animated representations of cosmic evolution
- Educational content for each major epoch

### 5. Lunar Tracker
- Real-time moon phase visualization
- Location-based sunrise/sunset times
- Moonrise and moonset calculations

### 6. Constellation Guide
- Interactive star map
- Location-aware constellation visibility
- Educational information about stellar navigation

### 7. Space Explorer Training
- Career exploration tools
- Interactive mission simulations
- Progressive skill-building modules
- Achievement and badge systems

## Customization

### Adding New Planets
Update the solar system section in `index.html` and corresponding data in `main.js`:

```html
<div class="orbit orbit-new-planet">
    <div class="planet new-planet" onclick="showInfo('new-planet')" title="New Planet"></div>
</div>
```

### Modifying Timeline Events
Edit the timeline data structure in `main.js` to add or modify cosmic events:

```javascript
const timelineEvents = [
    {
        age: "X billion years ago",
        title: "New Event",
        description: "Event description",
        visual: "animation-class"
    }
];
```

### Customizing Missions
Add new mission scenarios in the space explorer section:

```javascript
function startMission(missionType) {
    // Add your custom mission logic
}
```

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full interactive experience with all features
- **Tablet**: Touch-optimized interface with adapted layouts
- **Mobile**: Streamlined experience with essential features

## Browser Compatibility

- **Chrome** 90+ (Recommended)
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## Future Enhancements

- [ ] Real-time ISS tracking
- [ ] Augmented reality constellation viewer
- [ ] Voice-controlled navigation
- [ ] Multi-language support
- [ ] Advanced mission simulations
- [ ] Social sharing of achievements
- [ ] Offline mode support
- [ ] VR compatibility

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- **NASA** - Astronomical data and imagery
- **ESA** - European Space Agency resources
- **Three.js Community** - 3D graphics framework
- **Space Photography Contributors** - Stunning cosmic imagery
- **Astronomical APIs** - Real-time celestial data providers


## 🌟 Show Your Support

Give a ⭐️ if this project helped you explore the cosmos!

*"The universe is not only stranger than we imagine, it is stranger than we can imagine."* - J.B.S. Haldane
