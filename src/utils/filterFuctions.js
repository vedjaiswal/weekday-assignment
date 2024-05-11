export const filterByRole = (jobs, roles) => {
    const filteredData = jobs.filter(job =>
        roles.some(role =>
          (job.jobRole && job.jobRole.toLowerCase().includes(role.toLowerCase())) ||
          (job.jobDetailsFromCompany && job.jobDetailsFromCompany.toLowerCase().includes(role.toLowerCase()))
        )
      );
}