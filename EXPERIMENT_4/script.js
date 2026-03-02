document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const jobContainer = document.getElementById('jobContainer');

    jobForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

      
        const title = document.getElementById('jobTitle').value.trim();
        const company = document.getElementById('companyName').value.trim();
        const location = document.getElementById('location').value.trim();
        const description = document.getElementById('description').value.trim();

      
        if (!title || !company || !location || !description) {
            alert('Please fill in all fields.');
            return;
        }

   
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        
        jobCard.innerHTML = `
            <h3 class="job-title">${title}</h3>
            <div class="company-name">${company}</div>
            <div class="job-location">
                 ${location}
            </div>
            <p class="job-description">${description}</p>
            <button class="delete-btn">Remove</button>
        `;

       
        const deleteBtn = jobCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            jobContainer.removeChild(jobCard);
        });

        
        jobContainer.appendChild(jobCard);

       
        jobForm.reset();
    });
});
