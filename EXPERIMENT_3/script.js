document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const profileSection = document.getElementById('profileSection');

    jobForm.addEventListener('submit', (e) => {
        
        e.preventDefault();

        
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const jobTitle = document.getElementById('jobTitle').value.trim();
        const experience = document.getElementById('experience').value;
        const skillsString = document.getElementById('skills').value.trim();

    
        document.getElementById('displayFullName').textContent = fullName;
        document.getElementById('displayJobTitle').textContent = jobTitle;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPhone').textContent = phone;
        document.getElementById('displayExperience').textContent = experience;

    
        const nameParts = fullName.split(' ').filter(n => n !== '');
        let initials = '';
        if (nameParts.length >= 2) {
            initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
        } else if (nameParts.length === 1) {
            initials = nameParts[0].substring(0, 2).toUpperCase();
        } else {
            initials = '?';
        }
        document.getElementById('displayAvatar').textContent = initials;

   
        const skillsContainer = document.getElementById('displaySkills');
        skillsContainer.innerHTML = ''; 
        
        if (skillsString) {
            const skillsArray = skillsString.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
            if (skillsArray.length > 0) {
                skillsArray.forEach(skill => {
                    const span = document.createElement('span');
                    span.className = 'skill-tag';
                    span.textContent = skill;
                    skillsContainer.appendChild(span);
                });
            } else {
                skillsContainer.innerHTML = '<span style="color: #64748b; font-style: italic; font-size: 0.9rem;">No skills provided.</span>';
            }
        }

        
        profileSection.style.display = 'block';

       
        if (window.innerWidth < 768) {
            profileSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
