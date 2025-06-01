// Experience data
const experiences = [
    {
        title: "Growth & Product – POI",
        company: "Zomato",
        location: "Gurgaon",
        duration: "Dec'24 – Apr'25",
        logo: "https://b.zmtcdn.com/images/logo/zomato_logo_2017.png",
        description: [
            "Conducted user research, benchmarked it with 15+ apps across the globe, wrote 4 PRDs, and pitched 'Food Profile'",
            "Ideated 4+ growth initiatives (N2C, affordable meals, influencer program), driving repeat OV by 23% & first-time orders by 15%",
            "Launched 'Quick', leading supply expansion and hygiene (ORS, breach), while formulating strategies to optimize KPT across Zomato"
        ]
    },
    {
        title: "Product Management Intern",
        company: "Reway",
        location: "DTU - IIF startup",
        duration: "Sept'24 – Nov'24",
        logo: "./assets/reway.png",
        description: [
            "Led 0→1 design of Reway's e-waste marketplace - ran 10+ user interviews to define personas, journeys & prioritized MVP features",
            "Grew DAUs 2x in 15 days via rapid rollout of in-app news & insights feature, boosting engagement among early adopters",
            "Drove end-to-end launch of NLP chatbot using Dialogflow, led roadmap, & automated 60%+ of support queries",
            "Improved document upload rate by 29% by introducing drag-and-drop and bulk upload on the seller portal"
        ]
    },
    {
        title: "Summer Analyst – Lead Advisory",
        company: "Grant Thornton",
        location: "New Delhi",
        duration: "May'24 – July'24",
        logo: "https://www.grantthornton.in/globalassets/1.-member-firms/india/assets/logos/gt_logo_horizontal.png",
        description: [
            "Prepared an in-depth analysis of 370+ mainboard IPOs over the past 12 years using Chittorgarh, S&P Capital IQ, and Private Circle",
            "Conducted company profiling & segmentation to identify business development opportunities worth ₹10 Cr",
            "Uncovered a 3% higher potential for IPO subscription in green chemistry-focused companies by analyzing 22+ chemical industry IPOs"
        ]
    },
    {
        title: "Business Consulting – C&O Intern",
        company: "KPMG India",
        location: "Hyderabad",
        duration: "Dec'23 – Jan'24",
        logo: "./assets/kpmg.png",
        description: [
            "Proposed a reduction of INR 50 lakh yearly cost through competitive benchmarking on 15+ Top SKUs by supervising 6 market visits",
            "Performed a comprehensive work content analysis across 24 manufacturing lines in 3 plants, revealing potential cost saving of 1.3 Cr",
            "Collaborated in a team of 2 for sugar procurement, using 4+ strategic initiatives resulting in validated savings worth 1.35 Cr"
        ]
    }
];

// Achievement data
const achievements = [    {
        title: "Pre-Finalist (Top 1%) - BrAINWARS 2024",
        description: "Among 1200+ teams nationwide in a prestigious case competition by Bain & Company (BCN)",
        logo: "./assets/bcn.png"
    },
    {
        title: "Campus Winner - ZS Campus Beats 2024",
        description: "Secured top spot in a business case challenge conducted by ZS Associates",
        logo: "./assets/ZS.png"
    },
    {
        title: "National Finalist (Top 10) - IIM Lucknow",
        description: "Marketing Case Competition – shortlisted among 950+ teams across India",
        logo: "./assets/iiml.png"
    },
    {
        title: "United Nations Millennium Fellow 2023",
        description: "International fellowship by the United Nations, for social-impact driven innovation",
        logo: "./assets/un.png"
    }
];

// Fetch GitHub profile and related data
async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/harshagg257');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile');
        }
        const data = await response.json();
        updateProfile(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function updateProfile(data) {
    // Update profile image
    const profileImage = document.getElementById('profile-image');
    profileImage.src = data.avatar_url;
    
    // Update GitHub link
    const githubLink = document.getElementById('github-link');
    githubLink.href = data.html_url;
}

// Lazy loading observer
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.1
});

function updateExperience() {
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = '';

    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';

        item.innerHTML = `
            <div class="experience-item-content">
                <div class="experience-header">
                    <img data-src="${exp.logo}" alt="${exp.company}" class="company-logo lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                    <div class="experience-details">
                        <h3 class="experience-title">${exp.title}</h3>
                        <div class="company-name">${exp.company} - ${exp.location}</div>
                        <div class="experience-duration">${exp.duration}</div>
                    </div>
                </div>
                <div class="experience-description">
                    <ul>
                        ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        experienceContainer.appendChild(item);
        
        // Observe the newly added image
        const lazyImage = item.querySelector('.lazy');
        if (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        }
    });
}

function updateAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.innerHTML = achievements.map(achievement => `
        <div class="achievement-item">
            <div class="achievement-logo">
                <img data-src="${achievement.logo}" alt="${achievement.title}" class="lazy achievement-icon" 
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
            </div>
            <div class="achievement-content">
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-description">${achievement.description}</p>
            </div>
        </div>
    `).join('');

    // Observe all lazy loaded images in achievements
    const lazyImages = achievementsContainer.querySelectorAll('.lazy');
    lazyImages.forEach(img => lazyImageObserver.observe(img));
}

// Real-time clock update
function updateRealTime() {
    const timeElement = document.getElementById('real-time');
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    timeElement.textContent = new Date().toLocaleTimeString('en-US', options) + ' IST';
}

// Update clock every second
setInterval(updateRealTime, 1000);
updateRealTime(); // Initial call

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubData();
    updateExperience();
    updateAchievements();
});
