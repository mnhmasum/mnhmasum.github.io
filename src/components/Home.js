import React from 'react';
import '../Styles/Home.css';
import resume from '../data/resume.json';

function formatDate(date) {
   if (!date) return 'Present';
   const [year, month] = date.split('-').map(Number);
   return new Date(year, month - 1, 1).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
   });
}

function getDuration(startDate, endDate) {
   const [startYear, startMonth] = startDate.split('-').map(Number);
   const end = endDate ? endDate.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1];
   const totalMonths = Math.max(0, (end[0] - startYear) * 12 + end[1] - startMonth);
   const years = Math.floor(totalMonths / 12);
   const months = totalMonths % 12;
   const parts = [];

   if (years) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
   if (months || !years) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
   return parts.join(', ');
}

function Home() {
   const { profile, socialLinks, skills, experience, certifications, projects, education, settings } = resume;

   return (
      <div className="App">
         <header className="App-header">
            <div className="App-header title">{profile.firstName} <span>{profile.lastName}</span></div>
            <div className="subtitle">{profile.title}</div>

            <div className="horizontal-point" style={{ marginTop: '8px' }}>
               <div><i className="fas fa-envelope mobile-icon" aria-hidden="true" /> <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
               <div><i className="fas fa-mobile-alt mobile-icon" aria-hidden="true" /> <a href={profile.phoneUrl}>{profile.phone}</a></div>
               <div><i className="fas fa-map-marker-alt mobile-icon" aria-hidden="true" /> <span>{profile.location}</span></div>
            </div>
         </header>

         <section>
            <div className="horizontal-point">
               {socialLinks.map((social) => (
                  <div key={social.name} style={social.image ? { marginTop: '10px' } : undefined}>
                     <a href={social.url} aria-label={social.name}>
                        {social.image
                           ? <img width="30" height="30" src={social.image} alt={social.name} />
                           : <i className={`${social.icon} social-icon`} aria-hidden="true" />}
                     </a>
                  </div>
               ))}
            </div>
         </section>

         <section>
            <div className="headline-medium">Summary</div>
            <div>{profile.summary}</div>
         </section>

         <section>
            <div className="headline-medium">Skills:</div>
            <ul style={{ margin: 0 }}>
               {skills.map((skill) => (
                  <li key={skill.category}>{skill.category}: {skill.items.join(', ')}.</li>
               ))}
            </ul>
         </section>

         <section>
            <div className="headline-medium">Experience</div>
            {experience.map((job, index) => (
               <div className={`job${index === 2 ? ' margintop-for-print-mid' : ''}`} key={`${job.company}-${job.startDate}`}>
                  <div className="company-title">{job.company}</div>
                  <div className="designation">
                     {job.title}{' '}
                     <span className="duration">
                        {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        {settings.showExperienceDuration && ` · ${getDuration(job.startDate, job.endDate)}`}
                     </span>
                  </div>
                  <ul>
                     {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
               </div>
            ))}
         </section>

         <section>
            <div className="headline-medium">Certifications</div>
            {certifications.map((certification, index) => (
               <div className={index === 1 ? 'top-gap margintop-for-print-mid' : 'top-gap'} key={certification.credentialId}>
                  <div className="mid-bold">{certification.name}</div>
                  <div className="secondary-title">Issued By: <span className="mid-bold">{certification.issuer}</span></div>
                  <div className="secondary-title">Credential Id: <a href={certification.url}>{certification.credentialId}</a></div>
                  <div style={{ marginTop: '4px', fontSize: '0.9em' }}><strong>Learned:</strong> {certification.learned}</div>
               </div>
            ))}
         </section>

         <section>
            <div className="headline-medium">Projects</div>
            {projects.map((project) => (
               <div className="bottom-gap" key={project.name}>
                  <div className="headline-small">{project.name}</div>
                  <div>{project.description}</div>
                  <div className="secondary-title">Website: <a href={project.url}>{project.linkLabel}</a></div>
               </div>
            ))}
         </section>

         <section>
            <div className="headline-medium">Education</div>
            <ul>
               {education.map((item) => (
                  <li key={item.degree}><span>{item.degree}</span>, {item.institution} ({item.years}) • {item.details}</li>
               ))}
            </ul>
         </section>
      </div>
   );
}

export default Home;
