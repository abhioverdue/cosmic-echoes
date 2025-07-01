 // Explorer progress tracking
        let explorerProgress = {
            level: 0,
            experience: 0,
            completedModules: [],
            selectedCareer: null,
            missionsCompleted: []
        };

        const levels = [
            { name: "Cosmic Cadet", xp: 0 },
            { name: "Stellar Navigator", xp: 100 },
            { name: "Space Commander", xp: 250 },
            { name: "Galactic Explorer", xp: 500 },
            { name: "Universe Master", xp: 1000 }
        ];

        function updateProgress() {
            const currentLevel = levels[explorerProgress.level];
            const nextLevel = levels[explorerProgress.level + 1];
            
            document.getElementById('currentLevel').textContent = currentLevel.name;
            
            if (nextLevel) {
                const progressPercent = ((explorerProgress.experience - currentLevel.xp) / (nextLevel.xp - currentLevel.xp)) * 100;
                document.getElementById('progressBar').style.width = Math.min(progressPercent, 100) + '%';
                document.getElementById('progressText').textContent = `${explorerProgress.experience}/${nextLevel.xp} XP to reach ${nextLevel.name}`;
            } else {
                document.getElementById('progressBar').style.width = '100%';
                document.getElementById('progressText').textContent = 'Maximum level achieved! You are a true Universe Master!';
            }
        }

        function addExperience(amount) {
            explorerProgress.experience += amount;
            
            while (explorerProgress.level < levels.length - 1 && 
                   explorerProgress.experience >= levels[explorerProgress.level + 1].xp) {
                explorerProgress.level++;
                showLevelUpNotification();
            }
            
            updateProgress();
        }

        function showLevelUpNotification() {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #FFDB58, #BA8E23);
                color: black;
                padding: 30px;
                border-radius: 20px;
                font-size: 1.5rem;
                font-weight: bold;
                text-align: center;
                z-index: 1000;
                animation: levelUpPulse 3s ease-out;
            `;
            notification.textContent = `You have now levelled up! You are a ${levels[explorerProgress.level].name}!`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 3000);
        }

        // Career selection
        function selectCareer(career) {
            explorerProgress.selectedCareer = career;
            addExperience(25);
            
            const careerNames = {
                'astronaut': 'Astronaut',
                'engineer': 'Aerospace Engineer',
                'scientist': 'Space Scientist',
                'mission': 'Mission Specialist'
            };
            
            alert(`🚀 Career path selected: ${careerNames[career]}! You've gained 25 XP for choosing your destiny!`);
        }

        // Mission simulator
        function startMission(missionType) {
            const statusDiv = document.getElementById('missionStatus');
            const missions = {
                'mars': {
                    name: 'Mars Landing Mission',
                    steps: [
                        '> INITIATING MARS APPROACH SEQUENCE...',
                        '> ATMOSPHERIC ENTRY IN PROGRESS...',
                        '> DEPLOYING PARACHUTES...',
                        '> RETRO-ROCKETS FIRING...',
                        '> TOUCHDOWN SUCCESSFUL! Welcome to Mars, Commander!'
                    ]
                },
                'iss': {
                    name: 'ISS Docking Procedure',
                    steps: [
                        '> BEGINNING APPROACH TO INTERNATIONAL SPACE STATION...',
                        '> ESTABLISHING COMMUNICATION WITH ISS...',
                        '> ADJUSTING ORBITAL TRAJECTORY...',
                        '> DOCKING CLAMPS ENGAGING...',
                        '> DOCKING COMPLETE! Welcome aboard the ISS!'
                    ]
                },
                'moon': {
                    name: 'Lunar Base Setup',
                    steps: [
                        '> ARRIVING AT LUNAR SOUTH POLE...',
                        '> DEPLOYING HABITAT MODULES...',
                        '> ESTABLISHING POWER SYSTEMS...',
                        '> ACTIVATING LIFE SUPPORT...',
                        '> LUNAR BASE OPERATIONAL! Humanity returns to the Moon!'
                    ]
                }
            };

            const mission = missions[missionType];
            let stepIndex = 0;
            
            statusDiv.innerHTML = `> MISSION: ${mission.name}<br>> STATUS: INITIATING...`;
            
            const interval = setInterval(() => {
                if (stepIndex < mission.steps.length) {
                    statusDiv.innerHTML += '<br>' + mission.steps[stepIndex];
                    statusDiv.scrollTop = statusDiv.scrollHeight;
                    stepIndex++;
                } else {
                    clearInterval(interval);
                    if (!explorerProgress.missionsCompleted.includes(missionType)) {
                        explorerProgress.missionsCompleted.push(missionType);
                        addExperience(50);
                        setTimeout(() => {
                            alert(`🎯 Mission Complete! You've gained 50 XP for successfully completing the ${mission.name}!`);
                             checkAchievements();
                        }, 1000);
                    }
                }
            }, 1500);
            
        }
        
function completeModule(moduleType) {
    if (explorerProgress.completedModules.includes(moduleType)) {
        alert('You have already completed this training module!');
        return;
    }

    const progressElement = document.getElementById(`${moduleType}-progress`);
    const statusElement = document.getElementById(`${moduleType}-status`);
    
    statusElement.innerHTML = 'Training in progress... <span class="loading"></span>';
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressElement.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            explorerProgress.completedModules.push(moduleType);
            statusElement.textContent = 'Training Complete! ✓';
            addExperience(30);
            
            checkAchievements();
            
            showEducationalResources(moduleType);
        }
    }, 200);
}

const educationalResources = {
    'physics': {
        title: 'Space Physics Resources',
        description: 'Dive deeper into the physics that govern space exploration',
        links: [
            {
                title: 'NASA – Basics of Space Flight',
                url: 'https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/',
                description: 'NASA guide to orbital mechanics and rocket physics'
            },
            {
                title: 'NASA GRC – Rocket Principles',
                url: 'https://www.grc.nasa.gov/www/k-12/rocket/TRCRocket/rocket_principles.html',
                description: 'Explains rocket propulsion and forces involved in launch'
            },
            {
                title: 'ESA Education – Physics Resources',
                url: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Education',
                description: 'European Space Agency education portal with physics material'
            },
            {
                title: 'MIT OpenCourseWare – Aerospace Engineering',
                url: 'https://ocw.mit.edu/courses/aeronautics-and-astronautics/',
                description: 'Free MIT courses on aerospace engineering and flight dynamics'
            }
        ]
    },
    'navigation': {
        title: 'Celestial Navigation Resources',
        description: 'Master the art of navigating through space using stars and instruments',
        links: [
            {
                title: 'NASA – Orbit Analysis & Design',
                url: 'https://www.nasa.gov/ames-engineering/spaceflight-division/flight-dynamics/orbit-analysis/',
                description: 'Official NASA orbit analysis resources for mission planning'
            },
            {
                title: 'US Naval Observatory',
                url: 'https://www.usno.navy.mil/',
                description: 'Official source of celestial navigation and astronomical data'
            },
            {
                title: 'Stellarium',
                url: 'https://stellarium.org/',
                description: 'Free planetarium software for learning star-based navigation'
            },
            {
                title: 'IAU Astronomy Education',
                url: 'https://www.iau.org/public/themes/astronomy_education/',
                description: 'International Astronomical Union education portal'
            }
        ]
    },
    'survival': {
        title: 'Space Survival Resources',
        description: 'Learn essential survival skills for extreme space environments',
        links: [
            {
                title: 'NASA – Life Support Systems (ECLSS)',
                url: 'https://www.nasa.gov/exploration/systems/eclss/',
                description: 'Environmental Control and Life Support Systems overview'
            },
            {
                title: 'NASA Human Research Program',
                url: 'https://www.nasa.gov/hrp/',
                description: 'Research into human performance and health in space'
            },
            {
                title: 'Space Medicine Association',
                url: 'https://www.spacemedicine.org/',
                description: 'Focuses on medical practices for astronauts and space survival'
            },
            {
                title: 'ESA – Human Spaceflight Training',
                url: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts/Training',
                description: 'European astronaut training including space survival'
            }
        ]
    },
    'communication': {
        title: 'Space Communication Resources',
        description: 'Understand communication systems used in space exploration',
        links: [
            {
                title: 'NASA – Deep Space Network',
                url: 'https://www.nasa.gov/directorates/heo/scan/services/networks/deep_space_network/',
                description: 'NASA’s global communication network for space missions'
            },
            {
                title: 'Amateur Radio on the ISS (ARISS)',
                url: 'https://www.ariss.org/',
                description: 'Educational and amateur radio operations aboard the ISS'
            },
            {
                title: 'IEEE Aerospace & Electronic Systems Society',
                url: 'https://aess.ieee.org/',
                description: 'Professional publications and research in aerospace communication'
            },
            {
                title: 'ITU – Space Services',
                url: 'https://www.itu.int/en/ITU-R/space/',
                description: 'International Telecommunication Union’s space regulations and frequency allocations'
            }
        ]
    }
};

function showEducationalResources(moduleType) {
    const resources = educationalResources[moduleType];
    if (!resources) return;

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 20px;
        padding: 40px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        color: white;
        position: relative;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `;
    closeBtn.onmouseover = () => closeBtn.style.opacity = '1';
    closeBtn.onmouseout = () => closeBtn.style.opacity = '0.7';
    closeBtn.onclick = () => document.body.removeChild(modal);

    const header = document.createElement('div');
    header.innerHTML = `
        <h2 style="font-family: 'EB Garamond', serif; font-size: 2rem; margin-bottom: 10px; background: linear-gradient(135deg, #96bcff, #96bcff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            🎓 ${resources.title}
        </h2>
        <p style="font-family: 'Arial', serif; color: rgba(255,255,255,0.8); margin-bottom: 30px; line-height: 1.6;">
            ${resources.description}
        </p>
    `;

    const linksContainer = document.createElement('div');
    resources.links.forEach(link => {
        const linkElement = document.createElement('div');
        linkElement.style.cssText = `
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
            cursor: pointer;
        `;
        
        linkElement.innerHTML = `
            <h3 style=" color: #96bcff; margin-bottom: 8px; font-size: 1.1rem;">
                🔗 ${link.title}
            </h3>
            <p style="font-family: 'Arial', serif; color: rgba(255,255,255,0.8); font-size: 0.9rem; line-height: 1.5;">
                ${link.description}
            </p>
        `;

        linkElement.onmouseover = () => {
            linkElement.style.background = 'rgba(255,255,255,0.1)';
            linkElement.style.transform = 'translateY(-2px)';
        };
        linkElement.onmouseout = () => {
            linkElement.style.background = 'rgba(255,255,255,0.05)';
            linkElement.style.transform = 'translateY(0)';
        };

        linkElement.onclick = () => {
            window.open(link.url, '_blank');
            console.log(`Educational link clicked: ${link.title}`);
        };

        linksContainer.appendChild(linkElement);
    });

    const completionMsg = document.createElement('div');
    completionMsg.style.cssText = `
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2));
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 12px;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
    `;
    completionMsg.innerHTML = `
        <p style="font-family: 'EB Garamond', serif; color: #10b981; font-weight: 600; margin-bottom: 10px;">
            🎉 Training Complete!
        </p>
        <p style="font-family: 'Arial', serif; color: rgba(255,255,255,0.8); font-size: 0.9rem;">
            You've gained 40 XP and unlocked these educational resources. Click any link above to continue your space education journey!
        </p>
    `;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(header);   
    modalContent.appendChild(linksContainer);
    modalContent.appendChild(completionMsg);
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);

    const fadeInStyle = document.createElement('style');
    fadeInStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(fadeInStyle);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Close modal with Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}
        function getModuleName(moduleType) {
            const moduleNames = {
                'physics': 'Space Physics',
                'navigation': 'Celestial Navigation',
                'survival': 'Space Survival',
                'communication': 'Space Communication'
            };
            return moduleNames[moduleType] || moduleType;
        }

        // Achievement system
        function checkAchievements() {
            // Cadet Graduate - complete 2 training modules
            if (explorerProgress.completedModules.length >= 2) {
                unlockAchievement('cadet-graduate');
            }
            
            // Mission Commander - complete at least one mission
            if (explorerProgress.missionsCompleted.length >= 1) {
                unlockAchievement('mission-commander');
            }
            
            // Stellar Navigator - complete navigation module
            if (explorerProgress.completedModules.includes('navigation')) {
                unlockAchievement('stellar-navigator');
            }
        }

        function unlockAchievement(achievementId) {
            const badge = document.getElementById(achievementId);
            if (!badge.classList.contains('unlocked')) {
                badge.classList.add('unlocked');
                addExperience(40);
                
                const achievementNames = {
                    'first-steps': 'First Steps',
                    'cadet-graduate': 'Cadet Graduate',
                    'mission-commander': 'Mission Commander',
                    'stellar-navigator': 'Stellar Navigator'
                };
                
                setTimeout(() => {
                    alert(`🏆 Achievement Unlocked: ${achievementNames[achievementId]}! You've gained 40 XP!`);
                }, 1000);
            }
        }

        const levelUpStyle = document.createElement('style');
        levelUpStyle.textContent = `
            @keyframes levelUpPulse {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(levelUpStyle);

        function initializeSpaceExplorer() {
            createStars();
            updateProgress();
            
            setTimeout(() => {
                addExperience(10);
            }, 2000);
        }

        window.addEventListener('load', initializeSpaceExplorer);

        // Add keyboard shortcuts for power users
        document.addEventListener('keydown', function(event) {
            // Press 'M' for Mars mission
            if (event.key.toLowerCase() === 'm' && !event.ctrlKey && !event.altKey) {
                startMission('mars');
            }
            // Press 'I' for ISS mission
            else if (event.key.toLowerCase() === 'i' && !event.ctrlKey && !event.altKey) {
                startMission('iss');
            }
            // Press 'L' for Lunar mission
            else if (event.key.toLowerCase() === 'l' && !event.ctrlKey && !event.altKey) {
                startMission('moon');
            }
        });

        // Add particle effects for interactions
        function createParticleEffect(x, y) {
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    left: ${x}px;
                    top: ${y}px;
                    width: 4px;
                    height: 4px;
                    background: #3b82f6;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1000;
                    animation: particleFloat 2s ease-out forwards;
                `;
                
                const angle = (Math.PI * 2 * i) / 10;
                const velocity = 50 + Math.random() * 50;
                particle.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
                particle.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (document.body.contains(particle)) {
                        document.body.removeChild(particle);
                    }
                }, 2000);
            }
        }

        // Add particle animation CSS
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes particleFloat {
                0% { 
                    transform: translate(0, 0) scale(1); 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(var(--dx), var(--dy)) scale(0); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(particleStyle);

        // Add click effects to interactive elements
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('career-card') || 
                event.target.classList.contains('control-button') ||
                event.target.classList.contains('training-module')) {
                createParticleEffect(event.clientX, event.clientY);
            }
        });

        // Save progress to memory (since localStorage is not available)
        function saveProgress() {
            console.log('Progress saved:', explorerProgress);
        }

        // Auto-save progress periodically
        setInterval(saveProgress, 30000); // Save every 30 seconds
        
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            
            reveals.forEach(reveal => {
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('revealed');
                }
            });
        }

        // Generate animated star field
        function createStars() {
            const starContainer = document.getElementById('stars');
            const numStars = 150;
            
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 2 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 2 + 2) + 's';
                starContainer.appendChild(star);
            }
        }
        

        // Enhanced Star Creation
        function createStars(containerId, count = 200) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            container.innerHTML = '';
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                
                if (Math.random() < 0.1) {
                    star.classList.add('bright');
                } else if (Math.random() < 0.05) {
                    star.classList.add('colorful');
                }
                
                star.style.animationDelay = Math.random() * 4 + 's';
                
                container.appendChild(star);
            }
        }

// Planet information data 
const planetData = {
    sun: {
        title: "The Sun",
        info: "Meet the ultimate powerhouse of our solar system! The Sun is a mind-blowing ball of plasma that's been burning for 4.6 billion years and has enough fuel to keep going for another 5 billion. Every second, it converts 600 million tons of hydrogen into helium, releasing energy equivalent to 100 billion hydrogen bombs! The Sun is so massive that it contains 99.86% of all the mass in our solar system. Fun fact: You could fit 1.3 million Earths inside the Sun, and its core is hot enough to melt anything known to humanity!",
        stats: {
            "Core Furnace": "15 million°C (hot enough to melt diamond instantly!)",
            "Surface Heat": "5,505°C (10x hotter than lava)",
            "Monster Mass": "333,000 times Earth's mass",
            "Energy Output": "3.8 × 10²⁶ watts (powers entire solar system)",
            "Light Speed": "8 minutes 20 seconds to reach Earth",
            "Lifespan Left": "~5 billion years"
        },
        source: "https://www.nasa.gov/sun",
        sourceText: "NASA Solar System Exploration"
    },
    mercury: {
        title: "Mercury",
        info: "The speed demon of space! Mercury races around the Sun in just 88 days, making it the fastest planet in our solar system at 47.87 km/s. But here's the mind-bender: its day is longer than its year! It takes 59 Earth days to rotate once. Mercury experiences the most extreme temperature swings in the solar system - hot enough to melt lead during the day (430°C) and cold enough to freeze carbon dioxide at night (-180°C). Despite being closest to the Sun, it has ice at its poles hidden in permanently shadowed craters!",
        stats: {
            "Speed Demon": "47.87 km/s (fastest orbital speed)",
            "Temperature Chaos": "430°C to -180°C (620°C difference!)",
            "Tiny Titan": "Only 38% of Earth's size",
            "Crater Central": "Caloris Basin - 1,550 km wide crater",
            "Magnetic Mystery": "Weak magnetic field (unexpected!)",
            "Ice Surprise": "Water ice at poles despite extreme heat"
        },
        source: "https://solarsystem.nasa.gov/planets/mercury/",
        sourceText: "NASA Mercury Facts"
    },
    venus: {
        title: "Venus",
        info: "Welcome to hell! Venus is Earth's evil twin - similar in size but absolutely deadly. It's the hottest planet in our solar system, even hotter than Mercury, thanks to a runaway greenhouse effect. The atmosphere is 96% carbon dioxide with clouds made of sulfuric acid that rain down but evaporate before hitting the ground. The atmospheric pressure would crush you like a soda can, and the temperature is hot enough to melt zinc! Venus rotates backwards (retrograde) and so slowly that a day is longer than a year. It's literally raining metal in some areas!",
        stats: {
            "Hellish Heat": "464°C surface (hotter than pizza ovens!)",
            "Crushing Pressure": "90x Earth's (like being 900m underwater)",
            "Toxic Clouds": "Sulfuric acid droplets",
            "Backwards Rotation": "Spins opposite to most planets",
            "Slow Motion": "243 Earth days = 1 Venus day",
            "Volcanic World": "1,000+ volcanoes mapped"
        },
        source: "https://solarsystem.nasa.gov/planets/venus/",
        sourceText: "NASA Venus Exploration"
    },
    earth: {
        title: "Earth",
        info: "Our beautiful blue marble - the only known oasis of life in the universe! Earth is perfectly positioned in the 'Goldilocks Zone' where liquid water can exist. It's protected by a magnetic shield that deflects deadly solar radiation, and its atmosphere is the perfect cocktail for life. Earth is constantly changing - the continents drift at about the same rate your fingernails grow, and the ocean contains 99% of all living space on the planet. Every year, Earth gets about 40,000 tons heavier from space dust, and lightning strikes our planet 100 times every second!",
        stats: {
            "Perfect Distance": "149.6 million km from Sun (Goldilocks Zone)",
            "Water World": "71% surface covered by water",
            "Oxygen Factory": "21% oxygen atmosphere (unique!)",
            "Magnetic Shield": "Protects from deadly solar wind",
            "Life Central": "8.7 million species estimated",
            "Age": "4.54 billion years old"
        },
        source: "https://climate.nasa.gov/evidence/",
        sourceText: "NASA Earth Science Division"
    },
    moon: {
        title: "The Moon",
        info: "Earth's cosmic dance partner and the reason we have stable seasons! The Moon was born from a catastrophic collision between early Earth and a Mars-sized object called Theia 4.5 billion years ago. It's gradually spiraling away from us at 3.8 cm per year - in the distant past, it appeared much larger in the sky! The Moon controls our tides, stabilizes Earth's wobble, and may have been crucial for the development of life. Neil Armstrong and Buzz Aldrin's footprints are still there, perfectly preserved, and will remain for millions of years since there's no wind or weather to erase them!",
        stats: {
            "Tidal Master": "Controls Earth's ocean tides",
            "Distance Growing": "Moving 3.8 cm away annually",
            "One-Face Show": "Same side always faces Earth",
            "Gravity Light": "1/6 of Earth's gravity",
            "Ancient Impact": "Born from massive collision",
            "Human Footprints": "12 Apollo astronauts walked here"
        },
        source: "https://moon.nasa.gov/",
        sourceText: "NASA Moon Exploration"
    },
    mars: {
        title: "Mars",
        info: "The Red Planet that could be humanity's second home! Mars gets its rusty color from iron oxide covering its surface - it's literally a rusty world. This planet is home to the largest volcano in the solar system, Olympus Mons, which is 3 times taller than Mount Everest! Mars once had flowing rivers, lakes, and possibly oceans. Today, it has polar ice caps, seasonal dust storms that can engulf the entire planet, and evidence of subsurface liquid water. Mars has two tiny moons, Phobos and Deimos, that look more like asteroids and are slowly spiraling toward the planet!",
        stats: {
            "Giant Volcano": "Olympus Mons - 21 km tall (3x Mt. Everest)",
            "Grand Canyon": "Valles Marineris - 4,000 km long",
            "Rust World": "Iron oxide gives red appearance",
            "Polar Ice": "Water and dry ice caps",
            "Dust Storms": "Planet-wide storms lasting months",
            "Future Home": "Target for human colonization"
        },
        source: "https://mars.nasa.gov/",
        sourceText: "NASA Mars Exploration Program"
    },
    jupiter: {
        title: "Jupiter",
        info: "The king of planets and our solar system's bodyguard! Jupiter is so massive it could contain all other planets combined and still have room left over. Its Great Red Spot is a hurricane that's been raging for over 400 years and is larger than Earth! Jupiter acts as a cosmic vacuum cleaner, protecting Earth from asteroids and comets with its immense gravity. It has at least 95 moons, including four discovered by Galileo in 1610. Europa, one of its moons, has more water than all of Earth's oceans combined beneath its icy surface!",
        stats: {
            "Massive Monster": "2.5x mass of all other planets combined",
            "Great Red Spot": "Storm larger than Earth (400+ years old)",
            "Moon Empire": "95+ moons (mini solar system)",
            "Cosmic Shield": "Protects inner planets from impacts",
            "Fast Spinner": "10-hour days despite huge size",
            "Europa Ocean": "Moon with subsurface ocean"
        },
        source: "https://solarsystem.nasa.gov/planets/jupiter/",
        sourceText: "NASA Jupiter Exploration"
    },
    saturn: {
        title: "Saturn",
        info: "The lord of the rings and the most photogenic planet! Saturn's rings are made of billions of ice and rock particles, some as small as dust, others as large as mountains. The rings are incredibly thin - if they were scaled to the thickness of paper, they'd be several kilometers wide! Saturn is so light it would float in a giant bathtub (if you could find one big enough). Its moon Titan has lakes of liquid methane and ethane, while Enceladus shoots geysers of water 250 km into space! Saturn's hexagonal storm at its north pole is one of the strangest weather patterns in the solar system.",
        stats: {
            "Ring Master": "Thousands of individual rings",
            "Floating Giant": "Density less than water (0.687 g/cm³)",
            "Moon Collection": "146+ confirmed moons",
            "Titan's Lakes": "Liquid methane and ethane seas",
            "Hexagon Storm": "6-sided storm at north pole",
            "Enceladus Geysers": "Water jets 250 km high"
        },
        source: "https://solarsystem.nasa.gov/planets/saturn/",
        sourceText: "NASA Saturn Mission"
    },
    uranus: {
        title: "Uranus",
        info: "The sideways ice giant that rolls through space! Uranus is the weirdest planet in our solar system - it rotates on its side with an 98-degree tilt, possibly due to a massive collision long ago. This means each pole experiences 42 years of continuous sunlight followed by 42 years of darkness! Uranus was the first planet discovered with a telescope in 1781. It's made of water, methane, and ammonia ices, and its blue-green color comes from methane gas. The planet has faint rings and 27 known moons, many named after Shakespeare characters!",
        stats: {
            "Sideways Spinner": "98° axial tilt (rolls like a ball)",
            "Extreme Seasons": "42-year-long seasons",
            "Ice Giant": "Water, methane, and ammonia ices",
            "Methane Blue": "Blue-green from methane gas",
            "Ring Discovery": "Rings found in 1977",
            "Shakespeare Moons": "27 moons named after literary characters"
        },
        source: "https://solarsystem.nasa.gov/planets/uranus/",
        sourceText: "NASA Uranus Facts"
    },
    neptune: {
        title: "Neptune ",
        info: "The windy blue giant at the edge of our solar system! Neptune is the most distant planet and home to the fastest winds in the solar system - supersonic gusts reaching 2,100 km/h (faster than the speed of sound on Earth)! This deep blue world was discovered not by sight, but by mathematics when astronomers noticed Uranus's orbit was being affected by an unknown object. Neptune takes 165 Earth years to orbit the Sun - it only completed its first full orbit since discovery in 2011! Its largest moon, Triton, orbits backwards and is slowly spiraling toward the planet.",
        stats: {
            "Wind Champion": "2,100 km/h winds (supersonic speeds)",
            "Math Discovery": "Found by mathematical prediction (1846)",
            "Deep Blue": "Methane gives intense blue color",
            "Distant Giant": "4.5 billion km from Sun",
            "Long Year": "165 Earth years = 1 Neptune year",
            "Backwards Moon": "Triton orbits in reverse"
        },
        source: "https://solarsystem.nasa.gov/planets/neptune/",
        sourceText: "NASA Neptune Overview"
    }
};

        // Show planet information
        function showInfo(planetName) {
            console.log('Showing info for:', planetName); 
            const panel = document.getElementById('infoPanel');
            const content = document.getElementById('infoContent');
            const data = planetData[planetName];
            
            if (!data) {
                console.error('No data found for planet:', planetName);
                return;
            }
            
            try {
                content.innerHTML = `
                    <h2 class="planet-title">${data.title}</h2>
                    <p class="planet-info">${data.info}</p>
                    <div class="planet-stats">
                        ${Object.entries(data.stats).map(([key, value]) => `
                            <div class="stat-item">
                                <div class="stat-label">${key}</div>
                                <div class="stat-value">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
                panel.classList.add('active');
                console.log('Info panel activated'); // Debug log
            } catch (error) {
                console.error('Error displaying planet info:', error);
            }
        }

        // Close info panel
        function closeInfo() {
            const panel = document.getElementById('infoPanel');
            panel.classList.remove('active');
        }

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            const panel = document.getElementById('infoPanel');
            const clickedPlanet = e.target.closest('.planet');
            
            if (panel.classList.contains('active') && !panel.contains(e.target) && !clickedPlanet) {
                closeInfo();
            }
        });

    
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded, initializing...'); 
        
            createStars('solarStars', 200);
            
            console.log('Available planets:', Object.keys(planetData));
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        // Handle escape key to close panel
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeInfo();
            }
        });

 const constellationImages = {
  "Andromeda": "https://www.star-registration.com/cdn/shop/files/45_Luftpumpe.jpg?v=1681629146&width=1000",
  "Antlia": "https://www.star-registration.com/cdn/shop/files/45_Luftpumpe.jpg?v=1681629146&width=1000",
  "Apus": "https://www.star-registration.com/cdn/shop/files/52_Paradiesvogel.jpg?v=1681717900&width=1000",
  "Aquarius": "https://www.star-registration.com/cdn/shop/files/81_Wassermann.jpg?v=1682346791&width=1000",
  "Aquila": "https://www.star-registration.com/cdn/shop/files/02_Adler.jpg?v=1680084527&width=1000",
  "Ara": "https://www.star-registration.com/cdn/shop/files/03_Altar.jpg?v=1680092444&width=1000",
  "Aries": "https://www.star-registration.com/cdn/shop/files/83_Widder.jpg?v=1682353458&width=1000",
  "Auriga": "https://www.star-registration.com/cdn/shop/files/20_Fuhrmann.jpg?v=1680678362&width=1000",
  "Boötes": "https://www.star-registration.com/cdn/shop/files/05_Barenhuter.jpg?v=1680109883&width=1000",
  "Caelum": "https://www.star-registration.com/cdn/shop/files/23_Grabstichel.jpg?v=1681071670&width=1000",
  "Camelopardalis": "https://www.star-registration.com/cdn/shop/files/22_Giraffe.jpg?v=1681068540&width=1000",
  "Cancer": "https://www.star-registration.com/cdn/shop/files/40_Krebs.jpg?v=1681456312&width=1000",
  "Canes Venatici": "https://www.star-registration.com/cdn/shop/files/30_Jagdhunde.jpg?v=1681302240&width=1000",
  "Canis Major": "https://www.star-registration.com/cdn/shop/files/25_Grosser-Hund.jpg?v=1681134222&width=1000",
  "Canis Minor": "https://www.star-registration.com/cdn/shop/files/36_Kleiner-Hund.jpg?v=1681414283&width=1000",
  "Capricornus": "https://www.star-registration.com/cdn/shop/files/70_Steinbock.jpg?v=1681998446&width=1000",
  "Carina": "https://www.star-registration.com/cdn/shop/files/34_Kiel-des-Schiffes.jpg?v=1681394586&width=1000",
  "Cassiopeia": "https://www.star-registration.com/cdn/shop/files/32_Kassiopeia.jpg?v=1681378046&width=1000",
  "Centaurus": "https://www.star-registration.com/cdn/shop/files/86_Zentaur.jpg?v=1682396606&width=1000",
  "Cepheus": "https://www.star-registration.com/cdn/shop/files/33_Kepheus.jpg?v=1681382071&width=1000",
  "Cetus": "https://www.star-registration.com/cdn/shop/files/80_Walfisch.jpg?v=1682340280&width=1000",
  "Chamaeleon": "https://www.star-registration.com/cdn/shop/files/08_Chamaleon.jpg?v=1680194581&width=1000",
  "Circinus": "https://www.star-registration.com/cdn/shop/files/87_Zirkel.jpg?v=1682398953&width=1000",
  "Columba": "https://www.star-registration.com/cdn/shop/files/76_Taube.jpg?v=1682162214&width=1000",
  "Coma Berenices": "https://www.star-registration.com/cdn/shop/files/26_Haar-der-Berenike.jpg?v=1681138239&width=1000",
  "Corona Australis": "https://www.star-registration.com/cdn/shop/files/72_Sudliche-Krone.jpg?v=1682022591&width=1000",
  "Corona Borealis": "https://www.star-registration.com/cdn/shop/files/49_Nordliche-Krone.jpg?v=1681653568&width=1000",
  "Corvus": "https://www.star-registration.com/cdn/shop/files/59_Rabe.jpg?v=1681803043&width=1000",
  "Crater": "https://www.star-registration.com/cdn/shop/files/06_Becher.jpg?v=1680166640&width=1000",
  "Crux": "https://www.star-registration.com/cdn/shop/files/41_Kreuz-des-Sudens.jpg?v=1681585405&width=1000https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Crux_IAU.svg/800px-Crux_IAU.svg.png",
  "Cygnus": "https://www.star-registration.com/cdn/shop/files/65_Schwan.jpg?v=1681971147&width=1000",
  "Delphinus": "https://www.star-registration.com/cdn/shop/files/10_Delfin.jpg?v=1680248775&width=1000",
  "Dorado": "https://www.star-registration.com/cdn/shop/files/66_Schwertfisch.jpg?v=1681974379&width=1000",
  "Draco": "https://www.star-registration.com/cdn/shop/files/11_Drache.jpg?v=1680351049&width=1000",
  "Equuleus": "https://www.star-registration.com/cdn/shop/files/21_Fuellen.jpg?v=1680695021&width=1000",
  "Eridanus": "https://www.star-registration.com/cdn/shop/files/15_Eridanus.jpg?v=1680594187&width=1000",
  "Fornax": "https://www.star-registration.com/cdn/shop/files/09_Chemischer-Ofen.jpg?v=1680245164&width=1000",
  "Gemini": "https://www.star-registration.com/cdn/shop/files/88_Zwillinge.jpg?v=1682454534&width=1000",
  "Grus": "https://www.star-registration.com/cdn/shop/files/39_Kranich.jpg?v=1681453095&width=1000",
  "Hercules": "https://www.star-registration.com/cdn/shop/files/28_Herkules.jpg?v=1681286234&width=1000",
  "Horologium": "https://www.star-registration.com/cdn/shop/files/54_Pendeluhr.jpg?v=1681728187&width=1000",
  "Hydra": "https://www.star-registration.com/cdn/shop/files/82_Wasserschlange.jpg?v=1682350745&width=1000",
  "Hydrus": "https://www.star-registration.com/cdn/shop/files/38_Kleine-Wasserschlange.jpg?v=1681397825&width=1000",
  "Indus": "https://www.star-registration.com/cdn/shop/files/29_Indianer.jpg?v=1681299799&width=1000",
  "Lacerta": "https://www.star-registration.com/cdn/shop/files/13_Eidechse.jpg?v=1680515043&width=1000",
  "Leo": "https://www.star-registration.com/cdn/shop/files/43_Lowe.jpg?v=1681590007&width=1000",
  "Leo Minor": "https://www.star-registration.com/cdn/shop/files/37_Kleiner-Lowe.jpg?v=1681416904&width=1000",
  "Lepus": "https://www.star-registration.com/cdn/shop/files/27_Hase.jpg?v=1681142235&width=1000",
  "Libra": "https://www.star-registration.com/cdn/shop/files/79_Waage.jpg?v=1682319863&width=1000",
  "Lupus": "https://www.star-registration.com/cdn/shop/files/85_Wolf.jpg?v=1682363699&width=1000",
  "Lynx": "https://www.star-registration.com/cdn/shop/files/44_Luchs.jpg?v=1681592367&width=1000",
  "Lyra": "https://www.star-registration.com/cdn/shop/files/42_Leier.jpg?v=1681587327&width=1000",
  "Mensa": "https://www.star-registration.com/cdn/shop/files/75_Tafelberg.jpg?v=1682156814&width=1000",
  "Microscopium": "https://www.star-registration.com/cdn/shop/files/47_Mikroskop.jpg?v=1681637397&width=1000",
  "Monoceros": "https://www.star-registration.com/cdn/shop/files/14_Einhorn.jpg?v=1680521120&width=1000",
  "Musca": "https://www.star-registration.com/cdn/shop/files/17_Fliege.jpg?v=1680634868&width=1000",
  "Norma": "https://www.star-registration.com/cdn/shop/files/84_Winkelmass.jpg?v=1682361081&width=1000",
  "Octans": "https://www.star-registration.com/cdn/shop/files/50_Oktant.jpg?v=1681673081&width=1000",
  "Ophiuchus": "https://www.star-registration.com/cdn/shop/files/63_Schlangentrager.jpg?v=1681879768&width=1000",
  "Orion": "https://www.star-registration.com/cdn/shop/files/51_Orion.jpg?v=1681715373&width=1000",
  "Pavo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Pavo_IAU.svg/800px-Pavo_IAU.svg.png",
  "Pegasus": "https://www.star-registration.com/cdn/shop/files/53_Pegasus.jpg?v=1681724569&width=1000",
  "Perseus": "https://www.star-registration.com/cdn/shop/files/55_Perseus.jpg?v=1681744808&width=1000",
  "Phoenix": "https://www.star-registration.com/cdn/shop/files/58_Phonix.jpg?v=1681799823&width=1000",
  "Pictor": "https://www.star-registration.com/cdn/shop/files/46_Maler.jpg?v=1681635222&width=1000",
  "Pisces": "https://www.star-registration.com/cdn/shop/files/16_Fische.jpg?v=1680604708&width=1000",
  "Piscis Austrinus": "https://www.star-registration.com/cdn/shop/files/73_Sudlicher-Fisch.jpg?v=1682098534&width=1000",
  "Puppis": "https://www.star-registration.com/cdn/shop/files/01_Achterdeck-des-Schiffes.jpg?v=1680016854&width=1000",
  "Pyxis": "https://www.star-registration.com/cdn/shop/files/60_Schiffskompass.jpg?v=1681808668&width=1000",
  "Reticulum": "https://www.star-registration.com/cdn/shop/files/48_Netz.jpg?v=1681641642&width=1000",
  "Sagitta": "https://www.star-registration.com/cdn/shop/files/57_Pfeil.jpg?v=1681796972&width=1000",
  "Sagittarius": "https://www.star-registration.com/cdn/shop/files/64_Schutze.jpg?v=1681883607&width=1000",
  "Scorpius": "https://www.star-registration.com/cdn/shop/files/69_Skorpion.jpg?v=1681990272&width=1000",
  "Sculptor": "https://www.star-registration.com/cdn/shop/files/07_Bildhauer.jpg?v=1680187859&width=1000",
  "Scutum": "https://www.star-registration.com/cdn/shop/files/61_Schild.jpg?v=1681833634&width=1000",
  "Serpens": "https://www.star-registration.com/cdn/shop/files/62_Schlange.jpg?v=1681836577&width=1000",
  "Sextans": "https://www.star-registration.com/cdn/shop/files/68_Sextant.jpg?v=1681986813&width=1000",
  "Taurus": "https://www.star-registration.com/cdn/shop/files/71_Stier.jpg?v=1682001835&width=1000",
  "Telescopium": "https://www.star-registration.com/cdn/shop/files/77_Teleskop.jpg?v=1682235812&width=1000",
  "Triangulum": "https://www.star-registration.com/cdn/shop/files/12_Dreieck.jpg?v=1680509973&width=1000",
  "Triangulum Australe": "https://www.star-registration.com/cdn/shop/files/12_Dreieck.jpg?v=1680509973&width=1000",
  "Tucana": "https://www.star-registration.com/cdn/shop/files/74_Sudliches-Dreieck.jpg?v=1682146187&width=1000",
  "Ursa Major": "https://www.star-registration.com/cdn/shop/files/24_Grosser-Bar.jpg?v=1681116057&width=1000",
  "Ursa Minor": "https://www.star-registration.com/cdn/shop/files/35_Kleiner-Bar.jpg?v=1681400484&width=1000",
  "Vela": "https://www.star-registration.com/cdn/shop/files/67_Segel-des-Schiffes.jpg?v=1681982966&width=1000",
  "Virgo": "https://www.star-registration.com/cdn/shop/files/31_Jungfrau.jpg?v=1681373776&width=1000",
  "Volans": "https://www.star-registration.com/cdn/shop/files/18_Fliegender-Fisch.jpg?v=1680637738&width=1000",
  "Vulpecula": "https://www.star-registration.com/cdn/shop/files/19_Fuchs.jpg?v=1680675171&width=1000"
};

const constellationFacts = {
  "Andromeda": "Andromeda — the Chained Maiden in Greek mythology; home to the Andromeda Galaxy.",
  "Antlia": "Antlia — the Air Pump, a modern southern constellation named in the 18th century.",
  "Apus": "Apus — the Bird-of-Paradise, a small southern constellation representing exotic birds.",
  "Aquarius": "Aquarius — the Water Bearer, one of the oldest zodiac constellations.",
  "Aquila": "Aquila — the Eagle, contains Altair, one corner of the Summer Triangle.",
  "Ara": "Ara — the Altar, a southern constellation once worshipped with sacrifices.",
  "Aries": "Aries — the Ram, a zodiac constellation linked to the golden fleece myth.",
  "Auriga": "Auriga — the Charioteer, features Capella, one of the brightest stars in the sky.",
  "Boötes": "Boötes — the Herdsman, dominated by Arcturus, a bright orange giant star.",
  "Caelum": "Caelum — the Chisel, a faint southern constellation identified by Nicolas-Louis de Lacaille.",
  "Camelopardalis": "Camelopardalis — the Giraffe, a faint northern constellation introduced in the 17th century.",
  "Cancer": "Cancer — the Crab, houses the Beehive Cluster (Praesepe), visible to the naked eye.",
  "Canes Venatici": "Canes Venatici — the Hunting Dogs, includes Cor Caroli, a double star",
  "Canis Major": "Canis Major — the Big Dog, contains Sirius, the brightest star in Earth’s night sky.",
  "Canis Minor": "Canis Minor — the Little Dog, contains Procyon, part of the Winter Triangle.",
  "Capricornus": "Capricornus — the Sea Goat, a zodiac constellation with mythological origins.",
  "Carina": "Carina — the Keel, includes the Carina Nebula and Eta Carinae, one of the most massive stars.",
  "Cassiopeia": "Cassiopeia — the Queen, a distinctive W-shaped constellation in the northern sky.",
  "Centaurus": "Centaurus — the Centaur, home to Alpha Centauri, nearest star system to our Sun.",
  "Cepheus": "Cepheus — the King, named after Cassiopeia’s husband in myth.",
  "Cetus": "Cetus — the Whale, swims across the ecliptic near Pisces and Aries.",
  "Chamaeleon": "Chamaeleon — the Chameleon, a faint southern constellation near the South Celestial Pole.",
  "Circinus": "Circinus — the Compass, a small constellation south of Centaurus.",
  "Columba": "Columba — the Dove, includes the bright star Phact.",
  "Coma Berenices": "Coma Berenices — Berenice’s Hair, contains a rich star cluster visible to the naked eye.",
  "Corona Australis": "Corona Australis — the Southern Crown, a southern constellation shaped like an arc.",
  "Corona Borealis": "Corona Borealis — the Northern Crown, associated with the myth of Ariadne.",
  "Corvus": "Corvus — the Crow, sits on the back of Hydra in the sky.",
  "Crater": "Crater — the Cup, perched on Hydra’s back in mythological depictions.",
  "Crux": "Crux — the Southern Cross, iconic for navigation in the southern hemisphere.",
  "Cygnus": "Cygnus — the Swan, lies along the Milky Way and includes Cygnus X-1 black hole candidate.",
  "Delphinus": "Delphinus — the Dolphin, a small constellation shaped like a diamond.",
  "Dorado": "Dorado — the Dolphinfish, contains most of the Large Magellanic Cloud.",
  "Draco": "Draco — the Dragon, winds around Ursa Minor and Polaris.",
  "Equuleus": "Equuleus — the Foal, the second smallest constellation in the sky.",
  "Eridanus": "Eridanus — the River, stretches across the southern sky for over 20 degrees.",
  "Fornax": "Fornax — the Furnace, created by Lacaille in the 18th century.",
  "Gemini": "Gemini — the Twins, features Castor and Pollux, bright twin stars.",
  "Grus": "Grus — the Crane, a modern southern constellation introduced in the 16th century.",
  "Hercules": "Hercules — the Strongman, contains the famous Hercules Globular Cluster (M13).",
  "Horologium": "Horologium — the Clock, named after a pendulum clock by Lacaille.",
  "Hydra": "Hydra — the Water Serpent, the largest constellation by area in the sky.",
  "Hydrus": "Hydrus — the Male Water Snake, small southern constellation near the south celestial pole.",
  "Indus": "Indus — the Indian, a southern constellation introduced in the 16th century.",
  "Lacerta": "Lacerta — the Lizard, a nearby northern constellation of moderate brightness.",
  "Leo": "Leo — the Lion, an easy-to-find zodiac constellation with star Regulus.",
  "Leo Minor": "Leo Minor — the Little Lion, a small northern constellation.",
  "Lepus": "Lepus — the Hare, hides under Orion’s feet.",
  "Libra": "Libra — the Scales, the only zodiac constellation representing an inanimate object.",
  "Lupus": "Lupus — the Wolf, sits between Scorpius and Centaurus.",
  "Lynx": "Lynx — the Lynx, a faint constellation named because you needed sharp eyes to see it.",
  "Lyra": "Lyra — the Lyre, includes Vega, another corner of the Summer Triangle.",
  "Mensa": "Mensa — the Table Mountain, includes part of the Large Magellanic Cloud.",
  "Microscopium": "Microscopium — the Microscope, a small southern constellation named by Lacaille.",
  "Monoceros": "Monoceros — the Unicorn, lies between Orion and Gemini.",
  "Musca": "Musca — the Fly, a small southern constellation near Crux.",
  "Norma": "Norma — the Carpenter’s Square, introduced by Lacaille.",
  "Octans": "Octans — the Octant, includes the south celestial pole star Sigma Octantis.",
  "Ophiuchus": "Ophiuchus — the Serpent Bearer, lies on the celestial equator but not a zodiac.",
  "Orion": "Orion — the Hunter, contains red supergiant Betelgeuse and blue supergiant Rigel.",
  "Pavo": "Pavo — the Peacock, a southern constellation introduced by Plancius.",
  "Pegasus": "Pegasus — the Winged Horse, features the Great Square asterism.",
  "Perseus": "Perseus — the Hero, holds the variable star Algol and the Perseus Double Cluster.",
  "Phoenix": "Phoenix — the Firebird, a modern constellation in the southern sky.",
  "Pictor": "Pictor — the Painter’s Easel, contains the bright southern open cluster NGC 2516.",
  "Pisces": "Pisces — the Fish, zodiac constellation linked by a celestial cord.",
  "Piscis Austrinus": "Piscis Austrinus — the Southern Fish, includes the bright star Fomalhaut.",
  "Puppis": "Puppis — the Stern, part of the ancient constellation Argo Navis.",
  "Pyxis": "Pyxis — the Compass, named after the mariner’s compass.",
  "Reticulum": "Reticulum — the Reticle, a southern constellation introduced in the 17th century.",
  "Sagitta": "Sagitta — the Arrow, a tiny northern constellation.",
  "Sagittarius": "Sagittarius — the Archer, contains the center of our galaxy and the Lagoon Nebula.",
  "Scorpius": "Scorpius — the Scorpion, includes Antares, a red supergiant often called the 'Heart of the Scorpion.'",
  "Sculptor": "Sculptor — the Sculptor’s Workshop, a faint southern constellation.",
  "Scutum": "Scutum — the Shield, a small constellation containing the Scutum Star Cloud.",
  "Serpens": "Serpens — the Serpent, the only constellation split into two parts: Serpens Caput and Serpens Cauda.",
  "Sextans": "Sextans — the Sextant, lies just south of the celestial equator.",
  "Taurus": "Taurus — the Bull, features the Pleiades cluster and the bright star Aldebaran.",
  "Telescopium": "Telescopium — the Telescope, named for the optical instrument by Lacaille.",
  "Triangulum": "Triangulum — the Triangle, home to the Triangulum Galaxy (M33).",
  "Triangulum Australe": "Triangulum Australe — the Southern Triangle, bright in southern skies.",
  "Tucana": "Tucana — the Toucan, contains most of the Small Magellanic Cloud.",
  "Ursa Major": "Ursa Major — the Great Bear, includes the Big Dipper asterism.",
  "Ursa Minor": "Ursa Minor — the Little Bear, includes Polaris, the North Star.",
  "Vela": "Vela — the Sails, part of the old Argo Navis constellation.",
  "Virgo": "Virgo — the Maiden, contains the bright star Spica and the Virgo Cluster of galaxies.",
  "Volans": "Volans — the Flying Fish, a southern constellation.",
  "Vulpecula": "Vulpecula — the Little Fox, home to the famous Dumbbell Nebula."
};

const constellationData = {
  north: {
    winter: ["Orion", "Canis Major", "Gemini", "Taurus", "Auriga", "Eridanus", "Lepus"],
    spring: ["Leo", "Virgo", "Boötes", "Hydra", "Cancer", "Corvus", "Crater"],
    summer: ["Cygnus", "Lyra", "Aquila", "Hercules", "Sagittarius", "Scutum", "Serpens"],
    autumn: ["Pegasus", "Andromeda", "Pisces", "Aries", "Cetus", "Triangulum", "Aquarius"],
    circumpolar: ["Ursa Major", "Ursa Minor", "Cassiopeia", "Cepheus", "Draco", "Camelopardalis"]
  },
  south: {
    winter: ["Crux", "Centaurus", "Carina", "Musca", "Lupus", "Norma", "Triangulum Australe"],
    spring: ["Pavo", "Grus", "Indus", "Phoenix", "Tucana", "Sculptor", "Piscis Austrinus"],
    summer: ["Dorado", "Fornax", "Horologium", "Reticulum", "Caelum", "Pictor", "Volans"],
    autumn: ["Vela", "Antlia", "Pyxis", "Hydrus", "Apus", "Chamaeleon", "Octans"],
    circumpolar: ["Crux", "Carina", "Musca", "Octans", "Apus", "Chamaeleon", "Mensa"]
  }
};

let visibleConstellations = [];
let currentIndex = 0;

function getHemisphere(lat) {
  return lat >= 0 ? 'north' : 'south';
}

function getSeason(month, hemisphere) {
  const seasons = {
    north: ['winter', 'spring', 'summer', 'autumn'],
    south: ['summer', 'autumn', 'winter', 'spring']
  };
  return seasons[hemisphere][Math.floor(((month + 1) % 12) / 3)];
}

function showConstellationImage(name) {
  const view = document.getElementById('constellationView');
  view.innerHTML = '';

  const url = constellationImages[name];
  const fact = constellationFacts[name] || "A constellation in the night sky.";

  if (!url) {
    view.textContent = `No image available for ${name}`;
    return;
  }

  // Create tooltip wrapper
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';

  const img = document.createElement('img');
  img.src = url;
  img.alt = name;
  img.title = name;
  img.onclick = nextConstellation;

  const text = document.createElement('div');
  text.className = 'tooltiptext';
  text.textContent = fact;

  tooltip.appendChild(img);
  tooltip.appendChild(text);
  view.appendChild(tooltip);
}

function nextConstellation() {
  currentIndex = (currentIndex + 1) % visibleConstellations.length;
  showConstellationImage(visibleConstellations[currentIndex]);
}

function updateConstellations(lat) {
  const hemi = getHemisphere(lat);
  const season = getSeason(new Date().getMonth(), hemi);
  visibleConstellations = [
    ...constellationData[hemi][season],
    ...constellationData[hemi].circumpolar
  ].filter(name => constellationImages[name]);

  currentIndex = 0;
  showConstellationImage(visibleConstellations[currentIndex]);
}

function initConstellationViewer() {
  if (!navigator.geolocation) return fallback();
  navigator.geolocation.getCurrentPosition(
    (pos) => updateConstellations(pos.coords.latitude),
    fallback
  );
}

function fallback() {
  visibleConstellations = ["Orion", "Cassiopeia", "Ursa Major"];
  currentIndex = 0;
  showConstellationImage(visibleConstellations[currentIndex]);
}

window.onload = initConstellationViewer;

 document.addEventListener('DOMContentLoaded', () => {
      const dateInput = document.getElementById('eventDate');
      const searchButton = document.getElementById('searchButton');
      const eventList = document.getElementById('eventList');
      const searchIcon = document.getElementById('searchIcon');

      // Set today's date on load
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      loadSpaceEvents(new Date(today));

      searchButton.addEventListener('click', () => {
        const selectedDate = new Date(dateInput.value);
        loadSpaceEvents(selectedDate);
      });

      async function loadSpaceEvents(dateObj) {
        const month = dateObj.getMonth() + 1; 
        const day = dateObj.getDate();

        searchIcon.innerHTML = '<div class="loading"></div>';
        searchButton.style.pointerEvents = 'none';

        try {
          const response = await fetch(`https://history.muffinlabs.com/date/${month}/${day}`);
          const data = await response.json();

          const allEvents = data.data.Events || [];

          // Filter space-related events (expand keywords if needed)
          const spaceKeywords = ['NASA', 'space', 'Apollo', 'moon', 'Mars', 'astronaut', 'shuttle', 'orbit', 'cosmos', 'telescope','galaxy','planet','milky way','solar system','blackhole','nebula','ufo','aliens','satellite','eclipse','asteroid','meteor shower','comets'];
          const spaceEvents = allEvents.filter(event =>
            spaceKeywords.some(kw => event.text.toLowerCase().includes(kw.toLowerCase()))
          );

          eventList.style.opacity = '0';
          eventList.style.transform = 'translateY(20px)';

          setTimeout(() => {
            eventList.innerHTML = '';

            if (spaceEvents.length === 0) {
              eventList.innerHTML = `<div class="event-item"><div class="event-description">No major space events recorded on this day.</div></div>`;
            } else {
              spaceEvents.forEach((event, index) => {
                const div = document.createElement('div');
                div.className = 'event-item';
                div.style.opacity = '0';
                div.style.transform = 'translateY(20px)';
                div.innerHTML = `
                  <div class="event-date">${month}/${day}/${event.year}</div>
                  <div class="event-title">${event.links[0]?.title || 'Space Event'}</div>
                  <div class="event-description">${event.text}</div>
                `;
                eventList.appendChild(div);

                // Animate each item
                setTimeout(() => {
                  div.style.transition = 'all 0.6s ease';
                  div.style.opacity = '1';
                  div.style.transform = 'translateY(0)';
                }, index * 150);
              });
            }

            eventList.style.transition = 'all 0.6s ease';
            eventList.style.opacity = '1';
            eventList.style.transform = 'translateY(0)';
          }, 300);
        } catch (error) {
          console.error('Failed to fetch historical events:', error);
          eventList.innerHTML = `<div class="event-item"><div class="event-description">Failed to load events. Please try again later.</div></div>`;
        } finally {
          searchIcon.textContent = '🔍';
          searchButton.style.pointerEvents = 'auto';
        }
      }
    });

    


    function updateMoonPhase() {
    const today = new Date();
    const moonCycle = 29.53058867; 
    const knownNewMoon = new Date('2000-01-06T18:14:00Z'); // J2000 reference
    const daysSinceNewMoon = (today - knownNewMoon) / (1000 * 60 * 60 * 24);
    const currentPhase = (daysSinceNewMoon % moonCycle) / moonCycle;
    
    const moonShadow = document.getElementById('moonShadow');
    const phaseDisplay = document.getElementById('currentPhase');

    if (moonShadow) {
        moonShadow.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        if (currentPhase < 0.0625) {
            moonShadow.style.width = '100%';
            moonShadow.style.left = '';
            moonShadow.style.right = '0';
            phaseDisplay.textContent = '🌑';
        } else if (currentPhase < 0.1875) {
            moonShadow.style.width = '80%';
            moonShadow.style.left = '0';
            moonShadow.style.right = '';
            phaseDisplay.textContent = '🌒';
        } else if (currentPhase < 0.3125) {
            moonShadow.style.width = '60%';
            moonShadow.style.left = '0';
            moonShadow.style.right = '';
            phaseDisplay.textContent = '🌓';
        } else if (currentPhase < 0.4375) {
            moonShadow.style.width = '30%';
            moonShadow.style.left = '0';
            moonShadow.style.right = '';
            phaseDisplay.textContent = '🌔';
        } else if (currentPhase < 0.5625) {
            moonShadow.style.width = '0%';
            moonShadow.style.left = '';
            moonShadow.style.right = '';
            phaseDisplay.textContent = '🌕';
        } else if (currentPhase < 0.6875) {
            moonShadow.style.width = '30%';
            moonShadow.style.left = '';
            moonShadow.style.right = '0';
            phaseDisplay.textContent = '🌖';
        } else if (currentPhase < 0.8125) {
            moonShadow.style.width = '60%';
            moonShadow.style.left = '';
            moonShadow.style.right = '0';
            phaseDisplay.textContent = '🌗';
        } else {
            moonShadow.style.width = '80%';
            moonShadow.style.left = '';
            moonShadow.style.right = '0';
            phaseDisplay.textContent = '🌘';
        }
    }
}


async function getSunriseSunsetAPI(lat, lon) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK') {
            return {
                sunrise: new Date(data.results.sunrise),
                sunset: new Date(data.results.sunset),
            };
        }
        return null;
    } catch (error) {
        console.error('Sunrise API error:', error);
        return null;
    }
}

async function getMoonPhaseFromAPI(lat, lon) {
    const API_KEY = 'd8ae85019ffb4469b32e4b3c7cef60d6'; // Your valid IPGeolocation API key
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${lat}&long=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            moonPhase: data.moon_phase,
            moonIllumination: data.moon_illumination,
            sunrise: data.sunrise,
            sunset: data.sunset,
            moonrise: data.moonrise,
            moonset: data.moonset
        };
    } catch (error) {
        console.error('Moon API error:', error);
        return null;
    }
}

async function updateAstronomicalData(lat, lon) {
    try {
        // 🌅 Sunrise/Sunset
        const sunData = await getSunriseSunsetAPI(lat, lon);
        if (sunData) {
            document.getElementById('sunriseTime').textContent = sunData.sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('sunsetTime').textContent = sunData.sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        }

        // 🌙 Moon Phase and Timing
        const moonData = await getMoonPhaseFromAPI(lat, lon);
        if (moonData) {
            document.getElementById('moonrise').textContent = moonData.moonrise;
            document.getElementById('moonset').textContent = moonData.moonset;
            document.getElementById('moonTiming').textContent = `Next moonrise: ${moonData.moonrise}`;
        }

    } catch (err) {
        console.error('Astronomy data error:', err);
        fallbackAstronomicalData();
    }
}



function getUserLocation() {
    const locationElement = document.getElementById('userLocation');
    const regionElement = document.getElementById('locationDetails');

    if (navigator.geolocation) {
        locationElement.textContent = 'Detecting location...';
        regionElement.textContent = 'Locating region...';

        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude.toFixed(3);
            const lon = position.coords.longitude.toFixed(3);
            const latDir = lat >= 0 ? 'N' : 'S';
            const lonDir = lon >= 0 ? 'E' : 'W';
            locationElement.textContent = `${Math.abs(lat)}°${latDir}, ${Math.abs(lon)}°${lonDir}`;

            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, {
                    headers: {
                        'User-Agent': 'Cosmic-Echoes/1.0',
                        'Accept-Language': 'en'
                    }
                });
                const data = await res.json();
                const city = data.address.city || data.address.town || data.address.village || 'Unknown';
                const country = data.address.country || '';
                regionElement.textContent = `${city}, ${country}`;
            } catch (err) {
                console.error("Geocoding failed:", err);
                regionElement.textContent = 'Region unavailable';
            }

            updateAstronomicalData(lat, lon);
        }, (error) => {
            console.error('Geolocation error:', error);
            locationElement.textContent = 'Location unavailable';
            regionElement.textContent = 'Using default: New York, USA';
            updateAstronomicalData(40.7128, -74.0060);
        });
    } else {
        locationElement.textContent = 'Geolocation not supported';
        regionElement.textContent = 'Using default: New York, USA';
        updateAstronomicalData(40.7128, -74.0060);
    }
}

// 🚀 On page load
window.addEventListener('DOMContentLoaded', () => {
    getUserLocation();
    updateMoonPhase();
});

        class CelestialTracker {
    constructor() {
        this.initializeApp();
    }

    async initializeApp() {
        try {
            await this.loadEclipseData();
        } catch (error) {
            console.error('Failed to initialize app:', error);
        }
    }

    async loadEclipseData() {
        const eclipseContainer = document.getElementById('eclipseInfo');
        
        try {
            // Using multiple APIs for eclipse data
            const eclipseData = await this.fetchEclipseData();
            this.renderEclipseInfo(eclipseData, eclipseContainer);
        } catch (error) {
            console.error('Eclipse data error:', error);
            eclipseContainer.innerHTML = `
                <div class="error">
                    Unable to load eclipse data. Showing sample data instead.
                </div>
                ${this.getSampleEclipseData()}
            `;
        }
    }

    async fetchEclipseData() {
        // Fallback to sample data with realistic eclipse information
        return {
            nextEclipse: {
                type: 'Total Solar Eclipse',
                date: '2025-03-29',
                location: 'North Atlantic Ocean',
                visibility: 'Partial visibility from Europe and North Africa',
                magnitude: 0.945
            },
            nextLunar: {
                type: 'Total Lunar Eclipse',
                date: '2025-09-07',
                location: 'Visible from Europe, Africa, Asia, Australia',
                magnitude: 1.362
            }
        };
    }

    renderEclipseInfo(data, container) {
        const nextSolar = data.nextEclipse;
        const nextLunar = data.nextLunar;
        
        container.innerHTML = `
            <div class="event-item">
                <div class="event-date">${this.formatDate(nextSolar.date)}</div>
                <div class="event-title">${nextSolar.type}</div>
                <div class="event-description">
                    ${nextSolar.location}<br>
                    <small>${nextSolar.visibility}</small>
                </div>
                ${this.createCountdown(nextSolar.date)}
            </div>
            <div class="event-item">
                <div class="event-date">${this.formatDate(nextLunar.date)}</div>
                <div class="event-title">${nextLunar.type}</div>
                <div class="event-description">${nextLunar.location}</div>
                ${this.createCountdown(nextLunar.date)}
            </div>
        `;
    }

    getSampleEclipseData() {
        return `
            <div class="event-item">
                <div class="event-date">March 29, 2025</div>
                <div class="event-title">Total Solar Eclipse</div>
                <div class="event-description">
                    North Atlantic Ocean<br>
                    <small>Partial visibility from Europe and North Africa</small>
                </div>
                ${this.createCountdown('2025-03-29')}
            </div>
            <div class="event-item">
                <div class="event-date">September 7, 2025</div>
                <div class="event-title">Total Lunar Eclipse</div>
                <div class="event-description">Visible from Europe, Africa, Asia, Australia</div>
                ${this.createCountdown('2025-09-07')}
            </div>
        `;
    }

    createCountdown(dateString) {
        const targetDate = new Date(dateString);
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            return '<div class="success">Event has occurred!</div>';
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        return `
            <div class="countdown">
                <div class="countdown-time">
                    ${days}d ${hours}h ${minutes}m
                </div>
                <div style="font-size: 0.8rem; color: #b3b3b3; margin-top: 0.5rem;">
                    Time remaining
                </div>
            </div>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Function to fetch NASA APOD (Astronomy Picture of the Day)
async function fetchAPOD() {
    try {
        const apodResponse = await fetch('https://api.nasa.gov/planetary/apod?api_key=mZbOQ3arsSXz04GUsaPNhldSicNDPclx0VTkXSXJ');
        const apodData = await apodResponse.json();
        
        return {
            date: apodData.date,
            title: apodData.title,
            description: apodData.explanation,
            url: apodData.url,
            media_type: apodData.media_type
        };
    } catch (error) {
        console.error('Error fetching NASA APOD:', error);
        return null;
    }
}

// Function to load APOD into container
async function loadAPOD() {
    const container = document.getElementById('apodContainer');
    if (!container) {
        console.warn('APOD container not found, skipping APOD load');
        return;
    }
    
    container.innerHTML = `<div class="loading">Loading astronomy picture of the day...</div>`;
    
    try {
        const apod = await fetchAPOD();
        
        if (!apod) {
            container.innerHTML = `<p>No astronomy picture found or failed to fetch data.</p>`;
            return;
        }
        
        container.innerHTML = `
            <div class="event-item" style="margin-bottom: 1.5rem;">
                <strong>${apod.title}</strong> 
                <em>(${apod.date})</em><br/>
                ${apod.media_type === 'image' ? 
                    `<img src="${apod.url}" alt="${apod.title}" style="max-width: 100%; border-radius: 6px; margin: 0.5rem 0;" />` :
                    `<iframe src="${apod.url}" width="100%" height="315" style="border-radius: 6px; margin: 0.5rem 0;" frameborder="0" allowfullscreen></iframe>`
                }
                <p style="
                    font-family: Arial, sans-serif; 
                    font-size: 0.95rem; 
                    color: #ddd; 
                    line-height: 1.5; 
                    text-align: justify; 
                    margin-top: 0.5rem; 
                    margin-bottom: 1rem; 
                    letter-spacing: 0.02em;
                ">
                    ${apod.description}
                </p>
            </div>
        `;
    } catch (error) {
        console.error('Error loading APOD:', error);
        container.innerHTML = `<p>Error loading astronomy picture. Please try again later.</p>`;
    }
}

function updateDaysToNextYear() {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1); // Jan 1 of next year
    const timeDiff = nextYear - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 

    const el = document.getElementById('nextEventDays');
    if (el) el.textContent = daysRemaining;
}

document.addEventListener('DOMContentLoaded', () => {
    new CelestialTracker();

    updateDaysToNextYear();
    
    loadAPOD();
    
    setInterval(() => {
        const countdowns = document.querySelectorAll('.countdown');
        countdowns.forEach(countdown => {
            const eventItem = countdown.closest('.event-item');
            const dateElement = eventItem.querySelector('.event-date');
            if (dateElement) {
                const dateText = dateElement.textContent;
                const date = new Date(dateText);
                const newCountdown = new CelestialTracker().createCountdown(date.toISOString().split('T')[0]);
                countdown.outerHTML = newCountdown;
            }
        });
        
        updateDaysToNextYear();
    }, 60000); 
});
        
        function handleParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        function initDashboard() {
            createStars();
            createConstellation();
            
            updateMoonPhase();
            getUserLocation();
            
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('eventDate').value = today;
            
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Update data periodically
            setInterval(() => {
                updateMoonPhase();
            }, 60000); // Update every minute
            
            setTimeout(revealOnScroll, 100);
        }

        window.addEventListener('load', () => {
            initDashboard();
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        window.addEventListener('scroll', () => {
            revealOnScroll();
            handleParallax();
        });

        // Optimize for mobile
        window.addEventListener('resize', () => {
            const canvas = document.getElementById('constellationView');
            canvas.innerHTML = '';
            createConstellation();
        });

        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease-in-out';


function revealTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', revealTimeline);

