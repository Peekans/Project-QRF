import React, { useState } from 'react';
import './JobMarket.css';
import { Link } from 'react-router-dom';
import { FaFilter, FaSearch, FaMapMarkerAlt, FaClock, FaBriefcase, FaStar } from 'react-icons/fa';

const JobMarket = () => {
  // Sample job data - this would be fetched from an API in a real implementation
  const initialJobs = [
    {
      id: 1,
      title: "Drone Real Estate Photographer",
      company: "Desert View Properties",
      location: "Las Vegas, NV",
      datePosted: "April 25, 2025",
      employmentType: "Part-time",
      expertise: "Beginner",
      salary: "$25 - $35 an hour",
      description: "Capture aerial photos and videos of properties for real estate listings.",
      rating: 4.7,
      quickApply: true,
      tags: ["Real Estate", "Photography"]
    },
    {
      id: 2,
      title: "Construction Site Drone Operator",
      company: "Nevada Builders Alliance",
      location: "Henderson, NV",
      datePosted: "April 23, 2025",
      employmentType: "Full-time",
      expertise: "Intermediate",
      salary: "$45,000 - $55,000 a year",
      description: "Monitor construction progress and perform site surveys using drone technology.",
      rating: 4.2,
      quickApply: true,
      tags: ["Construction", "Surveying"]
    },
    {
      id: 3,
      title: "Wedding Drone Videographer",
      company: "Everlasting Moments",
      location: "Las Vegas, NV",
      datePosted: "April 19, 2025",
      employmentType: "Contract",
      expertise: "Intermediate",
      salary: "$150 - $300 per event",
      description: "Capture aerial footage of wedding ceremonies and receptions in the Las Vegas area.",
      rating: 4.8,
      quickApply: false,
      tags: ["Weddings", "Videography"]
    },
    {
      id: 4,
      title: "Drone Racing Coach",
      company: "Vegas Drone League",
      location: "Las Vegas, NV",
      datePosted: "April 16, 2025",
      employmentType: "Part-time",
      expertise: "Expert",
      salary: "$30 - $40 an hour",
      description: "Train aspiring drone racers and help organize local racing events.",
      rating: 4.5,
      quickApply: true,
      tags: ["Racing", "Coaching"]
    },
    {
      id: 5,
      title: "Agricultural Drone Pilot",
      company: "Nevada Farm Bureau",
      location: "Pahrump, NV",
      datePosted: "April 12, 2025",
      employmentType: "Full-time",
      expertise: "Intermediate",
      salary: "$50,000 - $60,000 a year",
      description: "Use drones to monitor crop health, apply treatments, and collect agricultural data.",
      rating: 4.3,
      quickApply: false,
      tags: ["Agriculture", "Data Collection"]
    }
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [filters, setFilters] = useState({
    employmentType: [],
    expertise: [],
    location: '',
    search: ''
  });

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    // Filter by employment type
    if (filters.employmentType.length > 0 && !filters.employmentType.includes(job.employmentType)) {
      return false;
    }
    
    // Filter by expertise level
    if (filters.expertise.length > 0 && !filters.expertise.includes(job.expertise)) {
      return false;
    }
    
    // Filter by location
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Filter by search term
    if (filters.search && !(
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.description.toLowerCase().includes(filters.search.toLowerCase())
    )) {
      return false;
    }
    
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    if (filterType === 'employmentType' || filterType === 'expertise') {
      setFilters(prevFilters => {
        const updatedFilter = prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter(item => item !== value)
          : [...prevFilters[filterType], value];
        
        return {
          ...prevFilters,
          [filterType]: updatedFilter
        };
      });
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterType]: value
      }));
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      employmentType: [],
      expertise: [],
      location: '',
      search: ''
    });
  };

  return (
    <div className="job-market-container">
      
      <div className="job-market-header">
        <h1>Las Vegas Drone Job Market</h1>
      </div>
      
      <div className="search-and-filter-container">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for jobs, companies, or keywords" 
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>
        
        <div className="filter-section">
          <div className="filter-header">
            <FaFilter className="filter-icon" />
            <h3>Filters</h3>
            <button className="reset-button" onClick={resetFilters}>Reset</button>
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <h4>Employment Type</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.employmentType.includes('Full-time')}
                    onChange={() => handleFilterChange('employmentType', 'Full-time')}
                  />
                  <span>Full-time</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.employmentType.includes('Part-time')}
                    onChange={() => handleFilterChange('employmentType', 'Part-time')}
                  />
                  <span>Part-time</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.employmentType.includes('Contract')}
                    onChange={() => handleFilterChange('employmentType', 'Contract')}
                  />
                  <span>Contract</span>
                </label>
              </div>
            </div>
            
            <div className="filter-group">
              <h4>Expertise Level</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.expertise.includes('Beginner')}
                    onChange={() => handleFilterChange('expertise', 'Beginner')}
                  />
                  <span>Beginner</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.expertise.includes('Intermediate')}
                    onChange={() => handleFilterChange('expertise', 'Intermediate')}
                  />
                  <span>Intermediate</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.expertise.includes('Expert')}
                    onChange={() => handleFilterChange('expertise', 'Expert')}
                  />
                  <span>Expert</span>
                </label>
              </div>
            </div>
            
            <div className="filter-group">
              <h4>Location</h4>
              <input 
                type="text" 
                placeholder="Enter location" 
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="job-listings">
        <div className="job-count">
          <p>Showing {filteredJobs.length} job opportunities</p>
        </div>
        
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <h2>{job.title}</h2>
                <div className="company-rating">
                  <span>{job.company}</span>
                </div>
              </div>
              
              <div className="job-details">
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{job.location}</span>
                </div>
                <div className="detail-item">
                  <FaClock className="detail-icon" />
                  <span>Posted: {job.datePosted}</span>
                </div>
                <div className="detail-item">
                  <FaBriefcase className="detail-icon" />
                  <span>{job.employmentType}</span>
                </div>
              </div>
              
              <div className="job-salary-expertise">
                <div className="salary">{job.salary}</div>
                <div className="expertise-level">
                  <span className={`expertise ${job.expertise.toLowerCase()}`}>
                    {job.expertise}
                  </span>
                </div>
              </div>
              
              <p className="job-description">{job.description}</p>
              
              <div className="job-tags">
                {job.tags.map((tag, index) => (
                  <span key={index} className="job-tag">{tag}</span>
                ))}
              </div>
              
              <div className="job-actions">
                {job.quickApply ? (
                  <button className="apply-button">Easy Apply</button>
                ) : (
                  <button className="apply-button outline">Apply</button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-jobs-found">
            <h3>No jobs match your search criteria</h3>
            <p>Try adjusting your filters or search terms</p>
            <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobMarket;