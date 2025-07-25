document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");
  const activitySelect = document.getElementById("activity");

  // Mock activities data (replace with actual API endpoint)
  const activitiesData = [
    { id: 1, name: "Chess Club", description: "Play chess and improve your strategy.", participants: ["alice@mergington.edu", "bob@mergington.edu"] },
    { id: 2, name: "Debate Team", description: "Hone your public speaking and argumentation skills.", participants: ["charlie@mergington.edu", "david@mergington.edu"] },
    { id: 3, name: "Coding Club", description: "Learn to code and build cool projects.", participants: ["eve@mergington.edu", "frank@mergington.edu"] },
  ];

  function displayActivities(activities) {
    if (!activitiesList) return;

    activitiesList.innerHTML = "";
    activities.forEach((activity) => {
      const activityCard = document.createElement("div");
      activityCard.classList.add("activity-card");

      let participantsListHTML = "";
      if (activity.participants && activity.participants.length > 0) {
        participantsListHTML = "<h4>Participants:</h4><ul>";
        activity.participants.forEach((participant) => {
          participantsListHTML += `<li>${participant}</li>`;
        });
        participantsListHTML += "</ul>";
      }

      activityCard.innerHTML = `
                <h3>${activity.name}</h3>
                <p>${activity.description}</p>
                ${participantsListHTML}
            `;
      activitiesList.appendChild(activityCard);
    });
  }

  function populateActivitySelect(activities) {
    if (!activitySelect) return;

    activities.forEach((activity) => {
      const option = document.createElement("option");
      option.value = activity.id;
      option.textContent = activity.name;
      activitySelect.appendChild(option);
    });
  }

  function displayMessage(message, isError = false) {
    if (!messageDiv) return;

    messageDiv.textContent = message;
    messageDiv.className = isError ? "error" : "";
    messageDiv.classList.remove("hidden");

    setTimeout(() => {
      messageDiv.classList.add("hidden");
    }, 3000);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("email");
      const activitySelectInput = document.getElementById("activity");

      if (!emailInput || !activitySelectInput) {
        displayMessage("Email and activity must be selected.", true);
        return;
      }

      const email = emailInput.value;
      const activityId = activitySelectInput.value;

      // Mock signup process (replace with actual API endpoint)
      console.log("Signing up:", email, activityId);
      displayMessage("Signed up successfully!", false);
    });
  }

  displayActivities(activitiesData);
  populateActivitySelect(activitiesData);
});
