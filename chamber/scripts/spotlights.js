const spotlightContainer = document.getElementById("spotlight-container");
const membersURL = "data/members.json"; // Update if your path is different

async function loadSpotlights() {
  try {
    const response = await fetch(membersURL);
    if (!response.ok) throw Error(await response.text());
    const data = await response.json();

    const qualifiedMembers = data.members.filter(member =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    if (qualifiedMembers.length === 0) {
      spotlightContainer.innerHTML = "<p>No featured members at this time.</p>";
      return;
    }

    // Randomize selection safely
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selectedCount = Math.min(Math.floor(Math.random() * 2) + 2, qualifiedMembers.length);
    const selected = shuffled.slice(0, selectedCount);

    displaySpotlights(selected);
  } catch (error) {
    console.error("Spotlight error:", error);
    spotlightContainer.innerHTML = "<p>Error loading spotlights.</p>";
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = ""; // Clear previous content
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h4>${member.name}</h4>
      <img src="${member.logo}" alt="${member.name} logo" loading="lazy" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>${member.membershipLevel} Member</strong></p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

// Update last modified once
document.getElementById("lastModified").textContent = document.lastModified;

loadSpotlights();
