# Cosmic Echoes 🌌
*A Journey Across Time & Space*

## Overview

Cosmic Echoes is an immersive, interactive web experience that takes users on a comprehensive journey through space and time. From the Big Bang to modern space exploration, this website combines stunning visuals, educational content, and interactive elements to inspire wonder about our universe.

## Features

### Core Sections

- **Hero Section** - Dynamic stats showing days to next year, visible planets, and current moon phase
- **Interactive Solar System** - Clickable planets with detailed information panels
- **Cosmic Timeline** - 13.8 billion years of universe evolution with animated milestones
- **Lunar Phases** - Real-time moon phase tracking with location-based data
- **Historical Events** - Search astronomical events by date
- **Cosmic Gallery** - Masonry-style image gallery of space photography
- **Constellations** - Interactive star map showing tonight's constellations
- **Celestial Events** - Eclipse tracker and upcoming astronomical events
- **Space Explorer** - Interactive career exploration and mission simulator

### Interactive Elements

- **Animated Solar System** - Orbiting planets with click-to-learn functionality
- **Mission Simulator** - Mars landing, ISS docking, and lunar base scenarios
- **Training Modules** - Progressive learning system with achievements
- **Career Paths** - Detailed exploration of space industry careers
- **Real-time Data** - Live astronomical data based on user location

## Technical Stack

### Frontend
- **HTML5** - Semantic structure with modern standards
- **CSS3** - Advanced animations, parallax effects, and responsive design
- **Vanilla JavaScript** - Interactive functionality and API integrations
- **Three.js** (r128) - 3D graphics and animations

### External Dependencies
- Three.js from CDNJS
- External CSS and JavaScript files (assets/css/style.css, assets/js/main.js, assets/js/config.js)

## File Structure

```
cosmic-echoes/
│
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       ├── main.js         # Core JavaScript functionality
├── README.md               
└── package.json
```

## Installation & Setup

1. **Clone or Download** the project files
2. **Ensure all assets are in place**:
   - `assets/css/style.css`
   - `assets/js/main.js`
   - `assets/js/config.js`
3. **Serve the files** using a local web server (required for proper functionality)

### Local Development Server Options:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Open in browser**: Navigate to `http://localhost:8000`

## Key JavaScript Functions

### Core Functionality
- `showInfo(planet)` - Display planet information panel
- `closeInfo()` - Close information panel
- `startMission(type)` - Initialize mission simulator
- `completeModule(module)` - Training module progression
- `selectCareer(career)` - Career path selection

### Data Integration
- Location-based astronomical data
- Real-time moon phase calculations
- Historical space event database
- Constellation mapping

## Browser Compatibility

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Support**: Responsive design for tablets and smartphones
- **WebGL Required**: For Three.js 3D elements

## Features in Detail

### Solar System Explorer
Interactive 3D representation of our solar system with:
- Accurate orbital animations
- Detailed planet information
- Moon orbit visualization
- Click-to-learn functionality

### Historical Timeline
Visual journey through cosmic history featuring:
- Big Bang to present day
- Animated milestone markers
- Educational descriptions
- Interactive timeline navigation

### Lunar Tracking
Real-time moon phase display with:
- Current phase visualization
- Location-based rise/set times
- Astronomical data integration

### Mission Simulator
Interactive space mission scenarios:
- **Mars Landing**: Navigate atmospheric entry
- **ISS Docking**: Precision orbital maneuvers
- **Lunar Base**: Resource management and setup

### Achievement System
Gamified learning experience with:
- Progressive skill development
- Unlockable achievements
- Career path exploration
- Training module completion

## API Integrations

The website integrates with various astronomical APIs for real-time data:
- Moon phase calculations
- Sunrise/sunset times
- Planetary positions
- Eclipse predictions
- Historical space events

## Educational Content

### Career Exploration
- **Astronaut Path**: Requirements and training
- **Aerospace Engineer**: Design and development
- **Space Scientist**: Research and discovery
- **Mission Specialist**: Operations and planning

### Learning Modules
- Space Physics fundamentals
- Celestial Navigation techniques
- Space Survival protocols
- Communication systems

## Contributing

This project welcomes contributions! Areas for enhancement:
- Additional space missions
- More historical events
- Extended career information
- Enhanced mobile experience
- Accessibility improvements

## Performance Considerations

- **Image Optimization**: All images should be optimized for web
- **Lazy Loading**: Implement for gallery images
- **Animation Performance**: GPU-accelerated CSS animations
- **Mobile Optimization**: Touch-friendly interactions

## Future Enhancements

- [ ] VR/AR integration for immersive exploration
- [ ] Real-time space station tracking
- [ ] Interactive exoplanet database
- [ ] Social sharing features
- [ ] Offline mode capabilities
- [ ] Multi-language support

## Credits

### Images
- Space photography from various sources including NASA, ESA, and Unsplash
- All images used under appropriate licenses

### Astronomical Data
- NASA APIs for real-time space data
- International Astronomical Union for constellation data
- Various space agencies for historical events

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions, suggestions, or issues:
- Create an issue in the project repository
- Check existing documentation
- Review browser console for debugging information

---

**Explore the cosmos, one click at a time** <3

*"The universe is not only stranger than we imagine, it is stranger than we can imagine."* - J.B.S. Haldane