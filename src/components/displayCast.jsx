function updateRosterUI() {
    const container = document.getElementById('roster-container');
    container.innerHTML = '';
  
    roster.forEach(member => {
      const div = document.createElement('div');
      div.textContent = `${member.name} (${member.city})`;
      container.appendChild(div);
    });
  }